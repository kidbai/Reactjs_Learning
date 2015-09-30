var gulp = require('gulp'); 
var jshint = require('gulp-jshint'); 
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');


gulp.task('sass', function () {
    gulp.src('./sass/sass/style.scss')
        .pipe(compass({
            config_file: "./sass/config.rb",
            sass: "./sass/sass",
            css: "./public/css",
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/css'));
});


gulp.task('jshint', function () {
    gulp.src("./js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});
