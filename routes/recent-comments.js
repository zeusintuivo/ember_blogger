Blogger.RecentCommentsRoute = Ember.Route.extend({
	/* 
		Load Javascript controller
	*/
	controllerName:  'recent-comments',
	/* 
		Load Javascript Template or and .hbs file
	*/
	renderTemplate: function(){
		this.render('recent-comments');
	},	
	/* 
		return an array for values 
	*/
	model: function(){
		return comments;
	}
});