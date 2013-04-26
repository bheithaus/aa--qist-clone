QS.Models.Qist = Backbone.RelationalModel.extend({
	urlRoot: '/qists',
  schema: {
        title: 'Text'
    },
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
	},
	{
			type: "Backbone.HasMany",
			key: "qist_files_attributes",
			relatedModel: "QS.Models.QistFile",
			collectionType: "QS.Collections.QistFiles",
			collectionOptions: function(qist) {
				return { qist: qist };
			},
			reverseRelation: {
				key: "qist",
				keySource: "qist_id",
				includeInJSON: "id"
			}
	}
	]
});