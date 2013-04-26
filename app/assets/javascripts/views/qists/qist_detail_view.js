QS.Views.QistDetailView = Backbone.View.extend({
	events: {

	},

	render: function() {
		var that = this;
		var user = QS.Store.Users.get(QS.Store.currentUserId);

		var renderedQist = JST["qists/show"]({
			qist: that.model
		});

		//find or make a favorite
		var favorite = user.get("favorites").getFavByQistId(that.model.id)
										|| new QS.Models.Favorite({}, { qist: that.model });

										console.log(favorite);
		//make a favorite id
		var favoriteButtonView = new QS.Views.FavoriteButtonView({
			model: favorite
		});

		that.$el.html(renderedQist).append(favoriteButtonView.render().$el);

		that.model.get("qist_files_attributes").fetch({
			success: function(resp) {
				console.log(resp);
				console.log(that.model.get("qist_files_attributes"));
				that.model.get("qist_files_attributes").each(function(qist_file) {
					var well = $("<div class='well'></div>");
					that.$el.append($(well.text(qist_file.escape("body"))));
				});
			}
		});




		return that;
	}
});