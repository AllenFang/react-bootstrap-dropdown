var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var source 		 = require("vinyl-source-stream");

var watching = false;
var demo     = false;


gulp.task("default", ["prod"]);

gulp.task("prod",  function(){
	browserifing("./index.js", "bundle.js", "./build");
});

gulp.task("dev",  ['enable-watch-mode', 'enable-demo-mode'], function(){
	browserifing("./example/js/demo.js", "demo.bundle.js", "./example/js");
});

gulp.task('enable-watch-mode', function() { watching = true; });

gulp.task('enable-demo-mode', function() { demo = true; });

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
		b = b.require(require.resolve('./lib/DropdownButton.js'),
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
