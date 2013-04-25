QS.Models.User = Backbone.RelationalModel.extend({
	urlRoot: '/users',

	relations: [{
		type: 'Backbone.HasMany',
		key: 'qists',
		relatedModel: 'QS.Models.Qist',
		collectionType: 'QS.Collections.UserQists',
		collectionOptions: function(this_model) {
			return { user: this_model };
		},
		reverseRelation: {
			key: 'user',
			keySource: 'user_id',
			includeInJSON: 'id'
		}
	},
	{
		type: "Backbone.HasMany",
		key: "favorites",
		relatedModel: "QS.Models.Favorite",
		collectionType: "QS.Collections.UserFavorites",
		reverseRelation: {
			key: "user",
			keySource: "user_id",
			includeInJSON: "id"
		}
	}]
});