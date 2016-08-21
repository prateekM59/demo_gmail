var Mail = Backbone.Model.extend({
	defaults: function() {
		return {
			sender: '',
			subject: '',
			time: '',
			label: 'inbox',
			body: ''
		};
	}
});