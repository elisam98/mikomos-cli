import Ember from "ember";
export default Ember.Controller.extend({
	isHome: function() {
		var path = this.get('currentPath');
		return path === 'index';
	}.property('currentPath'),
	needsFilter: function() {
		return this.get('currentPath') === 'search.index';
	}.property('currentPath')
});