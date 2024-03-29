var gulp = require('gulp');
var concat = require('gulp-concat');

var path = require('../path.config');
var vendorArr = [
	'socket.io-client/socket.io.js',
	'angular/angular.js',
	'angular-route/angular-route.js',
	'angular-animate/angular-animate.js',
	'jquery/dist/jquery.js',
	'toastr/toastr.js'
];
var filesArr = buildFilesArr();

module.exports = vendorJsTask;

function vendorJsTask() {
	return gulp.src(filesArr)
		.pipe(concat('vendor.js'))
		.on('error', function (err) {
			console.log('Error in uglify');
			console.log(err && err.message || err);
		})
		.pipe(gulp.dest(path.buildDir));
}

function buildFilesArr () {
	var filesArr = [];

	vendorArr.forEach(function (value) {
		filesArr.push(path.frontDir + '/vendor/' + value);
	});

	return filesArr;
}
