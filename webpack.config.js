module.exports = {
    devtool: 'sourcemap',
    entry: './_src/main.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test:/\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
            { test: /\.html$/, loader: 'raw' },
        ]
    }
}