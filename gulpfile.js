var gulp = require("gulp");
var del = require('del');
var lineReader = require('line-reader');

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

function copy(filename, src, cb) {
  return gulp
          .src(filename)
          .pipe(gulp.dest(src))
          .on("end", function() {
            cb && cb();
          });
}

// copy
// ----------------------------------------------------------
// '_' 开头的文件
gulp.task("copy:common", function() {
  var filename = './lodash/_*.js';
  var dest = './src/_common';
  return copy(filename, dest, function() {
    del(filename);
  });
});

// 某一分类及其对应的文件
gulp.task("copy:files", function() {
  var pattern = /\.\/\w+/g;
  lodashClass.forEach(function(item) {
    var classFile = `./lodash/${item}.js`;
    copy(classFile, './src');

    var src = `./src/${item}`;
    var filesNameArr = [];
    lineReader.eachLine(classFile, function(line, last) {
      line.replace(pattern, function(filename) {
        filename = filename.replace(/\.\//, "");
        filesNameArr.push(filename.trim());
      })

      if (last) {
        filesNameArr.forEach(function(item) {
          var filename = `./lodash/${item}.js`;
          copy(filename, src, function() {
            del(filename);
          });
        });
        del(classFile);
      }
    });
  });
});

gulp.task("copy", [
  "copy:common", "copy:files"
], function() {
  return copy("./lodash/lodash.js", './src', function() {
    del('./lodash');
  });
});

// clean
// ----------------------------------------------------------
gulp.task("clean", function() {
  del(["./src"]);
});
