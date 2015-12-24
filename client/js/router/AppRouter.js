// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'cohort/:cohort': 'renderByCohort',
    'students/:id': 'renderByStudentId'
  },

  renderByCohort: function(cohort){
  	console.log('rendering cohort' + cohort + ' yearbook');
  	new StudentsView({collection: new Students({cohort: cohort})});
  }

});