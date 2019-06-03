module.exports = {
    plugins: [
        require('postcss-custom-media'),
        require("postcss-preset-env")({
            autoprefixer: {},
            stage: 1,
        }),
        require('css-mqpacker'),
        // require("cssnano")
    ] 
}