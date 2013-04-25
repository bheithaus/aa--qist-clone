QS.Collections.UserFavorites = Backbone.Collection.extend ({
	initialize: function(model, options) {
		if (options) {
			this.qist = options.qist;
		}
	},

	url: function() {
		console.log(this.qist)
		if (this.qist) {
			console.log('whaaaaa');
			return "/qists/" + this.qist.get("id") + "/favorite";
		} else {
			return "/favorites";
		}
	},

	model: QS.Models.Favorite,

	getFavByQistId: function (id) {
		return this.find(function(favorite) {
			return (favorite.get("qist").id == id);
		});
	}
});