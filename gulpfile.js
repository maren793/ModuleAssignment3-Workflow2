var gulp = require('gulp');

// Plugins
var imagemin = require('gulp-imagemin');
var browserSync =require('browser-sync');
var less = require('gulp-less');

gulp.task('minify-images', function() {
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/resized-images'))
});

gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css'], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});


gulp.task('default', ['minify-images', 'browser-sync', 'less'], function() {
    gulp.watch("less/*.less", ['less']);
});