// Simple
grunt.initConfig({
    uglify: {
      my_target: {
        src: 'src/app.js',   // Source file
        dest: 'dist/app.min.js'  // Destination file
      }
    }
  });


// Files Array Format (Multiple Mappings)

grunt.initConfig({
    uglify: {
      my_target: {
        files: [
          { src: 'src/app1.js', dest: 'dist/app1.min.js' },
          { src: 'src/app2.js', dest: 'dist/app2.min.js' }
        ]
      }
    }
  });

  
// Files Object Format (Efficient for Bulk Operations)

grunt.initConfig({
    concat: {
      dist: {
        files: {
          'dist/all.js': ['src/app1.js', 'src/app2.js']  // Multiple sources to one destination
        }
      }
    }
  });

// Dynamic File Mapping (expand: true)

grunt.initConfig({
    uglify: {
      dynamic_mappings: {
        files: [{
          expand: true,  // Enables dynamic mapping
          cwd: 'src/',   // Current working directory
          src: '**/*.js',  // Match all JS files in subdirectories
          dest: 'dist/',  // Destination folder
          ext: '.min.js'  // Rename all files with ".min.js"
        }]
      }
    }
  });
  
  
// Example: Using filter to Select Only Files

grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'dist/',
        filter: 'isFile' // Only copies files, not directories
      }
    }
  });
  