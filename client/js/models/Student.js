var Student = Backbone.Model.extend({
  
  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    quote: ''
  },

  initialize: function(){
  	this.set('quote', this.generateQuote());
  },

  generateQuote : function(){
  	var subject = ["I", "You", "Hack Reactor", "Javascript", "Coding", "Technology", "We", "The world", "My ambition", "My dream", "My imagination", "Unicorns", "Your hopes and dreams"];
  	var verb = [" will destroy", " destroyed", " will create", " created", " will start", " started", " loved", " will love", " paid too much money for", " used to crave"];
  	var object = [" the humanity", " sushirrito", " over-priced chicken satay", " free membership to 24-hour fitness", " the helpdesk", " toy problems", " the corporate America", " democratic presidential candidates", " republican presidential candidates", " politically-correct jokes"];
  	var adverb = [" with passion.", ", time permitting.", ", if you believe in it.", ", if paid decent salary for that.", " LOL!" ,"... just kidding :p.", " :-) .", " :-( .", ", thinking people would love it.", "."];
	var quote = [];

	quote.push(subject[Math.floor(subject.length*Math.random())]);
	quote.push(verb[Math.floor(verb.length*Math.random())]);
	quote.push(object[Math.floor(object.length*Math.random())]);
	quote.push(adverb[Math.floor(adverb.length*Math.random())]);

	quote = '"' + quote.join('') + '"';

	return quote;
  }

});