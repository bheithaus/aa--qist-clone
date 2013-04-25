QS.Models.Qist = Backbone.RelationalModel.extend({
	urlRoot: '/qists',

	relations: [{
		type: "Backbone.HasMany",
		key: "favorites",
		relatedModel: "QS.Models.Favorite",
		collectionType: "QS.Collections.QistFavorites",
		collectionOptions: function(qist) {
			return { qist: qist };
		},
		reverseRelation: {
			key: "qist",
			keySource: "qist_id",
			includeInJSON: "id"
		}
	}]
});