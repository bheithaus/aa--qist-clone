QS.Collections.QistFiles = Backbone.Collection.extend ({
	initialize: function(model, options) {
		this.qist = options.qist;
	},

	model: QS.Models.QistFile,

	url: function() {
		return "/qists/" + this.qist.id + "/qist_files";
	}
});

//probly not gonna work