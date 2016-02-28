var gulp    = require('gulp');
var shell   = require('gulp-shell');
var rimraf  = require('rimraf');
var run     = require('run-sequence');
var watch   = require('gulp-watch');
var server  = require('gulp-live-server');

var minifycss = require('gulp-minify-css'),
    //concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
  js: ['./src/**/*.js'],
  appjs: ['./app/**/*.js'],
  css:['./src/**/*.css'],
  destination: './app'
}


//压缩css
gulp.task('minifycss', function() {
  return gulp.src(paths.css)    //需要操作的文件
      .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
      .pipe(minifycss())   //执行压缩
      .pipe(gulp.dest(paths.destination));   //输出文件夹
});
//压缩,合并 js
gulp.task('minifyjs', function() {
  return gulp.src(paths.appjs)      //需要操作的文件
      //.pipe(concat('all.js'))    //合并所有js到main.js
      .pipe(gulp.dest(paths.destination))       //输出到文件夹
      .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
      .pipe(uglify())    //压缩
      .pipe(gulp.dest(paths.destination));  //输出
});

gulp.task('default', function(cb){
  run('server', 'build', 'watch', cb);
});

gulp.task('build', function(cb){
  run('clean', 'flow', 'babel', 'minifycss','minifyjs','restart', cb);
});

gulp.task('clean', function(cb){
  rimraf(paths.destination, cb);
});

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors: true}));

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

var express;

gulp.task('server', function(){
  express = server.new(paths.destination);
});

gulp.task('restart', function(){
  express.start.bind(express)();
});

gulp.task('watch', function(){
  return watch(paths.js, function(){
    gulp.start('build');
  });
});
