module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: true,
          compress: true,
          output: {
            comments: false
          }
        },
        build: {
          files: {
            'dist/app.min.js': ['src/app.js']
          }
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s)
    grunt.registerTask('default', ['uglify']);
  };



// module.exports = function(grunt) {

//     grunt.initConfig({
//       jshint: {
//         files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
//         options: {
//           globals: {
//             jQuery: true
//           }
//         }
//       },
//       watch: {
//         files: ['<%= jshint.files %>'],
//         tasks: ['jshint']
//       }
//     });
  
//     grunt.loadNpmTasks('grunt-contrib-jshint');
//     grunt.loadNpmTasks('grunt-contrib-watch');
  
//     grunt.registerTask('default', ['jshint']);
  
//   };