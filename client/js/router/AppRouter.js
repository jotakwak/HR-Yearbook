// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    '/api/cohort/:cohort': 'renderByCohort',
    '/api/students/:id': 'renderByStudentId'
  }

});