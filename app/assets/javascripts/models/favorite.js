QS.Models.Favorite = Backbone.RelationalModel.extend({
	initialize: function(model, options) {
		if (options) {
			this.qist = options.qist;
		}
	},

	urlRoot: function() {
		console.log(this);
		if (this.qist && this.get("user")) {
			return "/favorites";
			console.log('whaaaaa');
		} else if (this.qist) {
			return "/qists/" + this.qist.get("id") + "/favorite";
		}
	}
});