import * as React from "react"
import { ProductItem } from "./../../../services/homepage"

import styles from "./index.scss"

interface IProductsProps {
    products: ProductItem[]
}

interface IProductsState {}

export class Products extends React.Component<IProductsProps, IProductsState> {
    public render(): JSX.Element {
        return (
            <section className={styles.sectionItem}>
                <h3>为你精选</h3>
                <div className={styles.products}>
                    {this.props.products.map((product, index) => {
                        return (
                            <div key={index} className={styles.productItem}>
                                <div className={styles.img}>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.name}>{product.title}</p>
                                    <p className={styles.price}>￥{product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Products
