
module.exports = function (grunt) {

	grunt.loadTasks('lib/grunt');

	// tasks
	grunt.initConfig({
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
		}
	});




	grunt.registerTask('default', ['less']);
}