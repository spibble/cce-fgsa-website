module.exports = function (config) {
  config.addPassthroughCopy("./src/main.css");
  config.addPassthroughCopy("./src/assets");

  config.addFilter('markdown', function(value) {
    let markdown = require('markdown-it')({
        html: true
    });
    return markdown.render(value);
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
  };
};
