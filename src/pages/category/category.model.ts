import { observable, action } from "mobx"
import { SideItem, SectionCategory, CategoryList } from "../../services/category"
import { IsErrorResponse } from "../../webapi"

export default class CategoryModel {
    @observable public activeSideId = ""
    @observable public sideItems: SideItem[] = []

    @observable public sectionCategoryList: SectionCategory[] = []

    @observable private sideSubListMap: { [key: string]: SectionCategory[] } = {}

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
            if (IsErrorResponse(data)) {
                return
            }

            if (data.sideItems && data.sideItems.length > 0) {
                this.sideItems = data.sideItems
            }

            if (this.activeSideId) {
                this.sideSubListMap[this.activeSideId] = data.sectionCategoryList
            }

            this.sectionCategoryList = data.sectionCategoryList
        })
    }
}
