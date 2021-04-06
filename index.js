module.exports = (api, options) => {
    api.chainWebpack((webpackConfig) => {
        webpackConfig.module
            .rule("vucript")
            .test(/\.vue$/)
            .pre()
            .use("json")
            .loader(require.resolve("./loader.js"))
            .end()
            .end()
    });
};
