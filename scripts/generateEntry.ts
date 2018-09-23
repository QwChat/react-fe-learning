import { writeFileSync } from "fs"
import { resolve, relative } from "path"
import glob from "glob"

const pages = glob.sync(resolve(__dirname, "./../src/pages/*"))

pages.forEach((page) => {
    const name = page.split("/").slice(-1)[0]
    const entryFolder = resolve(__dirname, "../src/entries")
    const entryFilename = entryFolder + `/${name.toLocaleLowerCase()}.tsx`

    const entryContent = `// GENERATED CODE -- DO NOT EDIT!
// generate by scripts "scripts/generateEntry.ts"

import * as React from "react"
import * as ReactDOM from "react-dom"
import "../scss/reset.scss"
import Index from "${relative(entryFolder, page)}"

ReactDOM.render(<Index />, document.getElementById("reactApp"))
`
    writeFileSync(entryFilename, entryContent)
})
