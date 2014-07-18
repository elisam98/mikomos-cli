import Ember from "ember";
export default Ember.Component.extend({
	offset: 0,
	limit: 20,
	modelLength: function() {
		return this.get('model').length;
	}.property('model'),
	maxRecord: function() {
		var limit = this.get('limit');
		var offset = this.get('offset');
		var length = this.get('modelLength');
		var maxRecord = offset + limit;
		if(maxRecord > length) {
			return length;
		}
		else {
			return maxRecord;
		}
	}.property('offset', 'limit', 'modelLength'),
	arrangedContent: function() {
		var model = this.get('model');
		var limit = this.get('limit');
		var offset = this.get('offset');
		var sliced = model.slice(offset, offset + limit);
		return sliced;
	}.property('model', 'offset', 'limit'),
	noPreviousPage: function() {
		return this.get('offset') === 0;
	}.property('offset'),
	noNextPage: function() {
		var limit = this.get('limit');
		var offset = this.get('offset');
		var length = this.get('model').length;
		if(length === 0) {
			return true;
		} else {
			return offset + limit > length;
		}
	}.property('offset', 'limit', 'model'),
	noMore: function() {
		var limit = this.get('limit');
		var length = this.get('model').length;
		if(limit >= length) {
			return true;
		} else {
			return false;
		}
	}.property('offset', 'limit', 'model'),
	actions: {
		prevPage: function() {
			var offset = this.get('offset');
			var	limit = this.get('limit');
			if(offset !== 0) {
				this.decrementProperty('offset', limit);
			}
		},
		nextPage: function() {
			var offset = this.get('offset');
			var limit = this.get('limit');
			var length = this.get('model.length');
			if(offset + limit < length) {
				this.incrementProperty('offset', limit);
			}
		},
		moreResults: function() {
			var offset = this.get('offset');
			var limit = this.get('limit');
			var length = this.get('model.length');
			if(offset + limit < length) {
				this.incrementProperty('limit', limit);
			}
		}
	}
});