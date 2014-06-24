module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      library: {
        src: [
          'lib/*.js'
        ],
        directives: {
          browser: true,
          predef: [
            'jQuery',
            'Window'
          ],
          indent: 2,
          regexp: true
        }
      }
    },

    uglify: {
      options: {
        banner: "/*\n<%= pkg.name %>\nversion: <%= pkg.version %>\ncompiled: <%= grunt.template.today('yyyy-mm-dd') %>\n<%= pkg.author %>\n*/",
        mangle: false,
        sourceMap: true
      },
      my_target: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['lib/base.js', 'lib/string_ext.js', 'lib/object_ext.js', 'lib/date_ext.js', 'array_array.js']
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jslint'); // load the task
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', 'jslint');
};
