module.exports = function(config) {

  config.set({
    basePath: '../',

    frameworks: ["jasmine"],

    files: [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: true,

    browsers: ['Chrome', 'Firefox', 'Safari'],

    reporters: ['progress', 'coverage'],

    //coverage reporter type
    coverageReporter: {
        dir: 'coverage',
        type : 'html'
    },

    //initiate istanbul code coverage report
    preprocessors: {
        'app/js/app.js': 'coverage',
        'app/js/controllers.js': 'coverage',
        'app/js/directives.js': 'coverage',
        'app/js/filters.js': 'coverage',
        'app/js/services.js': 'coverage'
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
  
}
