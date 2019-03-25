var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var babel = require( 'gulp-babel' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var uglifycss = require( 'gulp-uglifycss' );
var nodemon = require( 'gulp-nodemon' );

gulp.task('default', ['css', 'babel', 'nodemon'], function(){
	gulp.watch('./public/css/*.css', ['css']);
	gulp.watch('./public/js/*.js', ['babel']);
});

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js'
          , ext: 'html js scss'})
})

gulp.task('css', function(){
	return gulp.src('./public/css/*.css')
		.pipe(concat('main.css'))
		.pipe(uglifycss({
			"uglyComments": true,
		}))
		.pipe(gulp.dest('public/uglify/css'))
});

gulp.task('babel', function() {
  return gulp.src( 'public/js/*.js' )
	.pipe( babel( { presets: ['es2015'] } ) )
    .pipe( uglify() )
    .pipe( concat('bundle.js') )
    .pipe( gulp.dest( './public/uglify/js/' ) );
});