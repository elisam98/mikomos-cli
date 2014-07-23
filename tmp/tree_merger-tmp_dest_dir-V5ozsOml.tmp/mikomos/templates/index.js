import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n			<h1><span class=\"glyphicon glyphicon-search\"></span> Search</h1>\n			<p>Advanced search of Mikomos</p>\n		");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n			<h1><span class=\"glyphicon glyphicon-list\"></span> Browse</h1>\n			<p>Browse through the list of mikomos.</p>\n		");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			<h1><span class=\"glyphicon glyphicon-refresh\"></span> Sync</h1>\n			<p>Last Update: ");
  stack1 = helpers._triageMustache.call(depth0, "databaseDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n		");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n			<h1><span class=\"glyphicon glyphicon-user\"></span> About</h1>\n			<p>About Mikomos</p>\n		");
  }

  data.buffer.push("<div class=\"row\">\n	<div class=\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3\">\n		<img src=\"assets/images/mikomos_banner.svg\" class=\"img-responsive\">\n	</div>\n</div>\n<div class=\"row\">\n	<div class=\"col-xs-12\">\n		");
  data.buffer.push(escapeExpression((helper = helpers['auto-complete'] || (depth0 && depth0['auto-complete']),options={hash:{
    'search': ("search"),
    'model': ("model.mikomos")
  },hashTypes:{'search': "STRING",'model': "ID"},hashContexts:{'search': depth0,'model': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-complete", options))));
  data.buffer.push("\n	</div>\n</div>\n<p></p>\n<hr>\n<div class=\"row\">\n	<div class=\"col-sm-6 text-center\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default main-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "link-to", "search", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<div class=\"col-sm-6 text-center\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default main-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "browse", options) : helperMissing.call(depth0, "link-to", "browse", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<div class=\"col-sm-6 text-center\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default main-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "browse", options) : helperMissing.call(depth0, "link-to", "browse", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<div class=\"col-sm-6 text-center\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default main-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "browse", options) : helperMissing.call(depth0, "link-to", "browse", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>");
  return buffer;
  
});
