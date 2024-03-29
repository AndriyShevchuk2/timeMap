var gulp = require('gulp');
var concat = require('gulp-concat');

var path = require('../path.config');
var vendorArr = [
	'toastr/toastr.css'
];
var filesArr = buildFilesArr();

module.exports = vendorCssTask;

function vendorCssTask() {
	return gulp.src(filesArr)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest(path.buildDir));
}

function buildFilesArr () {
	var filesArr = [];

	vendorArr.forEach(function (value) {
		filesArr.push(path.frontDir + '/vendor/' + value);
	});

	return filesArr;
}
