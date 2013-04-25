QS.Collections.UserQists = Backbone.Collection.extend({
  model: QS.Models.Qist,

	initialize: function(model, options) {
	 this.user = options.user;
	},

	url: function() {
		var that = this;

		return '/users/' + that.user.get('id') + '/qists';
	}
})