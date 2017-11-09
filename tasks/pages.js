import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// import concat from 'gulp-concat';
// import webpack from 'webpack';
// import gulpWebpack from 'webpack-stream';
// import named from 'vinyl-named';

// import plumber from 'gulp-plumber';
// import rename from 'gulp-rename';
// import uglify from 'gulp-uglify';
// import { log, colors } from 'gulp-util';
gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})