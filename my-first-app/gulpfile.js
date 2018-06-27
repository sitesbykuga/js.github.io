var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var concatCss   = require('gulp-concat-css'),
    folder = "src/";

// для правильной работы не забудьте подключить плагины к своему проекту

// Компилируем Less при помощи плагина gulp-less 
gulp.task('less', function() {
    return gulp.src(folder+"less/*.less") // находим все less файлы в папке less 
        .pipe(less()) // собственно компилируем их
        .pipe(concatCss('main.css')) // при желании можно объединить все в один css-файл 
        .pipe(gulp.dest(folder+"css")) // выгружаем файлы в папку app в раздел css 
        .pipe(browserSync.stream()); // при желании можно обновить browser-sync после изменений
});

// Настраиваем сервер browser-sync для отслеживания изменений в проекте 
gulp.task('serve', ['less'], function() {
    // Запускаем сервер и указываем за какой папкой нужно следить 
    browserSync.init({
        proxy: "react.local/my-first-app/"+folder
    });
    gulp.watch(folder+"*/**/*.less", ['less']); // следим за изменениями less файлов и сразу запускаем таск less 
    gulp.watch(folder+"*.js").on('change', browserSync.reload); // запускаем перезагрузку страницы при изменениях html 
    gulp.watch(folder+"*.php").on('change', browserSync.reload); // запускаем перезагрузку страницы при изменениях html 
    gulp.watch(folder+"*.html").on('change', browserSync.reload); // запускаем перезагрузку страницы при изменениях html 
});


gulp.task('default', ['serve']); // делаем это стандартным таском
