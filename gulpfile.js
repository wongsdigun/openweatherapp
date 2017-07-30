var gulp  = require('gulp'),
		gutil = require('gulp-util'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cssnano = require('gulp-cssnano'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

gulp.task('template', function() {
	return gutil.log('Gulp is running in Meridian.Id Boilerplate!');
});

gulp.task('style', function() {
	var onError = function(err) {
	  notify.onError({
		title:    "Gulp Sass",
		subtitle: "Yo! What've you done now?!",
		message:  "Error: <%= error.message %>",
		sound:    "Beep"
	  })(err);
	  this.emit('end');
	};

	return sass ('app/resources/scss/app.scss')
	.pipe(plumber({errorHandler: onError}))
	.pipe(autoprefixer())
	//.pipe(cssnano()) // Passes it through a gulp-autoprefixer task //DIPAKE KALO UDAH MAU PRODUKSI ==========================================================
	.pipe(reload({ stream:true }))
	.pipe(gulp.dest('app/'))
});
gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}))
})
gulp.task('serve', function() {
	browserSync.init({
		proxy : 'http://localhost:8000',
	});
	gulp.watch('app/resources/scss/*.scss', ['style']);
	gulp.watch('app/**/*.html', ['html'])
	// gulp.watch(['css/*.css', 'js/*.js'], {cwd: 'assets'}, reload);
});

gulp.task('default', ['serve'], function() {
	gulp.start('template', 'style');
});
