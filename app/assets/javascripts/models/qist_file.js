QS.Models.QistFile = Backbone.RelationalModel.extend({
	urlRoot: '/qist_files',

  schema: {
        body: { type: 'TextArea' }
    }
});