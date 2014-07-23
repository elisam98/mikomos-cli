import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression((helper = helpers['result-thumb'] || (depth0 && depth0['result-thumb']),options={hash:{
    'model': ("place")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "result-thumb", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<center>\n			<button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "moreResults", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">More <span class=\"glyphicon glyphicon-arrow-down\"></span></button>\n		</center>\n	</div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<p class=\"pull-right\">\n		");
  data.buffer.push(escapeExpression((helper = helpers['add-number'] || (depth0 && depth0['add-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "offset", options) : helperMissing.call(depth0, "add-number", "offset", options))));
  data.buffer.push(" to ");
  data.buffer.push(escapeExpression((helper = helpers['add-number'] || (depth0 && depth0['add-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "maxRecord", options) : helperMissing.call(depth0, "add-number", "maxRecord", options))));
  data.buffer.push(" of ");
  data.buffer.push(escapeExpression((helper = helpers['add-number'] || (depth0 && depth0['add-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modelLength", options) : helperMissing.call(depth0, "add-number", "modelLength", options))));
  data.buffer.push("\n		</p>\n	</div>\n</div>\n<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<div class=\"list-group\">\n			");
  stack1 = helpers.each.call(depth0, "place", "in", "arrangedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n</div>\n");
  stack1 = helpers.unless.call(depth0, "noMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
