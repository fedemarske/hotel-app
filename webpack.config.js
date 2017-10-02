const path = require('path');

module.exports = {
    context: __dirname,
    entry: './app/front/app.js',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/public/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
              loader: 'file-loader'
            }, {
              test: /\.html$/,
              loader: 'raw-loader'
            }
        ]
    }
}