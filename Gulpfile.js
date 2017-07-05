var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var gulpCopy = require('gulp-copy');


gulp.task('default', ['copy-static'], function () {
    var templateData = {};

    var options = {
        layout: 'default',
        defaultLayout: 'default',
        layoutsDir: './src/templates/layout',
        batch: ['./src/templates/']
    };
    gulp.src('src/templates/sites/memes.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('memes.html'))
        .pipe(gulp.dest('dist'));
    gulp.src('src/templates/sites/buy.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('buy.html'))
        .pipe(gulp.dest('dist'));
    return gulp.src('src/templates/sites/blog.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});
gulp.task('copy-static', function () {
    gulp.src(['src/app/**/*']).pipe(gulp.dest('dist/app'));
    return gulp.src(['src/assets/**/*']).pipe(gulp.dest('dist/assets'));
});