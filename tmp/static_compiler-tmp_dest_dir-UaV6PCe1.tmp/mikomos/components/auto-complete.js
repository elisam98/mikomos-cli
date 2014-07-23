import Ember from "ember";
export default Ember.Component.extend({
	searchText: '',
	searchResults: function() {
		var searchText = this.get('searchText');
		var model = this.get('model');
		var result;
		
		if (!searchText){
			return;
		}
		if (searchText.length > 2) {
			var regex = new RegExp(searchText, 'i');
			result = model.filter(function(item) {
				return item.title.match(regex);
			});
		}
		return result;
	}.property('searchText'),
	actions: {
		search: function() {
			var query = this.get('searchText');
//			console.log(query);
			this.sendAction('search', query);
		}
	}
});