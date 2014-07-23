import Ember from "ember";
export default Ember.View.extend({
	elementId: 'modal',
	classNames: ['modal', 'fade'],
	attributeBindings: ['tabindex'],
	tabindex: '-1',
	didInsertElement: function() {
		this.$().modal('hide');
	}
});