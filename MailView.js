var MailView = Backbone.View.extend({
	tagname: 'div',
	initialize: function() {
		this.template = _.template($("#mail-template").html());
	},
	render: function() {
		var modelData = this.model.toJSON();
		var compiledHTML = this.template({data: modelData});
		this.$el.html(compiledHTML);
		return this;
	},
	renderBody: function() {
		$('#mailbox').html('');
		$('#mailbox').text(this.model.get("body"));
	},
	events: {
		'click': 'renderBody'
	}
});