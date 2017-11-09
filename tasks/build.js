import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'style', 'scripts', 'pages', ['browser', 'server']));