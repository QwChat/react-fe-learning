import * as React from "react"
import { isSupportWebP } from "../../utils/image"

interface IImageProps {
    src: string
    alt?: string
}

interface IImageState {}

class Image extends React.Component<IImageProps, IImageState> {
    public static defaultProps = {
        src: ""
    }

    public render(): JSX.Element {
        return <img src={this.getSrc()} alt={this.props.alt} />
    }

    private getSrc() {
        const { src } = this.props
        if (src.indexOf("_.webp") === -1 && isSupportWebP) {
            return `${src}_.webp`
        }

        return src
    }
}

export default Image
