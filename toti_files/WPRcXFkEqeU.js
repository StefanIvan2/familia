;/*FB_PKG_DELIM*/

__d("SearchCometResultsInitialResultsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6217557618325997"}),null);
__d("SearchCometResultsShowUserAvailability.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return!c("gkx")("5997")&&!c("gkx")("6013")}};g["default"]=a}),98);
__d("SearchCometResultsInitialResultsQuery$Parameters",["GroupsCometDelayCheckBlockedUsers.relayprovider","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","SearchCometResultsInitialResultsQuery_facebookRelayOperation","SearchCometResultsShowUserAvailability.relayprovider","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("SearchCometResultsInitialResultsQuery_facebookRelayOperation"),metadata:{},name:"SearchCometResultsInitialResultsQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__SearchCometResultsShowUserAvailabilityrelayprovider:b("SearchCometResultsShowUserAvailability.relayprovider"),__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider:b("GroupsCometDelayCheckBlockedUsers.relayprovider"),__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("SearchCometResultsDefaultQueryVariables",[],(function(a,b,c,d,e,f){"use strict";a={count:5};f["default"]=a}),66);
__d("SearchCometResultsBase.entrypoint",["Base64","SearchCometResultsDefaultQueryVariables","SearchCometResultsInitialResultsQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.passthroughProps,e=a.routeParams,f=a.routeProps,g=f.callsite,j=f.decrypted_bqf_title,k=f.encoded_server_defined_params,l=f.entity_id,m=f.experience_type,n=f.fetch_filters;f=f.render_location;a=a.timeSpentMetaData;var o=e.__hcr__,p=e.__stsd__,q=e.__tsid__,r=e.filters,s=e.q,t=e.spell,u=e.watch_config;a=a==null?void 0:(a=a.session_ids)==null?void 0:a.search_sid;s=typeof s==="string"?s:null;if(j!=null){var v;s=(v=s)!=null?v:j}else e.hashtag!=null&&(s="#"+e.hashtag);v=typeof q==="string"?String(q):null;j=t==="1";e={};if(r!=null){e=(q=h(r))!=null?q:{}}t=i(e);r=null;if(o!=null)try{r=JSON.parse(c("Base64").decode(o))}catch(a){}q=null;if(p!=null)try{q=JSON.parse(c("Base64").decode(p))}catch(a){}e=null;if(u!=null)try{o=JSON.parse(c("Base64").decode(u));p=o.watch_serp_type;e={watch_serp_type:p}}catch(a){}u=m;o=0;p={encoded_server_defined_params:k,fbid:l,type:u};l={callsite:g,config:{exact_match:j,high_confidence_config:r,intercept_config:(m=b==null?void 0:b.intercept_config)!=null?m:null,sts_disambiguation:q,watch_config:e},context:{bsid:a,tsid:v},experience:p,filters:t,text:(k=s)!=null?k:""};g={options:{fetchPolicy:"store-or-network"},parameters:c("SearchCometResultsInitialResultsQuery$Parameters"),variables:babelHelpers["extends"]({},c("SearchCometResultsDefaultQueryVariables"),{allow_streaming:!1,args:l,cursor:null,feedbackSource:23,fetch_filters:n,renderLocation:(u=f)!=null?u:"search_results_page",scale:d("WebPixelRatio").get(),stream_initial_count:o,useDefaultActor:!1})};return{queries:{searchQuery:g}}}function h(a){try{return JSON.parse(c("Base64").decode(a))}catch(a){return null}}function i(a){return Object.keys(a).length===0?[]:Object.keys(a).map(function(b){return a[b]})}g.getPreloadProps=a}),98);
__d("SearchCometGlobalSearchDefaultTabRoot.entrypoint",["JSResourceForInteraction","SearchCometResultsBase.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:d("SearchCometResultsBase.entrypoint").getPreloadProps,root:c("JSResourceForInteraction")("SearchCometGlobalSearchDefaultTabRoot.react").__setRef("SearchCometGlobalSearchDefaultTabRoot.entrypoint")};g["default"]=a}),98);