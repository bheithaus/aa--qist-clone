QS.Views.NewQistView = Backbone.View.extend({
	events: {
		"click button#submit": "submitForm"
	},

	render: function() {
		var that = this;
		var qist_files = [];
		var qist_file_views;
		var submit = $("<button id='submit'>Submit</button>");

		// create some new little bits and add to the qists collection
		_(3).times(function(i) {
			qist_files.push(new QS.Models.QistFile());
		});

		//create an empty store for the qist_file_forms
		QS.Store.QistFileForms = [];

		//create new little formviews for the the bits
		qist_file_views = _(qist_files).map(function(qist_file) {
			that.model.get("qist_files_attributes").add(qist_file);
			 return new QS.Views.NewQistFileView({
				 model: qist_file
			 });
		});

		this.form = new Backbone.Form({
		    model: that.model
		}).render();

		that.$el.append(this.form.el);

		//append those to the $el
		_(qist_file_views).each(function(view) {
			that.$el.append(view.render().$el);
		});

		that.$el.append(submit);

		return that;
	},

	submitForm: function(){
		var that = this;
		that.form.commit();

		//commit the baby forms
		_(QS.Store.QistFileForms).each(function(form) {
			form.commit();
		});

		console.log(that.model.toJSON());

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