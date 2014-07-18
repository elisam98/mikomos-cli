// import moment from 'moment';
import Ember from "ember";

export default Ember.Controller.extend({
	databaseDate: function() {
		var pulled = this.get('model.meta.time_pulled');
		var d = new Date(pulled);
//		var d = new Date();
//		return d.toUTCString('en-US');
		return moment.unix(d).fromNow();
	}.property('model.meta.time_pulled'),
	actions: {
		search: function(query) {
			this.transitionToRoute('search.query', query);
		}
	}
});
