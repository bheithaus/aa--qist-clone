QS.Models.Favorite = Backbone.RelationalModel.extend({
	initialize: function(model, options) {
		console.log(options);
		if (options) {
			this.qist = options.qist;
		}
	},

	url: function() {
		console.log(this.qist);
		if (this.qist) {
			return "/qists/" + this.qist.get("id") + "/favorite";
		} else {
			return "/favorites";
		}
	}
});