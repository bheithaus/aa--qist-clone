QS.Routers.QistRouter = Backbone.Router.extend({
	initialize: function($container) {
		this.$container = $container;
	},

	routes: {
		'': 'userHome',
		"signin": "signIn",
		"qists/:id": "qistView"
	},

	userHome: function() {
		var that = this;

		var user_id = QS.Store.currentUserId;

		if ( typeof(user_id) != "number" ) {
			$.get(
				"/session",
				function (data) {
					console.log(data);
					user_id = QS.Store.currentUserId = data.id;
					console.log(user_id);
					if ( typeof(user_id) == "number" ) {
						that.signedInHome(user_id);
					} else {
						Backbone.history.navigate("signin");
					}
				}
			);
		} else {
			that.signedInHome(user_id);
		}
	},

	signedInHome: function(user_id) {
		var that = this;
		var user = QS.Store.Users.get(user_id);

		QS.makeSidebar($("#side-bar"));

		user.get("qists").fetch({
			success: function () {
				var homeView = new QS.Views.HomeView({
					model: user
				});

				that.$container.html(homeView.render().$el);
			}
		});
	},

	qistView: function(id) {
		var that = this;
		var qistDetailView = new QS.Views.QistDetailView({
			model: QS.Store.Qists.get(id)
		});

		that.$container.html(qistDetailView.render().$el);
	},

	signIn: function() {
		// make a signin page
		var signInView = new QS.Views.SignInView();

		this.$container.html(signInView.render().$el);
		//append to container
	}
});