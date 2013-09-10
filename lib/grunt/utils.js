module.exports = {
	
	// SHAMELESS STEAL: https://github.com/angular/angular.js/blob/master/lib/grunt/utils.js
	//csp connect middleware
	csp: function(){
		return function(req, res, next){
			res.setHeader("X-WebKit-CSP", "default-src 'self';");
			res.setHeader("X-Content-Security-Policy", "default-src 'self'");
			next();
		};
	},


	  //rewrite connect middleware
	  rewrite: function(){
	  	return function(req, res, next){
	  		var REWRITE = /\/(guide|api|cookbook|misc|tutorial|error).*$/,
	  		IGNORED = /(\.(css|js|png|jpg)$|partials\/.*\.html$)/,
	  		match;

	  		if (!IGNORED.test(req.url) && (match = req.url.match(REWRITE))) {
	  			console.log('rewriting', req.url);
	  			req.url = req.url.replace(match[0], '/index.html');
	  		}
	  		next();
	  	};
	  }
	}