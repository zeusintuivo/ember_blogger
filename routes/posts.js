Blogger.PostsRoute = Ember.Route.extend({
	controllerName: 'posts',
	renderTemplate: function() {
		this.renderr.('posts');
	},
	model: function() {
		return posts;
	}
});