module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/frontend-lunch-box/" //任意
      : "/",
};
