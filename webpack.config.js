var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: ['webpack-hot-middleware/client',
        './server/views/index.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
            }, {
                loader: "sass-loader",
            }]
        }, {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', "react-hmre", 'stage-1', 'stage-2', 'stage-3'],
                plugins: ['transform-class-properties']
            }
        }, {
            test: /\.(jpe?g|png|gif|eot|jpg|ico|svg|ttf|woff|woff2)$/i,
            loaders: [
                'file-loader?images/hash=sha512&digest=hex&name=views/publics/images/[hash].[ext]'
            ]
        }]
    }
}