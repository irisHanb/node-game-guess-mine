import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-csso';
import del from 'del';

sass.compiler = require('node-sass');

const paths = {
  styles: {
    src: 'assets/scss/styles.scss',
    dest: 'src/static/css',
    watch: 'assets/scss/**/*.scss'
  }
};

const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

const clean = () => del(['src/static']);

const watchFiles = () => gulp.watch(paths.styles.watch, styles);

const dev = gulp.series(clean, styles, watchFiles);
export default dev;
