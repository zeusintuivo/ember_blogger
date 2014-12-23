Blogger.AboutController = Ember.Controller.extend({
	actions: {
		showRealName: function(){
			alert("blah blah blah blah blah blah blah blah blah blah blah blah");
		},
		showPicture: function() {
			this.set('isPictureShowing', true);
		}
	},
	isPictureShowing: false,


});