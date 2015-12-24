var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.populateCohort();
  },
  populateCohort: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    this.fetch({
    	success: function(data){
    		console.log('Students collection fetch successful');
    		console.log('sending fetchSuccess signal to StudentsView');
    		this.trigger('fetchSuccess', this);
    	}.bind(this),
    	error: function(){
    		console.log('ERROR: Students collection fetch unsuccessful')
    	}
    });
  }
});