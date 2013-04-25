QS.Views.NewQistView = Backbone.View.extend({
	events: {
		"click button#submit": "submitForm"
	},

	render: function() {
		var that = this;

		this.form = new Backbone.Form({
		    model: that.model
		}).render();

		var submit = $("<button id='submit'>Submit</button>");

		that.$el.append(this.form.el)
							.append(submit);

		return that;
	},

	submitForm: function(){
		var that = this;
		that.form.commit();
		that.model.save({}, {
			success: function(model){
				console.log(model);
				//that.model.set('id', model.id);

        QS.Store.Qists.add(that.model);
				Backbone.history.navigate('')
			}
		});
	}
})