Blogger.PostsRoute = Ember.Route.extend({
	/*
		Load Controller: **.js
		Ember is forgiving with the controller
		and you don't have to create it
		it will create one for you
	*/ 
	controllerName: 'posts',
	/* 
		Load template: ** .hbs
		Same with template Ember will create one for you
		unless you especify one
	*/ 
	renderTemplate: function() {
		this.render('posts');
	},
	/* 
		Load Array that was load previously
	*/
	model: function() {
		return posts;
	}
});