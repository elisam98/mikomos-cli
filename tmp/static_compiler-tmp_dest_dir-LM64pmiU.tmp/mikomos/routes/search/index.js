import Ember from "ember";
export default Ember.Route.extend({
	model: function() {
		var model = this.modelFor('application').mikomos;
		return model;
	}
});