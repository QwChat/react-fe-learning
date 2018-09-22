const { resolve } = require("path")
const glob = require("glob")
const { readFileSync, writeFileSync } = require("fs")

const files = glob.sync(resolve("./*.json"))

files.forEach((file) => {
    const str = readFileSync(file, "utf8")
    const myRegExp = /(\s?mtopjsonp\d\()(.*)(\))/g

    if (!myRegExp.test(str)) {
        console.log(file, "is error for jsonp function")
    }

    writeFileSync(
        file,
        str.replace(myRegExp, (m, p1, p2, p3) => {
            return m ? p2 : m
        })
    )
})
