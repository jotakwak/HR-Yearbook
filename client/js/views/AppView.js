var AppView = Backbone.View.extend({

  el: '#app-container',

  navbarTemplate: _.template('<ul id="navbar"><a href = "/"><li id="navbar-homebutton"><img id = "hr-logo" src = "../assets/hr-logo.png"></img><text id="navbar-title">HACK REACTOR YEARBOOK 2015</text></li></a><li id="cohort-button"><a href="#cohort/36">Cohort 36</a></li><li id="cohort-button"><a href="#cohort/37">Cohort 37</a></li></ul>'),

  initialize: function(options) {

    $('#navbar-container').html(this.navbarTemplate());

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
      this.renderLanding();
    }.bind(this));

  },

  renderLanding: function() {
    console.log('rendering the landing page');
  }
})