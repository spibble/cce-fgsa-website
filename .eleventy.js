module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/main.css");

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
  };
};
