import gulp from 'gulp';
import postCss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import sass from 'gulp-sass';
import pug from 'gulp-pug';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';


let server = browserSync.create();


gulp.task('default',['serve','watch'])

gulp.task('serve', () => {

    server.init({
      server:{
        baseDir:"./"
      }
    })
})

gulp.task('watch',() => {

  gulp.watch('./dev/scss/**/*.scss',['sass'])
  gulp.watch('./dev/js/main.js',['babel'])
  gulp.watch('./dev/**/*.pug',['pug'])

})



gulp.task('sass', () => {

  let processors = [
    mqpacker()
  ]

  gulp.src('./dev/scss/**/*.scss')
  .pipe(sass({
    includePaths:['./dev/scss/partials']
  }))
  .pipe(postCss(processors))
  .pipe(gulp.dest('./public/css/'))
  .pipe(server.stream())
})

gulp.task('pug', () => {
  gulp.src('./dev/**/*.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./'))
    .pipe(server.stream())
})

gulp.task('babel',() => {
  gulp.src('./dev/js/main.js')
    .pipe(babel())
    .pipe(gulp.dest('./public/js/'))
    .pipe(server.stream())
})