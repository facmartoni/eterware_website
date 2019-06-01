module.exports = {
    plugins: [
        require("postcss-preset-env")({
            autoprefixer: {},
        }),
        require("cssnano")
    ] 
}