import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MikomosENV.locationType
});

Router.map(function() {
	this.route('browse');
	this.resource('search', function() {
		this.route('query', {path: '/:query'});
	});
	this.route('makom', {path: '/makom/:id'});
	this.route('near-me');
});

export default Router;
