import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		");
  data.buffer.push(escapeExpression((helper = helpers['result-thumb'] || (depth0 && depth0['result-thumb']),options={hash:{
    'model': ("place")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "result-thumb", options))));
  data.buffer.push("\n	");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n	<div class=\"col-xs-12\">\n		Record ");
  stack1 = helpers._triageMustache.call(depth0, "offset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to ");
  stack1 = helpers._triageMustache.call(depth0, "maxRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" of ");
  stack1 = helpers._triageMustache.call(depth0, "modelLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>\n<div class=\"row\">\n	");
  stack1 = helpers.each.call(depth0, "place", "in", "arrangedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"row\">\n	<a class=\"thumbnail\">More <span class=\"glyphicon glyphicon-arrow-down\"></span></a>\n</div>");
  return buffer;
  
});
