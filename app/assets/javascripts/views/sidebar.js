QS.Views.Sidebar = Backbone.View.extend({
	events: {
		"click a#sign-in" : "signIn",
		"click a#sign-out" : "signOut",
	},

  render: function() {
    var that = this;
		var renderedContent = JST["sidebar"]();
		that.$el.html(renderedContent);

		return that;
  },

	signIn: function() {
		Backbone.history.navigate("signin", { trigger: true });
	},

	signOut: function() {
		var user = QS.Store.currentUser;

		$.post(
			"/session",
			{ _method: "DELETE" },
			function (someStuff) {

				$("a#sign-out").prop("id", "sign-in").text("Sign In");

				QS.Store.currentUserId = null;

				Backbone.history.navigate("", {trigger: true});
			}
		);
	}
});