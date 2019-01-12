# Pottery

A Chinese fonts first theme for [Typography.js](https://github.com/kyleamathews/typography.js)

## Install

```bash
npm install --save typography typography-theme-pottery
```

## Usage

This theme use 2 typefaces, it assumes you’re using webpack to process CSS and files. Each typeface
package includes all necessary font files (woff2, woff, eot, ttf, svg) and
a CSS file with font-face declarations pointing at these files.

You will need to have webpack setup to load css and font files. Many tools built
with Webpack will work out of the box, such as [Gatsby](https://github.com/gatsbyjs/gatsby)
and [Create React App](https://github.com/facebookincubator/create-react-app).

To use it, simply import the package in your project’s entry file e.g.

```javascript
import Typography from 'typography';
import potteryTheme from 'typography-theme-pottery';

const typography = new Typography(potteryTheme);
```
