const gulp = require('gulp');
const webpack = require('webpack-stream');

const handleError = function(error) {
    console.log(error);
    this.emit('end')
};

gulp.task('webpack', function(){
    gulp.src('./_src/main.js', {read: false})
        .pipe(webpack(require('./webpack.config.js')))
        .on('error', handleError)
        .pipe(gulp.dest('.'))
});

gulp.task('webpack:watch', ['webpack'], function () {
  gulp.watch(['./_src/**/*.*'], ['webpack']);
})

gulp.task('default', ['webpack:watch'], () => {});
