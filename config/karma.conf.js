basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome', 'Firefox', 'Safari'];

reporters = ['progress', 'coverage'];

//coverage reporter type
coverageReporter = {
    dir: 'coverage',
    type : 'html'
};

//initiate istanbul code coverage report
preprocessors = {
    'app/js/**/*.js': 'coverage'
};

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
