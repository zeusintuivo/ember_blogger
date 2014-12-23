Blogger.ContactController = Ember.Controller.extend({
	actions: {
		sendMessage: function(){
			var message = prompt("What message?");
			this.set('confirmationNumber', Math.round(Math.random() * 100000));
			this.set('messageSent', true);
		},
	},
	messageSent: false,
	confirmationNumber: null

});