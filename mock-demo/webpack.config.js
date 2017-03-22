let webpack = require('webpack'),
    OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin'),
    path = require('path');
console.log(path.resolve('./build/mock-demo.html'))
module.exports = {
    entry:{
        mock:'./entries/mock-demo.js',
        vue :'./entries/vue-demo.js'
    },
    output:{
        filename:'[name].app.js',
        path : './build'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('这是Cecil0o0用来测试新框架的demo工程！！！！'),
        new OpenBrowserWebpackPlugin({url:path.resolve('./build/mock-demo.html')})
    ]
}