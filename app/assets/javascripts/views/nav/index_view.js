QS.Views.IndexView = Backbone.View.extend({
	events: {
	},

  render: function() {
    var that = this;
		var renderedContent = JST["index"]();
		that.$el.html(renderedContent);

		return that;
  }
}