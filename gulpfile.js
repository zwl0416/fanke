
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let html=require('gulp-htmlmin')

function fnSass(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
function fnJs(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}
function fnCopy(){
    return gulp.src('./src/index1.html')
    .pipe(gulp.dest('./dist'));
}

function fnHtml(){
   return gulp.src('./src/html/*.html')
   .pipe(html())
   .pipe(rename({suffix : '.min'}))
   .pipe(gulp.dest('./dist/html'))
}



function fnWatch(){
    
    return gulp.watch('./src/sass/*.scss',fnSass);
    return gulp.watch('./src/js/*.js',fnJs);
    return gulp.watch('./src/index1.html',fnCopy);
    return gulp.watch('./src/img/*',fnImg);
    return gulp.watch('./src/html/*.html',fnHtml)

}

exports.sass = fnSass;
exports.js = fnJs;
exports.img = fnImg;
exports.copy = fnCopy;
exports.html=fnHtml;
exports.default=fnWatch;

