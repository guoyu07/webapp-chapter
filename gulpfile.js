var gulp = require('gulp');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var gulpSequence = require('gulp-sequence');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var order = require("gulp-order");
// build
gulp.task('chapter:build', function () {
	//scss 处理
	gulp.src(['src/css/ptm.css', 'src/css/*.css'])
		.pipe(cleanCSS())
		.pipe(concat("all.min.css"))
		.pipe(gulp.dest('dist/css'));
	gulp.src(['src/script/zepto.js', 'src/script/**'])
		.pipe(uglify())
		.pipe(concat("all.min.js"))
		.pipe(gulp.dest('dist/script'));
	//其他
	gulp.src('src/image/**').pipe(gulp.dest('dist/image'));
	gulp.src('src/font/**').pipe(gulp.dest('dist/font'));
});
gulp.task('chapter', gulpSequence(
	'chapter:build'
));
gulp.task('watch', function () {
	gulp.watch(["src/**/*"], ['chapter:build']);
});
gulp.task('default', ['chapter']);
