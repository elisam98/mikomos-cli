import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<nav class=\"navbar navbar-default\">\n	<div class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-xs-3 text-left\">\n				");
  stack1 = helpers._triageMustache.call(depth0, "back-button", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"col-xs-6 text-center\">\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application", options) : helperMissing.call(depth0, "link-to", "application", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"col-xs-3 text-right\">\n			</div>\n		</div> \n	</div> \n</nav>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n					<img src=\"assets/images/mikomos_banner.svg\" style=\"height:50px\">\n				");
  }

  stack1 = helpers.unless.call(depth0, "isHome", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"container\">\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<span style=\"display:block; height:70px;\"></span>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\">\n	<div class=\"container\">\n		<p class=\"navbar-text\">&copy; 2014 Eli Samuel</p>\n	</div>\n</nav>");
  return buffer;
  
});