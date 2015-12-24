// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    '#cohort/:cohort': 'renderByCohort',
    '#students/:id': 'renderByStudentId'
  },

  renderByCohort: function(cohort){

  }

});