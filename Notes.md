# Getting start started
- Before getting started make sure that you have installed npm and nodejs

# Installing CLI
- To install CLI, if we want to install globally then we need to run the command with "npm install -g grunt-cli". And we need to install in dependency then we need to run "npm install grunt --save-dev"
- After the installing the CLI then we can run simply pass the "grunt" in command to run.

# Preparing a new Grunt project
- To create a project with grunt need to run npm init command. After that need to make Gruntfile.js where we need to put some config code.

# Installing Grunt and gruntplugins
- To install the plugin we need to follow some format like this "npm install <module> --save-dev". Suppose we need to install a plugin uglify then command will be "npm install grunt-contrib-uglify --save-dev"

# The "wrapper" function:
- every gruntfile has a grunt function wrapper which has all written code.

# Project and task configuration:

  ### grunt.initConfig() :
   - Most of project rely on the grunt configuration, where configuration is set in grunt.initConfig() method. This method takes all neccessary task
  ### grunt.file.readJSON('package.json'):

   - If we want to read the hardcoded detail from package.json, grunt store this information in pkg attributes.

  ### Template Strings (<%= %>)
   - Using the templating string we can implement the packages.json data dynamically. 

  ### uglify Task Configuration:
   - uglify is a plugin of glunt which is use to minify the javscript code, which has own setting for example it has option setting where we can set the banner at the top of minifying file.
   - it has build traget setting where we can set src and dist location.

# Loading Grunt plugins and tasks:
 - Once project config setup then we can load the plugin using "grunt.loadNpmTasks('grunt-contrib-uglify')" and task using this format "grunt.registerTask('default', ['uglify'])"
 - If project don't require any grunt plugin task then we can also set custom task.

# Grunt Configuration:
 - All task configuration is defined in grunt.initConfig() method. This configuration will mostly be under task-named properties. We can also write arbitrary data in config. Becuase of it is a javscript object, we can write valid javascript code init.

# Task Configuration and Targets: 
 - When task is run then Grunt lookup the configuration under a property of the same name. By concate method, we can set multiple task in concate  and we can access in plugin.

# option:
 - Grunt takes default option, we can override the option by setting custom option in both task level and target level. If we set at task level then it will change all task file and if we set at target level then it will affect only targted task.

<!-- # Files
 - Grunt handles the multiple file 
 Note- RequireJS, Sass plugin -->
 