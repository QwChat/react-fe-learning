import webpack from "webpack"
import { resolve } from "path"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import SpeedMeasurePlugin from "speed-measure-webpack-plugin"
import { IsProd, GetAllEntries } from "./helper"

const smp = new SpeedMeasurePlugin()

const __DEV__: boolean = !IsProd()
const prodPlugins = [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
const minimizer = [
    new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({})
]

export const webpackConfig: webpack.Configuration = {
    mode: __DEV__ ? "development" : "production",
    entry: GetAllEntries(),
    output: {
        publicPath: "/",
        path: resolve(__dirname, "./dist"),
        filename: __DEV__ ? "js/[name].bundle.js" : "js/[name].[hash].bundle.js",
        chunkFilename: __DEV__ ? "js/[name].chunk.bundle.js" : "js/[name].[chunkhash].bundle.js"
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx" ]
    },
    optimization: {
        minimizer,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test(chunks) {
                        return chunks.resource && /\/node_modules\/(react|react-dom|axios)\//i.test(chunks.resource)
                    },
                    filename: __DEV__ ? "js/[name].bundle.js" : "js/[name].[hash].bundle.js",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     test: /\.(j|t)sx?$/,
            //     loader: "source-map-loader"
            // },
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [ "@babel/preset-env", { targets: { browsers: "last 2 versions" } } ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            [ "@babel/plugin-proposal-decorators", { legacy: true } ],
                            [ "@babel/plugin-proposal-class-properties", { loose: true } ],
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: __DEV__ ? "style-loader" : MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: __DEV__
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: __DEV__,
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            data: `$env: ${__DEV__};`,
                            sourceMap: __DEV__
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //     tslint: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__
        })
    ].concat(__DEV__ ? [] : prodPlugins)
}

function removeItemFormArray(arr: string[], item: string): string[] {
    const newArr = [ ...arr ]

    newArr.splice(arr.indexOf(item), 1)

    return newArr
}

// HtmlWebpackPlugin
if (webpackConfig.plugins) {
    const entry = GetAllEntries()
    for (const page in entry) {
        if (entry.hasOwnProperty(page)) {
            webpackConfig.plugins.push(
                new HtmlWebpackPlugin({
                    excludeChunks: removeItemFormArray(Object.keys(entry), page),
                    template: "./src/index.html",
                    filename: `${page}.html`
                })
            )
        }
    }
}

if (__DEV__) {
    webpackConfig.devtool = "cheap-module-eval-source-map"
}

export default smp.wrap(webpackConfig)
