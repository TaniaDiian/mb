var gulp = require('gulp'),
    pug = require('gulp-pug'),
    scss = require('gulp-sass'),
    server = require('gulp-server-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    plumberNotifier = require('gulp-plumber-notifier'),
    notify = require('node-notify');

gulp.task('html', function(){
  gulp.src('./dev/*.pug')
    .pipe(plumber())
    .pipe(plumberNotifier())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./app/'))
})

gulp.task('img', function(){
    gulp.src('./dev/img/*', )
    .pipe(plumberNotifier())
    .pipe(gulp.dest('./app/img'))
})
gulp.task('icons', function(){
    gulp.src('./dev/icons/*', )
    .pipe(plumberNotifier())
    .pipe(gulp.dest('./app/icons'))
})

gulp.task('watch', function(){
  gulp.watch('./dev/*.pug, ./dev/chunks/*.pug', ['html']);
  gulp.watch('./dev/scss/*.scss', ['scss']);
  gulp.watch('./dev/js/*.js', ['js']);
})

gulp.task('scss', function(){
    gulp.src('./dev/scss/*.scss')
    .pipe(plumberNotifier())
    .pipe(scss())
    .pipe(gulp.dest('./app/css'))
})

 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      port: 1000
    }));
});

gulp.task('js', function(){
    gulp.src('./dev/js/*.js')
    .pipe(gulp.dest('./app/js'))
})

gulp.task('default', ['html', 'watch', 'scss', 'webserver', 'js'])