var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// You can create more tasks here

// Compile SASS files
gulp.task('sass', function () {
	return gulp.src('./assets/css/main.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('./assets/css/'))
				.pipe(browserSync.reload({stream: true}));
});

// Serve a local server
gulp.task('browserSync', ['sass'], function () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

// Reload
gulp.task('browserReload', function () {
	browserSync.reload();
});

// Watch file changes and refresh the browser
gulp.task('watch', function () {
	gulp.watch(['index.html'], ['browserReload']);
	gulp.watch(['./assets/css/*.sass'], ['sass']);
});

gulp.task('default', ['sass', 'browserSync', 'watch']);