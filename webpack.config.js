const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}