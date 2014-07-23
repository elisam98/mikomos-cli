import Ember from "ember";
export default Ember.Route.extend({
	model: function(params) {
		var number = Number(params.id);
		var model = this.modelFor('application').mikomos;
		return model.findBy('id', number);
	}
});