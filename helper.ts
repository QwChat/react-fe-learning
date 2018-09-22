import { resolve, basename, extname } from "path"
import { sync } from "glob"

import { Entry } from "webpack"

export function IsProd(): boolean {
    return process.env.NODE_ENV === "production"
}

export function GetAllEntries(): Entry {
    const __DEV__: boolean = !IsProd()
    const files: string[] = sync(resolve(__dirname, "./src/entries/*.tsx"))
    const entry: Entry = {}

    files.forEach((file) => {
        const name = basename(file, extname(file))
        entry[name] = __DEV__
            ? [ "webpack-hot-middleware/client?path=/__webpack_hmr&name=web&overlay=false", file ]
            : [ file ]
    })

    return entry
}
