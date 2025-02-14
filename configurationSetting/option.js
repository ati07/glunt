grunt.initConfig({
    concat: {
      options: {
        separator: '\n/* New File */\n', // Task-level option: Add a separator between concatenated files
      },
      foo: {
        options: {
          separator: '\n// Foo Section\n' // Target-level option: Overrides task-level separator
        },
        src: ['src/file1.js', 'src/file2.js'],
        dest: 'dist/foo.js'
      },
      bar: {
        src: ['src/file3.js', 'src/file4.js'],
        dest: 'dist/bar.js' // Uses the task-level separator option
      }
    }
  });
  