import Ember from "ember";
import _ from "vendor/underscore/underscore";

export default Ember.ArrayController.extend({
	offset: 0,
	searchTerm: '',
	selectedCountry: '',
	selectedState: '',
	neighborhood: '',
	filtered: function() {
		this.set('offset', 0);
		var model = this.get('model');
		var country = this.get('selectedCountry');
		var searchTerm = this.get('searchTerm');
		var state = this.get('selectedState');
		var neighborhood = this.get('neighborhood');
		var category = this.get('selectedCategory');

		var filtered = model;
		if(searchTerm.length > 2) {
			var regex = new RegExp(searchTerm, 'i');
			filtered = filtered.filter(function(item) {
				return item.title.match(regex);
			});
		}
		if(country) {
			filtered = filtered.filterBy('country', country);
		}
		if(state) {
			filtered = filtered.filterBy('state', state);
		}
		if(neighborhood) {
			filtered = filtered.filterBy('neighborhood', neighborhood);
		}
		if(category) {
			filtered = filtered.filter(function(item) {
				return _.contains(item.categories, category);
			});
		}
		return filtered;
	}.property('selectedCountry', 'selectedState', 'neighborhood', 'selectedCategory', 'searchTerm'),
	categories: function() {
		var categories = [];
		var model = this.get('model');
		model.forEach(function(place) {
			place.categories.forEach(function(category) {
				if(!_.contains(categories, category)) {
					categories.push(category);
				}
			});
		});
//		console.log(categories);
		return categories;
	}.property('selectedCategory'),
	countries: function() {
		var countries = [];
		var model = this.get('model');
		
		model.forEach(function(place) {
			if(!_.contains(countries, place.country) && place.country) {
				countries.push(place.country);
			}
		});
		countries.push('');
		return countries.sort();
	}.property(),
	states: function() {
		this.setProperties({selectedState: null, neighborhood: null});
		var states = [];
		var model = this.get('model');
		var country = this.get('selectedCountry');
		model.forEach(function(place) {
			if(place.country === country) {
				if(!_.contains(states, place.state) && place.state) {
					states.push(place.state);
				}
			}
		});
		states.push('');
		return states.sort();
	}.property('selectedCountry'),
	neighborhoods: function() {
		this.set('neighborhood', null);
		var neighborhoods = [];
		var model = this.get('model');
		var state = this.get('selectedState');
//		var country = this.get('selectedCountry');
		model.forEach(function(place) {
			if(place.state === state) {
				if(!_.contains(neighborhoods, place.neighborhood) && place.neighborhood) {
					neighborhoods.push(place.neighborhood);
				}
			}
		});
		neighborhoods.push('');
		return neighborhoods.sort();
	}.property('selectedState', 'selectedCountry'),
	actions: {
		resetAll: function() {
			this.setProperties({
				searchTerm: '',
				selectedCountry: null,
				selectedState: null,
				selectedNeighborhood: null,
				selectedCategory: null
			});
		},
		clearTerm: function() {
			this.set('searchTerm', '');
		},
		clearCategory: function() {
			this.set('selectedCategory', null);
		}
	}
});