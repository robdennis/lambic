var spawn = require('child_process').spawn;

module.exports = function (grunt) {

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

	// build less
	grunt.registerMultiTask('less', 'Compile less files into CSS', function (config) {

		var files = this.files;
		var returns = files.length;
		var done = this.async();

		files.forEach(function (file) {
			file.src.forEach(function ( lessFile ) {

				var less_comp = spawn('./node_modules/less/bin/lessc', [lessFile, file.dest]);

				less_comp.on('error', function (err) {
					grunt.log.error('[lessc] [error] ' + err + " " + this.stdout.read());
				});

				less_comp.on('exit', function (Num) {
					grunt.log.writeln('[lessc] compiling: ' + file.dest);

					returns -= 1;
					if (returns < 1) {
						grunt.log.writeln('[lessc] compile complete.');
						done();
					}
				});

			});
		});
	});


	grunt.registerTask('default', ['less']);
}