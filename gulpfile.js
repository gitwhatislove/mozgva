var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var concatcss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
	gulp.src('sass/*.scss')
	.pipe(plumber()) 
	.pipe(sass({errLogToConsole: true}))
  	.pipe(autoprefixer())
  	// .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('sass/*.scss', ['sass']);
});



