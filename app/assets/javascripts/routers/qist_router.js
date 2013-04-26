QS.Routers.QistRouter = Backbone.Router.extend({
	initialize: function($container) {
		this.$container = $container;
	},

	routes: {
		'home': 'userHome',
		'': 'index',
		"signin": "signIn",
		'qists/new': 'newQistView',
		"qists/:id": "qistView"
	},

	before: function( route ) {
		console.log("trying route \/");
		console.log(route);

		var that = this;

		var user_id = QS.Store.currentUserId;

		if ( typeof(user_id) != "number" ) {
				Backbone.history.navigate("signin", {trigger: true});
				$.get(
					"/session",
					function (data) {
						user_id = QS.Store.currentUserId = data.id;
						if ( typeof(user_id) != "number" ) {
							Backbone.history.navigate("signin", {trigger: true});
							console.log("not signed in, redirecting yer ass");
						} else {
							Backbone.history.navigate(route, {trigger: true});
						}
				}
			);
		}

	  console.log('The before filter ran and the route was foo!');

	  },

	userHome: function() {
		var that = this;

		var user_id = QS.Store.currentUserId;

		that.signedInHome(user_id);
	},

	index: function() {
		var that = this;

		var indexView = new QS.Views.IndexView();

		that.$container.html(indexView.render().$el);
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