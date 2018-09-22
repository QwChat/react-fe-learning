import webpack from "webpack"
import { resolve } from "path"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
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

console.log(__DEV__, process.env.NODE_ENV)

export const webpackConfig: webpack.Configuration = {
    mode: __DEV__ ? "development" : "production",
    entry: GetAllEntries(),
    output: {
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
                    __DEV__ ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: __DEV__
                        }
                    },
                    {
                        loader: "sass-loader",
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
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            __DEV__
        })
    ].concat(__DEV__ ? [] : prodPlugins)
}

if (__DEV__) {
    webpackConfig.devtool = "cheap-module-eval-source-map"
}

export default smp.wrap(webpackConfig)
