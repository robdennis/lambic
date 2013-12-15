
module.exports = function (grunt) {

	grunt.loadTasks('lib/grunt');
    grunt.loadNpmTasks('grunt-express-server');

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
				ext: ".css"
			}
		},

        express: {
            options: {
                // Override defaults here
                background: false
            },
            dev: {
                options: {
                    script: 'scripts/web-server.js'
                }
            },
            prod: {
                options: {
                    script: 'scripts/web-server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'scripts/web-server.js'
                }
            }
        }
	});

	grunt.registerTask('default', ['less']);
    grunt.registerTask('server', ['express:dev']);
};