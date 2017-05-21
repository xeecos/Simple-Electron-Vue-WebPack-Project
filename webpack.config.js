var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [{
    entry: './src/renderer/main.js',
    output: {
        path: path.resolve(__dirname, './dist/client/html'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(css|sass)$/,
                loader: 'sass-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',
        template: 'src/renderer/html/index.ejs',
        inject: false
    }), new HtmlWebpackPlugin({
        title: 'error',
        filename: 'error.html',
        template: 'src/renderer/html/error.ejs',
        inject: false
    })]
}, {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, './dist/app'),
        publicPath: '/dist/',
        filename: 'app.js'
    },
    target: 'electron',
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
        }),
    ]
}]
