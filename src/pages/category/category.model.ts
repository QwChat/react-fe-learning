import { observable, computed, action } from "mobx"
import { SideItem, SectionCategory, CategoryList } from "../../services/category"

export default class CategoryModel {
    @observable public activeSideId = ""
    @observable public sideItems: SideItem[] = []

    @observable
    private rootSectionCategoryList: SectionCategory[] = []

    @observable
    private sideSubListMap: { [key: string]: SectionCategory[] } = {}

    @computed
    public get sectionCategoryList(): SectionCategory[] {
        console.log(this.sideSubListMap)

        return this.sideSubListMap[this.activeSideId] || this.rootSectionCategoryList
    }

    constructor() {
        this.getSideItemSubItems("")
    }

    @action.bound
    public toggleSideItem(sideItem: SideItem) {
        this.activeSideId = sideItem.id
        if (!this.sideSubListMap[this.activeSideId]) {
            this.getSideItemSubItems(this.activeSideId)
        }
    }

    private getSideItemSubItems(sideId: string) {
        CategoryList({ sideId }).then((data) => {
            if (data.sideItems && data.sideItems.length > 0) {
                this.sideItems = data.sideItems
            }

            if (!this.activeSideId) {
                this.rootSectionCategoryList = data.sectionCategoryList
            } else {
                this.sideSubListMap[this.activeSideId] = data.sectionCategoryList
            }
        })
    }
}
