module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us', 'es-cl'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-us',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};