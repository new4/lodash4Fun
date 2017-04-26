var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var gulpSequence = require('gulp-sequence');
var mergeStream = require('merge-stream');
var vinylPaths = require('vinyl-paths');
var browserSync = require('browser-sync').create();

var lodashClass = [
  'array',
  'collection',
  'date',
  'function',
  'lang',
  'math',
  'number',
  'object',
  'seq',
  'string',
  'util'
];

function abstractFilePath(classFileName) {
  var result = [];
  var pattern = /\.\/\w+/g;
  var classFilePath = `./lodash/${classFileName}.js`;
  var data = fs.readFileSync(classFilePath, "utf-8");
  var _from = [];
  data.replace(pattern, function(filename) {
    filename = filename.replace(/\.\//, "").trim();
    _from.push(`./lodash/${filename}.js`);
  })
  result.push({'from': _from, 'to': `./src/${classFileName}`});
  return result;
}

function getFilePathInfo() {
  return lodashClass.map(function(item, index, arr) {
    var result = [];
    var classFile = `./lodash/${item}.js`;
    result.push({'from': classFile, 'to': `./src`});
    result = result.concat(abstractFilePath(item));
    return result;
  });
}

function copy(filename, src, isKeep) {
  if (isKeep) {
    return gulp.src(filename).pipe(gulp.dest(src));
  }
  return gulp.src(filename).pipe(vinylPaths(del)).pipe(gulp.dest(src));
}

// copy
// ----------------------------------------------------------
gulp.task("copy:common", function(cb) {
  var filename = './lodash/_*.js';
  var dest = './src/_common';
  return copy(filename, dest);
});

gulp.task("copy:main", function(cb) {
  return copy("./lodash/lodash.js", './src');
})

gulp.task("copy:files", function(cb) {
  var filePathInfo = getFilePathInfo();
  var stream = mergeStream();
  filePathInfo.map(function(item) {
    stream.add(copy(item[0]['from'], item[0]['to']));
    stream.add(copy(item[1]['from'], item[1]['to']));
  })
  return stream.isEmpty()
    ? null
    : stream;
});

gulp.task("copy:remain", function(cb) {
  return copy("./lodash/*.js", './src/_remain');
});

gulp.task("copy", gulpSequence([
  "copy:common", "copy:files", "copy:main"
], "copy:remain", "clean:lodash"));

// clean
// ----------------------------------------------------------
gulp.task("clean:js", function() {
  return del(["./src/**/*.js"]);
});

gulp.task("clean:lodash", function() {
  return del(["./lodash"]);
});

// export
// ----------------------------------------------------------
function getExportPath() {
  var srcFolder = lodashClass.slice().concat(['_common', '_remain']);
  srcFolder = srcFolder.map(function(item) {
    var from = `./src/${item}/*.md`;
    var to = `./export/${item}`;
    return {'from': from, 'to': to}
  });
  srcFolder.push({'from': './src/*.md', 'to': './export'});
  return srcFolder;
}

gulp.task('export', function() {
  var exportPath = getExportPath();
  var stream = mergeStream();
  exportPath.map(function(item) {
    stream.add(copy(item['from'], item['to'], true));
  })
  return stream.isEmpty()
    ? null
    : stream;
});

// serve
// ----------------------------------------------------------
var src = ["./myCode/index.html"];
var srcJs = ["./myCode/js/*.js"];
src = src.concat(srcJs);

gulp.task('serve', function() {
  browserSync.init({server: "./myCode", port: 8060});

  gulp.watch(src).on("change", function() {
    browserSync.reload();
  });
});

gulp.task('default', ['serve']);
