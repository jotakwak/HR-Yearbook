var StudentEntryView = Backbone.View.extend({
	template: _.template('<span class="profile"><p><img src="<%=image%>" class="face-photo"</img></p><p class="name"><%=name%></p><p class = "quote"><%=quote%></p></span>'),

	initialize: function(){
		this.render();
	},

	render: function(model){
		this.$el = this.template(this.model.attributes);
	}
});