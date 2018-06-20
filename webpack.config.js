const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require("path");

module.exports = [{
  entry: './_sass/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    path: path.resolve(__dirname, "_sass/vendor"),
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
			path: path.resolve(__dirname, "_sass/vendor"),
            name: '_bundle.scss',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader',
		  options: {
		    includePaths: ['./node_modules']
          }
		},
		{ loader: 'postcss-loader',
		  options: {
			  plugins: function () {
				return [
					autoprefixer({
						browsers: ['last 4 versions', '> 1%', 'IE >= 9']
				})]
			  }
		  }
		}
      ]
    }]
  },
}];

// webpack folder’s entry js — excluded from jekll’s build process.
module.exports.push({
  entry: './_sass/app.js',
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "./assets/javascripts"
    path: path.resolve(__dirname, "_sass/vendor"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
});
