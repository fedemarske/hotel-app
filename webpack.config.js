const path = require('path');

module.exports = {
    context: __dirname,
    entry: './app/front/Main.js',
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
                loader: 'babel-loader'
            }
        ]
    }
}