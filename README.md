# Jekyll integration Material Components Web with Travis-CI for GitHub Pages
---
[![Build Status](https://travis-ci.org/KunYi/jekyll-mdc.svg?branch=master)](https://travis-ci.org/KunYi/jekyll-mdc)

To use: when you have the dependancies as per
[the docs](https://jekyllrb.com/docs/installation/) you should run
`bundle install`.
    
HTML files are based on Minima - if you need to configure
the post or page layouts, copy [those files](https://github.com/jekyll/minima/tree/master/_layouts) in as needed.

Note that GitHub Pages doesn't run gems that aren't on their predefined list, so it won't work with their autocompile, you'll need to push up and serve the compiled files.

### Local operation
---
```bash
$ git clone https://github.com/kunyi/jekyll-mdc.git
$ cd jekyll-mdc
$ npm install     # for Webpack install
$ bundle install  # for Jekyll install
$ npm start       # run webpack
$ bundle jekyll server # for local server
```
---
# References
* [Travis-CI encrypt 'GITHUB_TOKEN'](https://github.com/travis-ci/travis.rb#encrypt)
* [Travis-CI Deploy](https://docs.travis-ci.com/user/deployment/pages/)
* [Success build log](https://travis-ci.org/KunYi/jekyll-mdc)
* [Demo GitHub Pages](https://kunyi.github.io/jekyll-mdc/)
