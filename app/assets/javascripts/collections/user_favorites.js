QS.Collections.UserFavorites = Backbone.Collection.extend ({
	url: "/favorites",
	model: QS.Models.Favorite
});