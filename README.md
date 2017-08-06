[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

realfood
============

Appverse Web 
============

This is the repository of the Appverse Web HTML5 Bolierplate subproject. It provides an starting point for an Appverse Web HTML5 project
Appverse Web is a multi-frontend technology capable web application framework incorporating the best-of-breed open source stack to meet the challenges of secure and robust server-side service development, integration and delivery.

## More Information

* **About this project**: <http://appverse.github.com/appverse-web-html5-boilerplate>
* **About Appverse Web HTML5 Module**: <http://appverse.github.com/appverse-web-html5-core>
* **About licenses & groups**: <http://appverse.github.com>
* **About The Appverse Project**: <http://appverse.org>

### Quick Start

#### Before you start, tools you will need

* install npm
* bower and grunt (run the following commands):

```script
npm install -g bower
npm install -g grunt
```

## Running

* configure project:

```script
npm install
bower install
```
* run project

Run the application. 

`grunt server`

Run the appliction and open the browser.

`grunt server:open` 

## Testing

Exexecute the following command to launch tests

`grunt test`
 
 <!-- Available Grunt task (generated running 'grunt list') -->
 Grunt tasks list 
---------------- 
###storeCoverage
store coverage from global
###setEmulatedDevice
set up the emulated window.
###karma
run karma. (Multitask)
###reloadTasks
override instrumented tasks
###makeReport
make coverage report
###instrument
instruments a file or a directory tree
###jshint
Validate files with JSHint. (Multitask)
###useminPrepare
Using HTML markup as the primary source of information (Multitask)
###http_upload
Upload files through POST/PUT HTTP request (Multitask)
###server
Serves de application.
###jserver
Running Mock Server with default configuration
###shell
Run shell commands (Multitask)
###watch
Run predefined tasks whenever watched files change.
###concurrent
Run grunt tasks concurrently (Multitask)
###usemin
Replaces references to non-minified scripts / stylesheets (Multitask)
###replace
Replace text patterns with applause. (Multitask)
###postcss
Process CSS files. (Multitask)
###rev
Prefix static asset file names with a content hash (Multitask)
###nwjs
Packaging the current app as a node-webkit application (Multitask)
###jsonserver
Multitask - Running Mock Server (Multitask)
###uglify
Minify files with UglifyJS. (Multitask)
###htmlmin
Minify HTML (Multitask)
###cssmin
Minify CSS (Multitask)
###list
List all the available grunt tasks and write them to a file.
###browserSync
Keep your browsers in sync (Multitask)
###jscs
JavaScript Code Style checker (Multitask)
###wiredep
Inject Bower components into your source code. (Multitask)
###includeSource
Include lists of files into your source files automatically. (Multitask)
###license
Generate an HTML report of all NPM modules licenses.
###download_mobile_build
Custom task.
###download_windows_mobile_build
Custom task.
###runNodeWebKit
Custom task.
###bsReload
Custom multi task. (Multitask)
###bsNotify
Custom multi task. (Multitask)
###copy
Copy files. (Multitask)
###concat
Concatenate files. (Multitask)
###compress
Compress files. (Multitask)
###sass
Compile Sass to CSS (Multitask)
###coffee
Compile CoffeeScript files into JavaScript (Multitask)
###clean
Clean files and folders. (Multitask)
###release
Bump version, git tag, git push, npm publish
###webkit-manifest
Build Manifest for webkit (package.json)
###default
Alias for "server" task.
###emulator
Alias for "runNodeWebKit", "clean:server", "concurrent:server", "postcss:css", "browserSync:dev", "concurrent:emulator" tasks.
###test:unit:auto
Alias for "karma:unit_auto" task.
###mock
Alias for "jsonserver", "serve" tasks.
###mock:dist
Alias for "jsonserver", "distribution" tasks.
###dist:mobile:build
Alias for "dist:mobile:emulator", "compress:mobileBuildBundle", "http_upload:mobileBuilder", "download_mobile_build", "http_upload:windowsMobileBuilder", "download_windows_mobile_build" tasks.
###dist:mobile
Alias for "dist:mobile:build" task.
###dist:mobile:emulator
Alias for "dist", "clean:mobileBuilderBundle", "copy:mobile" tasks.
###distribution
Alias for "dist", "browserSync:dist", "watch" tasks.
###serve
Alias for "clean:server", "concurrent:server", "postcss:css", "browserSync:dev", "jshint:all", "wiredep", "includeSource", "test:dev:unit", "watch" tasks.
###test:dev:unit
Alias for "clean:reports", "karma:unit" tasks.
###test
Alias for "clean:reports", "karma:continuous", "clean:server", "concurrent:server", "postcss:css", "wiredep", "includeSource", "instrument", "jsonserver", "browserSync:test", "shell:jasmine2" tasks.
###test:unit
Alias for "clean:reports", "karma:continuous" tasks.
###test:e2e
Alias for "clean:reports", "clean:server", "concurrent:server", "postcss:css", "wiredep", "includeSource", "instrument", "jsonserver", "browserSync:test", "shell:jasmine2" tasks.
###doc
Alias for "clean:doc", "docular" tasks.
###dist:web
Alias for "clean:dist", "useminPrepare", "concurrent:dist", "autoprefixer", "copy:dist", "copy:fonts", "ngAnnotate", "cssmin", "uglify", "rev", "usemin", "htmlmin" tasks.
###nodewebkit:dist
Alias for "clean:dist", "dist", "webkit-manifest", "nwjs" tasks.
###dist
Alias for "clean:dist", "concurrent:dist", "postcss:css", "wiredep", "includeSource", "useminPrepare", "concat:generated", "copy:dist", "ngAnnotate", "cssmin:generated", "uglify:generated", "rev", "usemin", "htmlmin" tasks.
###ngAnnotate
Add, remove and rebuild AngularJS dependency injection annotations (Multitask)
###grunt-license-report
No info 
