module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
}