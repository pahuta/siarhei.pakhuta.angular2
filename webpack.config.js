module.exports = function(env) {
    return (env && env.NODE_ENV === "production") ? (require("./config/webpack.prod")) : (require("./config/webpack.dev"));
};
