const path = require("path");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports =  {
    mode: "development",
    entry: "./src/index",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: ""
    },
    devtool:"cheap-module-eval-source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                loader: "url-loader?limit=80000&name=images/[name].[ext]",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                     {
                         loader: "css-loader",
                         options:{
                             importLoaders: 1,
                             modules:{
                                localIdentName:"[name]__[local]__[hash:base64:5]"
                             }
                         }
                    },
                     {loader: "style-loader"},
                     {
                        loader: "postcss-loader",
                        options:{
                            ident:"postcss",
                            plugins:()=>[autoprefixer()]
                        }
                    }
                    ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: "index.html",
            inject:"body"

        })
    ]
}