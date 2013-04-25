QS.Views.SignInView = Backbone.View.extend({
	events: {
		"click button#submit-sign-in" : "signIn",
	},

  render: function() {
    var that = this;
		var renderedContent = JST["sessions/new"]();
		that.$el.html(renderedContent);

		return that;
  },

	signIn: function() {
		var userName = $("#user-name").val();
		$.post(
			"/session",
			{ user_name: userName },
			function (sessionData) {
				if ( !QS.Store.Users.get(sessionData.id) ) {
					var user = new QS.Models.User({
						id: sessionData.id,
						user_name: sessionData.user_name
					});
				}

				QS.Store.currentUserId = sessionData.id;

				console.log("user_id after sign in");
				console.log(QS.Store.currentUserId);
				$("a#sign-in").prop("id", "sign-out").text("Sign Out");

				Backbone.history.navigate("#", {trigger: true});
			}
		);
	}
});