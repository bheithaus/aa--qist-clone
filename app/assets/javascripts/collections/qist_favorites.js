QS.Collections.QistFavorites = Backbone.Collection.extend ({
	model: QS.Models.Favorite,
	initialize: function(model, options) {
		// console.log(options);
		this.qist = options.qist;
			// if (options.user) {
			// 	this.user = options.user;
			// }
	},

	url: function() {
		return "/qists/" + this.qist.get("id") + "/favorite";
	}
});