grunt.initConfig({
    concat: {
      foo: {
        src: ['src/file1.js', 'src/file2.js'],
        dest: 'dist/foo.js'
      },
      bar: {
        src: ['src/file3.js', 'src/file4.js'],
        dest: 'dist/bar.js'
      }
    },
    uglify: {
      bar: {
        src: 'dist/bar.js',
        dest: 'dist/bar.min.js'
      }
    }
  });
  