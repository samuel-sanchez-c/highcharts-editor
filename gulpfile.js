"use strict";

const fs = require('fs');

var dest = 'dist/',
    name = 'highcharts-editor',
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    jslint = require('gulp-jshint'),
    run = require('gulp-run'),
    footer = require('gulp-footer'),
    //The order is important, so we don't do wildcard
    sources = require(__dirname + '/res/filelist.json'),
    products = [
        'highcharts',
        'highstock'//,
        //'highmaps'
    ];

function appendFilesFromProduct(prodName) {
    var path = __dirname + '/src/products/' + prodName + '/',
        files = []
    ;

    function include(folder) {
        var f;

        try {
          f = fs.readdirSync(path + folder);

          if (f) {
              f.forEach(function (f) {
                  if (f.indexOf('.js') >= 0) {
                      files.push(path + folder + '/' + f);
                  }
              });
          }

        } catch (e) {
            console.log('error when including module', prodName, e);
        }
    }

    include('validators');
    include('samples');
    include('templates');

    return files;
}

let productFilenames = [];

products.forEach(function (product) {
  gulp.task(product + '-module', function () {
      let files = appendFilesFromProduct(product);
      productFilenames = productFilenames.concat(files);

      return gulp.src(files)
                 .pipe(concat(name + '.module.' + product  + '.js'))
                 .pipe(gulp.dest(dest + '/modules/' + product));
  });
});

gulp.task('modules', function () {
  gulp.start(products.map(function (p) { return p + '-module'}));
});

gulp.task('bundled-modules', ['modules'], function () {
  return gulp.src([dest + '/' + name + '.js'].concat(productFilenames))
         .pipe(concat(name + '.with.modules.js'))
         .pipe(gulp.dest(dest))
  ;
});

gulp.task('complete', ['default', 'cache-thumbnails', 'bundled-modules', 'with-advanced'], function () {
  return gulp.src([
    dest + '/' + name + '.js',
    dest + '/' + name + '.with.modules.js',
    dest + '/' + name + '.advanced.js'
  ])
  .pipe(concat(name + '.complete.js'))
    .pipe(footer('export default highed;'))
  .pipe(gulp.dest(dest));
});

////////////////////////////////////////////////////////////////////////////////

gulp.task('update-deps', function () {
  return run('node tools/update.deps.js').exec();
});

gulp.task('bake-advanced', function () {
  return run('node tools/dump2advanced.js').exec();
});

gulp.task('localization', function () {
  return run('node tools/gen.localization.js').exec();
});

gulp.task('bake-thumbnails', function () {
  return run('node tools/bake.previews.js').exec();
});

gulp.task('cache-thumbnails', ['bake-thumbnails'], function () {
  return gulp.src('generated_src/highed.meta.images.js')
             // .pipe(gulp.dest(dest))
             .pipe(rename(name + '.thumbnails.js'))
             .pipe(gulp.dest(dest))
});

gulp.task('less', function () {
    return gulp.src('less/theme.default.less')
               .pipe(less({
                    paths: ['less/']
               }))
               .pipe(rename(name + '.css'))
               .pipe(gulp.dest(dest));
});

gulp.task('lint', function () {
  return gulp.src(sources)
         .pipe(jslint({
        //  global: ['XMLHttpRequest']
         }))
         .pipe(jslint.reporter('default', {}))
  ;
});

gulp.task('lint-advanced', function () {
  return gulp.src(sources.concat(['./generated_src/highed.meta.options.advanced.js']))
         .pipe(jslint({
        //  global: ['XMLHttpRequest']
         }))
         .pipe(jslint.reporter('default', {}));
});

gulp.task('concat', function () {
    return gulp.src(sources)
      .pipe(concat(name + '.js'))
      .pipe(gulp.dest(dest));
});

gulp.task('concat-advanced', ['bake-advanced', 'less'], function () {
    return gulp.src('./generated_src/highed.meta.options.advanced.js')
      .pipe(concat(name + '.advanced.js'))
      .pipe(gulp.dest(dest));
});

gulp.task('plugins', function () {
    return gulp.src('plugins/*.js')
      .pipe(gulp.dest(dest + 'plugins'));
});

gulp.task('default', function () {
    gulp.start('concat', 'less', 'update-deps', 'plugins', 'modules');
});

gulp.task('with-advanced', function () {
    gulp.start('concat-advanced', 'less', 'plugins');
});

gulp.task('all', function () {
  gulp.start('default', 'with-advanced', 'localization', 'complete');
});
