var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
      this.renderLanding();
    }.bind(this));

    options.router.on('route:renderByCohort', function(){
      console.log('Hit cohort Route')
    }.bind(this));

  },

  renderCohort: function(cohort) {
  },

  renderLanding: function() {
    console.log('rendering the landing page');
    new StudentsView({collection: new Students({cohort: 37})});
  }
})