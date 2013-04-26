QS.Views.NewQistFileView = Backbone.View.extend({
	render: function(){
		var that = this;

		this.form = new Backbone.Form({
		    model: that.model
		}).render();

		QS.Store.QistFileForms.push(this.form);

		that.$el.html(this.form.el).prepend('<i class="icon-file"></i>');

		return that;
	}
});