var fs = require('fs');
var path = require('path');

var parent_path = 'code/html/MSTRWeb/javascript/';
var input_path = 'jsfiledeps.properties';
var output_path = '../test-main.js';

var str1 = fs.readFileSync('test-main-1.js', 'utf-8');
var str2 = fs.readFileSync('test-main-2.js', 'utf-8');
var str3 = fs.readFileSync('test-main-3.js', 'utf-8');

var json_paths = {
  "jquery": parent_path + "libraries/jquery-2.0.3.min",
  "global_settings": "test/javascript/mojo/js/source/global_settings",
  "mojo_js_source_mstrmojo": parent_path + "mojo/js/source/mstrmojo"
};
var json_shim = {};

convertDeps(input_path);

function removeSuffix(path) {
  return path.substring(0, path.lastIndexOf("."));;
}

function convertPath2Name(path) {
  return path.replace(/\//g, '_');
}

function convertDeps(filePath) {
  var data = fs.readFileSync(filePath, 'utf-8');
  var lines = data.split('\n');

  var reg_line = /=/;
  var reg_js = /.js$/;

  var file_path, file_name;
  var info_array;

  for (var i = 0; i < lines.length; i++) {
    var cur_line = lines[i];
    // if curren line starts with '#'，continue
    if (cur_line[0] == '#' || (reg_line.exec(cur_line) == null))
      continue;

    // get key/value for paths
    info_array = cur_line.split(' ');
    file_path = removeSuffix(info_array[0]);
    file_name = convertPath2Name(file_path);
    json_paths[file_name] = parent_path + file_path;

    // key/value for shim
    json_shim[file_name] = {
      deps: [],
      exports: file_name
    };
    if (info_array.length > 1) {
      for (var j = 1; j < info_array.length; j++) {
        file_path = removeSuffix(info_array[j]);
        json_shim[file_name].deps.push(convertPath2Name(file_path));
      };
    }
    json_shim[file_name].deps.push("global_settings");
  };

  fs.writeFileSync(output_path, str1, 'utf-8');
  fs.appendFileSync(output_path, JSON.stringify(json_paths), 'utf-8');
  fs.appendFileSync(output_path, str2, 'utf-8');
  fs.appendFileSync(output_path, JSON.stringify(json_shim), 'utf-8');
  fs.appendFileSync(output_path, str3, 'utf-8');
}
