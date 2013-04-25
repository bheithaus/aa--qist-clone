QS.Views.QistDetailView = Backbone.View.extend({
	events: {
		"click button#favorite" : "favorite",
		"click button#unfavorite": "unFavorite"
	},

	render: function() {
		var that = this;

		var renderedContent = JST["qists/show"]({
			qist: that.model
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
		console.log("hey whatthehell");
		var that = this;
		QS.Models.Favorite.bind('remove', function() {
			this.destroy();
		});
		that.toggleButton();
		var fav = that.model.get("favorites")
							.findWhere({user_id: QS.Store.currentUserId});

		console.log(fav);
		//that.model.get("favorites").remove({}, { qist: that.model });
	},

	favorite: function() {
		var that = this;
		that.toggleButton();

		that.model.get("favorites").create({}, { qist: that.model });
	}
});