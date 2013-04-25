window.QS = {
	Collections: {},
	Models: {},
	Views: {},
	Routers: {},
	Store: {},

	init: function($container, qistsData, usersData) {
		QS.Store.Users = new QS.Collections.Users(usersData);
		QS.Store.Qists = new QS.Collections.Qists(qistsData);

		var router = new QS.Routers.QistRouter($container);

		Backbone.history.start();
	},

	makeSidebar: function($sidebar) {
		var sidebar = new QS.Views.Sidebar();

		$sidebar.html(sidebar.render().$el);
	}
};