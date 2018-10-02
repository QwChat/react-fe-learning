import webpack from "webpack"
import { resolve } from "path"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
// import ErrorOverlayPlugin from "error-overlay-webpack-plugin"
import { CheckerPlugin } from "awesome-typescript-loader"
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
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    useCache: true,
                    useBabel: true,
                    babelOptions: {
                        babelrc: false /* Important line */,
                        presets: [ [ "@babel/preset-env", { targets: "last 2 versions, ie 11", modules: false } ] ],
                        plugins: [ "react-hot-loader/babel" ]
                    },
                    babelCore: "@babel/core" // needed for Babel v7
                }
            },
            // https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [ "@babel/preset-env", { targets: { browsers: "last 2 versions" } } ],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            [ "@babel/plugin-proposal-decorators", { legacy: true } ],
                            [ "@babel/plugin-proposal-class-properties", { loose: true } ],
                            [ "@babel/plugin-proposal-object-rest-spread" ],
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
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
                            modules: true,
                            localIdentName: __DEV__ ? "[local]--[hash:base64:5]" : "[hash:base64:5]"
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
                test: /\.css$/,
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        // new ErrorOverlayPlugin(),
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
