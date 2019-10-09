The branch of the Highcharts Editor used by Gravity.  Includes only CSS changes.

Changes made from original:
* gulpfile.js: Removed minification, deploying zip bundles, electron etc.  Append/prepend module information for webpack.
* less/theme.default.less: Changed colours.
* package.json: Change some package versions, remove unnecessary, add highcharts, gulp-footer
* src/ui/highed.chartpreview.js: comment 198-201 check for highcharts on window object 
* src/ui/highed.chart.template.selector.js: change 67, implicitly declared variable (x = y = 3)

To deploy:

* npm install
* gulp with-advanced
* git push
