var StudentEntryView = Backbone.View.extend({
	template: _.template('<tr><td><%=name%></td><td><img src="<%=image%>"></td></img></tr>'),

	initialize: function(){
		this.render();
	},

	render: function(model){
		this.$el = this.template(this.model.attributes);
	}
});