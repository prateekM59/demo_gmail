var MenuView = Backbone.View.extend({
	el: $("#leftPane"),
	initialize: function() {
		this.template = _.template($("#menuTemplate").html());
	},
	render: function() {
		var modelData = this.model.toJSON();
		var compiledHTML = this.template({data: modelData});
		this.$el.html(compiledHTML);
		return this;
	},
	switchLabels: function(ev) {
		var newLabel = ev.target.innerText.toLowerCase();
		_.each(app.labels, function(listItem) {
			if (listItem.label === newLabel) {
				app.labelViews[listItem.id].clickLabelCallback();
			}
		});
	},
	renderLabelInput: function() {
		var self = this;
		var newLabelInputTemplate = _.template($("#newLabelTemplate").html());
		var compiledHTML = newLabelInputTemplate();
		$('#newLabelArea').html(compiledHTML);
		
		$("#newLabel").submit(function() {
			var newLabelName = $("#newLabelInput").val();
			var labels = self.model.get("labels");
			var i = app.nextLabelId;
			labels.push(newLabelName);
			self.model.set("labels", labels);
			$('#newLabelArea').html('');
			self.render();
			app.labels[i] = new LabelModel();
			app.labels[i].label = newLabelName;
			app.labels[i].id = i;
			app.labelViews[i] = new LabelView({model: app.labels[i]});
			i++;
			app.nextLabelId = i;
			return false;
		});
	},
	events: {
		'click .pane': "switchLabels",
		'click .addNewLabel': "renderLabelInput"
	}
});