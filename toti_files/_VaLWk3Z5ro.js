;/*FB_PKG_DELIM*/

__d("PagesCometPageLink_page$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometPageLink_page$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"comet_url",args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}]};e.exports=a}),null);
__d("PagesCometPageLink_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometPageLink_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"comet_url",args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometPageLink.react",["CometDangerouslySuppressInteractiveElementsContext","CometHovercardLinkContext","CometLink.react","CometRelay","PagesCometLinkContext","PagesCometPageLink_page.graphql","XCometVideoHomePlaylistControllerRouteBuilder","react","useShowHovercardsOnClick"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;function a(a){var e=a.children,f=a.color,g=a.onClick;a=a.page;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometPageLink_page.graphql"),a);var k=a.id,l=j(c("PagesCometLinkContext"));l=l.shouldHostInWatch;var m=c("useShowHovercardsOnClick")(),n=j(c("CometHovercardLinkContext"));n=n.isRenderedInHovercard;l=l&&k!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:k,tab:"home"}):a.comet_url;return i.jsx(c("CometDangerouslySuppressInteractiveElementsContext").Provider,{value:n===!1&&m,children:i.jsx(c("CometLink.react"),{color:f,href:l,onClick:g,children:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);