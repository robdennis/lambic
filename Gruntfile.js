module.exports = function (grunt) {

	// libraries
	grunt.loadTasks('lib/grunt');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	var userConfig = require('./build.config.js');
	
	var taskConfig = {

		pkg: grunt.file.readJSON('package.json'),

		less: {
			options: {
				globals: {
					cool: "beans"
				}
			},
			files: {
				cwd: "less/",
				expand: true,
				src: ["**/*.less"],
				dest: "app/css/",
				ext: ".css",
			}
		},

		watch: {
			less: {
				files: ["less/**/*"],
				tasks: ['less']
			}
		},

		karma: {
			options: {
				configFile: '<%= build_dir %>/karma-unit.js'
			},
			unit: {
				runnerPort: 9101,
				background: true
			},
			continuous: {
				singleRun: true
			}
		},

	};

  	grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

	// composite tasks
	grunt.registerTask('default', ['less']);

}