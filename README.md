The branch of the Highcharts Editor used by Gravity.  Includes only CSS changes.

Changes made from original:
* gulpfile.js: Removed minification, deploying zip bundles, electron etc.  Append/prepend module information for webpack.
* less/theme.default.less: Changed colours.
* package.json: Change some package versions, remove unnecessary, add highcharts 

To deploy:l

npm install
gulp all
git push