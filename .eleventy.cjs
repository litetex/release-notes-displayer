const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("docs-src/docs.css");
  eleventyConfig.addPassthroughCopy("docs-src/.nojekyll");
  eleventyConfig.addPassthroughCopy("docs-src/static/**");
  return {
    dir: {
      input: 'docs-src',
      output: 'docs-gen',
    },
    templateExtensionAliases: {
      '11ty.cjs': '11ty.js',
      '11tydata.cjs': '11tydata.js',
    },
  };
};
