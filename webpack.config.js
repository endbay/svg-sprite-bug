const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new SVGSpritemapPlugin('assets/svg/**/*.svg',
            {
                output: {
                    filename: 'static/svg/sprite.[hash].svg',
                    svg4everybody: false,
                    svgo: {
                        removeEmptyAttrs: false,
                        removeUselessStrokeAndFill: false,
                    },
                },
                sprite: {
                    prefix: false,
                    generate: {
                        title: false,
                        use: true,
                        view: false,
                    },
                },
            })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            publicPath: '/',
        },
        hot: 'only',
        port: 3000,
        historyApiFallback: true,
        host: '0.0.0.0',
    },
};
