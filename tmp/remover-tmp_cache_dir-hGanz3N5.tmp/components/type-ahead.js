// This is a WIP
import Ember from 'ember';
export default Ember.Component.extend({
	tagName: 'input',
	classNames: ['form-control'],
	didInsertElement: function() {
		var data = [
			{
				"value": "Ukraine",
				"url": "http://en.wikipedia.org/wiki/Ukraine",
				"country_code": "UA"
			},
			{
				"value": "Uganda",
				"url": "http://en.wikipedia.org/wiki/Uganda",
				"country_code": "UG"
			},
			{
				"value": "United Arab Emirates",
				"url": "http://en.wikipedia.org/wiki/United_Arab_Emirates",
				"country_code": "AE"
			},
			{
				"value": "United Kingdom",
				"url": "http://en.wikipedia.org/wiki/United_Kingdom",
				"country_code": "GB"
			},
			{
				"value": "United States",
				"url": "http://en.wikipedia.org/wiki/United_States",
				"country_code": "US"
			},
			{
				"value": "Uruguay",
				"url": "http://en.wikipedia.org/wiki/Uruguay",
				"country_code": "UY"
			},
			{
				"value": "Uzbekistan",
				"url": "http://en.wikipedia.org/wiki/Uzbekistan",
				"country_code": "UZ"
			}
		];
		this.$().typeahead({
			name: 'example',
			local: data,
			limit: 7,
			template: '<p>{{value}} ({{country_code}})</p>',
			engine: null
		}).on('typeahead:selected', function(event, datum) {
			window.location = datum.url;
		});
	}
});