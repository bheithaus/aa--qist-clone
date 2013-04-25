QS.Routers.QistRouter = Backbone.Router.extend({
	initialize: function($container) {
		this.$container = $container;
	},

	routes: {
		'': 'userHome',
		"signin": "signIn",
		'qists/new': 'newQistView',
		"qists/:id": "qistView"

	},

	userHome: function() {
		var that = this;

		// how do we protect all routes?
		// before filter with BB?

		var user_id = QS.Store.currentUserId;

		if ( typeof(user_id) != "number" ) {
			$.get(
				"/session",
				function (data) {
					user_id = QS.Store.currentUserId = data.id;
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
		var qist = QS.Store.Qists.get(id);
		var user = QS.Store.Users.get(QS.Store.currentUserId);

		user.get("favorites").fetch({
			success: function () {
				var qistDetailView = new QS.Views.QistDetailView({
					model: qist
				});

				that.$container.html(qistDetailView.render().$el);
			}
		});
	},

	signIn: function() {
		// make a signin page
		var signInView = new QS.Views.SignInView();

		this.$container.html(signInView.render().$el);
		//append to container
	},

	newQistView: function() {

		var that = this;

		var blankQist = new QS.Models.Qist();

		var newQistView = new QS.Views.NewQistView({
			model: blankQist
		});

		this.$container.html(newQistView.render().$el);
	}
});