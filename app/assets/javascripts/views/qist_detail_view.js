QS.Views.QistDetailView = Backbone.View.extend({
	events: {
		"click button#favorite" : "favorite"
	},

	render: function() {
		var that = this;

		var renderedContent = JST["qists/show"]({
			qist: that.model
		});

		that.$el.html(renderedContent);

		return that;
	},


	favorite: function() {
		var that = this;
		that.model.get("favorites").create({}, { qist: that.model });
	}
});