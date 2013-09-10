module.exports = function (grunt) {

	// libraries
	grunt.loadTasks('lib/grunt');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-conventional-changelog');

	grunt.loadNpmTasks('grunt-karma');

	var userConfig = require('./build.config.js');
	
	var taskConfig = {

		pkg: grunt.file.readJSON('package.json'),


		less: {
			files: {
				src: ['less/**/*.less'],
				dest: "app/css/lambic.css"
			}
		},


		watch: {
			less: {
				files: ['less/**/*'],
				tasks: ['less']
			}
		},


		changelog: {
			options: {
				dest: 'CHANGELOG.md',
			}
		},


		karma: {
			options: {
				configFile: '<%= config_dir %>/karma-unit.js'
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

	grunt.registerTask('test', ['karma']);

	grunt.registerTask('build', ['changelog']);
}