import Ember from "ember";
export default Ember.Route.extend({
	model: function(params) {
		var model = this.modelFor('application').mikomos;
		var regex = new RegExp(params.query, 'i');
		return model.filter(function(item) {
			return item.title.match(regex);
		});
	}
});