var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var source 		 = require("vinyl-source-stream");
var babel      = require('gulp-babel');

var watching = false;
var demo     = false;


gulp.task("default", ["prod"]);

gulp.task("prod", function(){
	gulp.src('./src/*.js')
			.pipe(babel())
			.pipe(gulp.dest('./lib'));
	browserifing("./src/index.js", "react-bootstrap-dropdown.min.js", "./dist");
});

gulp.task("dev", ["prod"], function(){
	watching = true;
	demo = true;
	browserifing("./example/js/amd-demo.js", "amd-demo.bundle.js", "./example/js");
	browserifing("./example/js/browser-demo.js", "browser-demo.bundle.js", "./example/js");
});

function browserifing(main, bundleName, dest){
	var b = browserify({
	    entries: [main],
			transform: ["babelify"],
			cache: {},
			debug: true,
			packageCache: {},
			fullPaths: true,
	});

	if(demo)
		b = b.require(require.resolve('./src/Dropdown.js'),
				{ expose: 'react-bootstrap-dropdown' });

	if(watching){
		b = watchify(b);
		b.on('update', function(){
			bundle(b, bundleName, dest);
		});
	}
	bundle(b, bundleName, dest);
}

function bundle(b, bundleName, dest){
	b.bundle()
	.on('error', function(err){
      console.log(err.message);
      this.end();
    })
	.on('end', function(){
		console.log("building success.");
		this.end();
	})
	.pipe(source(bundleName))
	.pipe(gulp.dest(dest));
}
