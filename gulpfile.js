var
gulp        = require('gulp'),
less        = require('gulp-less'),
concat      = require('gulp-concat'),
browserSync = require('browser-sync'),
changed     = require('gulp-changed');

gulp.task('server', function() {
	browserSync.init(null, {
		open: true,
		server: {
			baseDir: './'
		},
		reloadDelay: 2000,
		watchOptions: {
			debounceDelay: 1000
		}
	});
});

gulp.task('server-tdd', function() {
	browserSync.init(null, {
		open: true,
		server: {
			baseDir: './',
			index: "test.html"
		},
		reloadDelay: 2000,
		watchOptions: {
			debounceDelay: 1000
		}
	});
});

gulp.task('less', function () {
	return gulp.src('./less/_manifest.less')
				.pipe(less())
				.pipe(concat('style.css'))
				.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
	
	gulp.watch(['js/**/*', 'spec/**/*', '*.html', 'css/*.css'], function(file) {
		if (file.type === "changed") {
			browserSync.reload(file.path);
		}
	});
});

gulp.task('default', ['less', 'watch', 'server']);

gulp.task('tdd', ['watch', 'server-tdd']);