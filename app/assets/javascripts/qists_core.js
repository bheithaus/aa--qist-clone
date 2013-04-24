var QS = {
	Collections: {},
	Models: {},
	Views: {},
	Routers: {},
	Store: {},

	init: function($container, userData, qistData) {
		this.$container = $container;
		this.userData = userData;
		this.qistData = qistData;

		// store both collections in store

		this.makeSidebar();

		// make router, pass it $continer
		// start history
	},

	makeSidebar: function() {
		// maybe a sidebar??? sounds nice
	}

}