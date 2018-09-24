import * as React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./index.scss"
import { Banner } from "../../../services/homepage"

interface IBannersProps {
    banners: Banner[]
}

interface IBannersState {
    currentIndex: number
}

export class Banners extends React.Component<IBannersProps, IBannersState> {
    private settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    public render(): JSX.Element {
        return (
            <div className={styles.banners}>
                <Slider {...this.settings}>
                    {this.props.banners.map((banner, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <img src={banner.image} alt="" />
                            </div>
                        )
                    })}
                </Slider>
                <div className={styles.shadow}>
                    <img src={require("./shadow.png")} alt="" />
                </div>
            </div>
        )
    }
}
