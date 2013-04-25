QS.Views.HomeView = Backbone.View.extend({
	events: {

	},

	render: function() {
		var that = this;
		var renderedContent = JST["users/home"]({
			user: that.model
		});
		that.$el.html(renderedContent);

		return that;
	}
});