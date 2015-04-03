var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	imagemin = require('gulp-imagemin');
	//livereload = require('gulp-livereload');


// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

// Styles Task
// Styles
var paths = {
  styles: {
    src:  'scss/*.scss',
    dest: 'stylesheets'
  }
};

gulp.task('sass', function () {
  return gulp.src(paths.styles.src)
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'scss'
    }))
    .pipe(gulp.dest(paths.styles.dest));
    //.pipe(livereload());
});

// Image Task
// Compress
gulp.task('image', function(){
	gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img/'));
});

// Watch Task
// Watches JS
gulp.task('watch', function(){

	//var server = livereload();

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['sass']);
});

// Build scripts & styles then watch files
gulp.task('default', ['scripts', 'sass', 'image', 'watch']);