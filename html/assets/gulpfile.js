

var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpMinify = require('gulp-minify');
var gulpJsMinify = require('gulp-js-minify');
var gulpCleanCss = require('gulp-clean-css');
var gulpStripComments = require('gulp-strip-comments');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var newlineRemove = require('newline-remove');
var removeEmptyLines = require("gulp-remove-empty-lines");
var sass = require('gulp-sass');


gulp.task('compileAll', function(done){

    console.log("Compiling CSS.");

    //gulp.src(['css/*.css','js/*.js'])
    gulp.src('src/css/*')
		.pipe(gulpCleanCss({level: {1: {specialComments: 0}}}))
		//.pipe(newlineRemove())
		//.pipe(gulpStripComments())
		.pipe(gulpConcat('styles.min.css'))
		//.pipe(uglify())
    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'));


    gulp.src('src/js/*')
		.pipe(plumber({ errorHandler: function(err) {
			notify.onError({
				title: "Gulp error in " + err.plugin,
				message:  err.toString()
			})(err);
		}}))
		.pipe(gulpStripComments())
		.pipe(gulpConcat('scripts.min.js'))
		.pipe(uglify({mangle: true}))
		.pipe(gulp.dest('js'));

    console.log("All Finished.");

    done();

});

/*
gulp.task('testcss', function(done){

    console.log("Compiling CSS.");

    //gulp.src(['css/*.css','js/*.js'])
    //.pipe(pug())

    gulp.src('src/test/*.css')
      .pipe(gulpCleanCss({level: {1: {specialComments: 0}}}))
      //.pipe(newlineRemove())
      //.pipe(gulpStripComments())
      .pipe(gulpConcat('test.min.css'))
      //.pipe(uglify())
      .pipe(gulp.dest('src/test'));

    console.log("All Finished.");

    done();

});
*/
