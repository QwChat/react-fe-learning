import * as React from "react"
import { autorun } from "mobx"
import { observer } from "mobx-react"
import { hot } from "react-hot-loader"
import classnames from "classnames"
import DevTools from "mobx-react-devtools"
import makeInspectable from "mobx-devtools-mst"

import styles from "./index.scss"

import CategoryModel from "./category.model"

import Image from "../../components/Image"

interface ICategoryProps {
    store: CategoryModel
}

interface ICategoryState {}

@observer
class Category extends React.Component<ICategoryProps, ICategoryState> {
    public render(): JSX.Element {
        const { store: { sideItems, sectionCategoryList, activeSideId, toggleSideItem } } = this.props

        console.log(sectionCategoryList)

        return (
            <div className={styles.wrapper}>
                <h3>全部分类</h3>
                <div className={styles.list}>
                    <div className={styles.sideItems}>
                        {sideItems.map((item, idx) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => toggleSideItem(item)}
                                    className={classnames(styles.item, {
                                        [styles.active]: activeSideId === item.id || (idx === 0 && !activeSideId)
                                    })}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.sideItemSub}>
                        {sectionCategoryList.map((section) => {
                            return (
                                <div key={section.id}>
                                    <h4 className={styles.sectionTitle}>{section.name}</h4>

                                    <div className={styles.sectionContent}>
                                        {section.categories.map((category) => {
                                            return (
                                                <div className={styles.categoryItem} key={category.id}>
                                                    <a href={category.url}>
                                                        <div className={styles.img}>
                                                            <Image src={category.image} alt={category.name} />
                                                        </div>
                                                        <p>{category.name}</p>
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <DevTools
                    position={{
                        top: 50,
                        right: 50
                    }}
                />
            </div>
        )
    }
}

const store = new CategoryModel()

autorun(() => {
    console.log(store.activeSideId, "auto run")
})

makeInspectable(store)

export default hot(module)(function CategoryPage() {
    return <Category store={store} />
})
