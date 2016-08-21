var LabelView = Backbone.View.extend({
	initialize: function(){
		this.model.on('add', this.addMailCallback, this);
		this.model.on('remove', this.clickLabelCallback, this);
	},
	render: function() {
		_.each(this.model.models, function(mail) {
			var mailView = new MailView({model: mail});
			$('#mailbox').append(mailView.render().$el);
		});
	},
	clickLabelCallback: function() {
		app.activeLabel = this.model.id;
		$('#mailbox').html('');
		this.render();
	},
	addMailCallback: function(){
		if(app.activeLabel === this.model.id) {
			$('#mailbox').html('');
			this.render();
		}
	},
	events: {
		'click': 'clickLabelCallback'
	}
});