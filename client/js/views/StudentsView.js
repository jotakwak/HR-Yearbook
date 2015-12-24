var StudentsView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('fetchSuccess', function(){
    	console.log('heard fetchSuccess signal from Students collection');
    	console.log('rendering the studentsView');
    	this.render();
    }.bind(this));
  },

  render: function() {
  	var students = this.collection.models;
  	var html = students.map(function(student){
  		var studentFace = new StudentEntryView({model: student});
  		return studentFace.$el;
  	}.bind(this));
  	$('#page-content-container').html(html);
  }

});