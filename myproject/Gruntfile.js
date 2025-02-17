module.exports = function (grunt) {
  grunt.initConfig({
    
    // 1️⃣ Concatenate & Minify JavaScript
    uglify: {
      main: {
        files: {
          'dist/js/bundle.min.js': ['src/js/app.js', 'src/js/utils.js']
        }
      }
    },

    // 2️⃣ Compile SCSS to CSS
    sass: {
      dist: {
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss'
        }
      }
    },

    // 3️⃣ Copy Images
    copy: {
      images: {
        expand: true,
        cwd: 'src/images/', // Current directory
        src: '**/*', // Copy all images
        dest: 'dist/images/' // Destination folder
      }
    },

    // 4️⃣ Watch for changes
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
      scss: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load Grunt Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Default Task
  grunt.registerTask('default', ['uglify', 'sass', 'copy', 'watch']);
};
