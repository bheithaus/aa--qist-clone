QS.Views.FavoriteButtonView = Backbone.View.extend({
	events: {
		"click button#favorite" : "favorite",
		"click button#unfavorite": "unFavorite"
	},

	render: function() {
		var that = this;
		var renderCallback = that.render.bind(that);

		that.model.on('change', renderCallback);
		that.model.on('destroy', renderCallback);

		var renderedContent = JST["qists/fav_button"]({
			favorite: that.model
		});
		that.$el.html(renderedContent);

		return that;
	},

	toggleButton: function() {
		var that = this;
		var $button = $(".fav");

		if ( $button.prop("id") == "favorite" ) {
			$button.prop("id", "unfavorite").text("UnFav!!");
		} else {
			$button.prop("id", "favorite").text("Fav!!");
		}
	},

	unFavorite: function() {
		this.model.qist = null;
		this.model.destroy();
	},

	favorite: function() {
		var that = this;
		var user = QS.Store.Users.get(QS.Store.currentUserId);

		this.model.save({ success: function() {
			user.get("favorites").add(that.model);
			console.log(that.model);
			console.log("just got added to the collection");

		}});
	}
});