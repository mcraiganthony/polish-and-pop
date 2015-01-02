// Load plugins
var browserSync  = require('browser-sync'),
    gulp         = require('gulp'),
    autoprefixer = require("gulp-autoprefixer"),
    concat       = require("gulp-concat"),
    csso         = require("gulp-csso"),
    duration     = require("gulp-duration"),
    ghpages      = require("gulp-gh-pages"),
    less         = require('gulp-less'),
    notify       = require("gulp-notify"),
    plumber      = require('gulp-plumber'),
    uglify       = require('gulp-uglify'),
    reload       = browserSync.reload;


// Path Variables
var paths =  {
  "html": {
    "src_files": "dist/*.html"
  },
  "images": {
    "src_dir": "src/img/**",
    "dist_dir": "dist/img/"
  },
  "styles": {
    "src_files": "src/less/**/*.less",
    "dist_dir": "dist/css/"
  },
  "js": {
    "src_files": "src/js/*.js",
    "dist_dir": "dist/js/"
  }
};


// Styles
gulp.task('styles', function() {
  return gulp.src(["src/less/app.less"])
    .pipe(less({ compress: true }))
    .pipe(autoprefixer({ browsers: ['last 2 versions','ie 9'], cascade: false }))
    .pipe(gulp.dest(paths.styles.dist_dir))
    .pipe(duration("building styles"))
    .pipe(notify({ message: "styles task complete" }))
    .pipe(reload({stream:true}));
});


// Javascript
gulp.task('js', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    paths.js.src_files
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dist_dir))
    .pipe(duration("building js"))
    .pipe(notify({ message: "js task complete" }))
    .pipe(reload({stream:true}));
});


// HTML
gulp.task('html', function() {
  return gulp.src([paths.html.src_files])
    .pipe(reload({stream:true}));
});


// Images
gulp.task('images', function() {
  return gulp.src([paths.images.src_dir])
    .pipe(gulp.dest(paths.images.dist_dir))
    .pipe(reload({stream:true}));
});


// Watch
gulp.task("watch", function() {
  gulp.watch(paths.styles.src_files, ["styles"]);
  gulp.watch(paths.js.src_files, ["js"]);
  gulp.watch(paths.html.src_files, ["html"]);
});


// Browser Sync
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
});


// Website
gulp.task('website', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghpages());
});


// Gulp Default
gulp.task('default', ['styles','js','images']);


// Gulp Server
gulp.task('server', ['default', 'watch', 'browser-sync'], function () {
    gulp.watch([paths.html.src_files], reload);
});








