const gulp=require("gulp");
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var nokey = require('gulp-tinypng-nokey');

//gulp.task("default",()=>{
//	console.log("我是默认的");
//})
//
//gulp.task("dance",()=>{
//	console.log("阿拉拉拉拉阿拉，我要跳舞啦");
//})
//复制所有
//gulp.task("copyAll",()=>{
//	gulp.src("src/*/*")
//		.pipe(gulp.dest("./dist"));
//})
//复制了css并且压缩了css
//gulp.task("copymin",()=>{
//	gulp.src("src/css/*")
//		.pipe(cssmin())
////		.pipe(rename({suffix: '.min'}))
//		.pipe(gulp.dest("dist"));
//})
//
//gulp.task("jsmin",()=>{
//	gulp.src("src/js/*")
//		.pipe(uglify())
//		.pipe(gulp.dest("dist"))
//})

//gulp.task("es5ys",()=>{
//	gulp.src("src/*/*.js")
//		.pipe(uglify())
//		.pipe(babel())
//		.pipe(gulp.dest("dist"));
//})

//gulp.task("imgmin",()=>{
//	gulp.src("src/*/*.{png,jpg,jpeg,gif,ico}")
//		.pipe(nokey())
//		.pipe(gulp.dest("dist"));
//})

gulp.task("perfect",()=>{
	gulp.src("src/*/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("dist"));
		
	gulp.src("src/*/*.js")
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest("dist"))
		
	gulp.src("src/*/*.html")
		.pipe(gulp.dest("dist"))
		
	gulp.src("src/*/*.{png,jpg,jpeg,gif,ico}")
		.pipe(nokey())
		.pipe(gulp.dest("dist"));
})


