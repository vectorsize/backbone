module.exports = function(grunt) {
  
  grunt.initConfig({
    rig: {
      compile: {
        files: {
          'dist/backbone.rig.js': ['src/backbone.js'],
          'dist/backbone-mv.rig.js': ['src/backbone-mv.js'],
          'dist/offbone-mv.rig.js': ['src/offbone-mv.js'],
          'dist/offbone-mvc.rig.js': ['src/offbone-mvc.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['rig'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-rigger');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};