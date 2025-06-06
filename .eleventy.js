module.exports = async function (config) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");

  config.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
  
  config.addPassthroughCopy("./src/assets/images");
  config.addPassthroughCopy("./src/main.*");

  config.addFilter('markdown', function(value) {
    let markdown = require('markdown-it')({
        html: true
    });
    return markdown.render(value);
  });

  config.addPlugin(HtmlBasePlugin);  

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
