var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-cssmin'),
  inline = require('gulp-inline-source'),
  rename = require('gulp-rename');

  gulp.task('uglifyJS',function(){
  	gulp.src('js/*.js')
  	.pipe(concat('script'))
  	.pipe(uglify())
  	.pipe(rename('main.min.js'))
  	.pipe(gulp.dest('build/'))
  })

  gulp.task('minifyCss',function(){
  	gulp.src('css/*.css')
  	.pipe(minify())
  	.pipe(rename('main.min.css'))
  	.pipe(gulp.dest('build/'))
  })

  gulp.task('build',function(){
  	gulp.src('sample.html')
  	.pipe(inline())
  	.pipe(rename('build.html'))
  	.pipe(gulp.dest('build/'))
  })
 
 gulp.task('default',['uglifyJS','minifyCss','build']);

