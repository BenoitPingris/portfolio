'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const dirs = {
	src: './scss',
	dest: './css'
};

const sass_src = `${dirs.src}/main.scss`;

gulp.task('sass', () => {
	return gulp.src(sass_src)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(dirs.dest));
});

gulp.task('watch', () => {
	return gulp.watch(`${dirs.src}/**/*.scss`, ['sass']);
});