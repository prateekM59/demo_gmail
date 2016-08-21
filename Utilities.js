Utils = Backbone.Model.extend({
	populateLabel: function(labelModel) {
		for(j=0; j<5; j++) {
			var today = new Date();
		    var h = today.getHours();
		    var m = today.getMinutes();
		    var time = h + ":" + (m+j);
		    var label = labelModel.label;
			var data = {"sender": "Sender"+j, "subject": "Subject for mail" + j + " label: " + label, "time": time, "label": label};
			data.body = "This is a test mail body for mail " + j + "and label: " + label;
			data.body = data.body + "\n"+ data.body + "\n" + data.body;
			labelModel.add(new Mail(data));
		}
	}
});