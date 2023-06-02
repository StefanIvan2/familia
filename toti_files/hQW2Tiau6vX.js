;/*FB_PKG_DELIM*/

__d("useEventActionLoggerParams",["CometRouteParams","EventCometActionLoggerUtils","react","recoverableViolation","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo,i={event_action_history:[]};function j(a,b,c){var e,f=typeof a.acontext==="string"?a.acontext:null,g=typeof a.notif_t==="string"?a.notif_t:null;f=k(f);if(!((e=f.event_action_history)==null?void 0:e.length)){e=n(a,c);e&&(f=babelHelpers["extends"]({},f,{event_action_history:[{surface:e}]}))}f.ref_notif_type=(a=f.ref_notif_type)!=null?a:g;c=d("EventCometActionLoggerUtils").createForNewSurface(f,b);return[f,c]}function k(a){if(a==null||a==="")return i;var b=null;try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_context string"+a.toString(),"events")}if(b==null)return i;a=b;b=a.action_history;var d=a.event_action_history,e=a.ref,f=a.ref_notif_type;a=a.source;d=(d=d)!=null?d:b;b=[];typeof d==="string"?b=o(d):Array.isArray(d)&&(b=p(d));return{event_action_history:b,ref:e,ref_notif_type:f,source:a}}var l=["google","bing","yahoo"],m={app:"home",gaming:"games_feed",group:"group",groups:"group",marketplace:"marketplace",page:"page",profile:"user_timeline",save:"saved_dashboard",search_results:"search",watch:"video_feed"};function n(a,b){if(a.ref==="notif"||a.notif_id!=null)return"notifications_tab";b=b==null?void 0:b.split(".");b=b!=null&&b.length>=2&&b[0]==="comet"?b[1]:null;if(b!=null&&Object.prototype.hasOwnProperty.call(m,b))return m[b];if(a.ref==="newsfeed")return"newsfeed";b=(b=document.referrer)==null?void 0:(a=b.match(/\/\/[^\/]*?([\w-]+)\.\w+(\/|$)/))==null?void 0:a[1];if(b!=null){if(l.includes(b))return"external_search_engine";if(b!=="facebook")return"external"}return null}function o(a){if(a==="")return[];var b=[];try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_history string"+a.toString(),"events");return b}return p(b)}function p(a){return!Array.isArray(a)?[]:a.filter(function(a){return typeof a==="object"}).map(function(a){var b=a.event_tracking,c=a.extra_data,d=a.mechanism;a=a.surface;return{event_tracking:typeof b==="string"?b:void 0,extra_data:typeof c==="object"?JSON.stringify(c):"",mechanism:typeof d==="string"?d:"unknown",surface:typeof a==="string"?a:"unknown"}})}function a(a){var b=d("CometRouteParams").useRouteParams(),e=c("useRouteReferrer")();return h(function(){return j(b,a,e==null?void 0:e.tracePolicy)},[b,a,e==null?void 0:e.tracePolicy])}g["default"]=a}),98);
__d("SearchCometResultsInterceptContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({hasIntercept:!1,setHasIntercept:c("emptyFunction")});g["default"]=b}),98);
__d("BrowseEntryPointAction",[],(function(a,b,c,d,e,f){a=Object.freeze({BACKGROUND:"BACKGROUND",CAMPUS_DIRECTORY_SEARCH_TILE:"CAMPUS_DIRECTORY_SEARCH_TILE",CELEBRITY_HCM:"CELEBRITY_HCM",CHALLENGE_POST_CTA:"CHALLENGE_POST_CTA",CORRECTION:"CORRECTION",CREATION_IDEAS_FOR_PUBLIC_FIGURES:"CREATION_IDEAS_FOR_PUBLIC_FIGURES",DEADEND_SEARCHES:"DEADEND_SEARCHES",DEEP_LINK:"DEEP_LINK",DEEP_LINK_VOYAGER:"DEEP_LINK_VOYAGER",DYNAMIC_KEYWORD_CHAINING:"DYNAMIC_KEYWORD_CHAINING",ENTITY_ACTION_BAR:"ENTITY_ACTION_BAR",EXPLORE:"EXPLORE",FEED_HASHTAG_CONNECTED_GROUP_CTA:"FEED_HASHTAG_CONNECTED_GROUP_CTA",FEED_INTEREST_BUMPER:"FEED_INTEREST_BUMPER",FEED_INTEREST_IFR:"FEED_INTEREST_IFR",FEED_INTEREST_QP:"FEED_INTEREST_QP",FILTER_LINK:"FILTER_LINK",FILTERS:"FILTERS",FOLLOW_UP_FEED_PIVOT:"FOLLOW_UP_FEED_PIVOT",GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD:"GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD",GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS:"GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS",GROUP_MALL_HASHTAG_CREATE_POST_CTA:"GROUP_MALL_HASHTAG_CREATE_POST_CTA",GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG:"GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG",GROUP_POST_HASHTAG_FOOTER:"GROUP_POST_HASHTAG_FOOTER",GROUP_TOPIC_TAB_HASHTAG:"GROUP_TOPIC_TAB_HASHTAG",GROUPS_HSCROLL_SUGGESTION_CARD:"GROUPS_HSCROLL_SUGGESTION_CARD",GROUPS_INTEREST:"GROUPS_INTEREST",HASHTAG:"HASHTAG",HASHTAG_CTA:"HASHTAG_CTA",LOCAL_SEARCH_LOCATION_UPSELL_REFRESH:"LOCAL_SEARCH_LOCATION_UPSELL_REFRESH",LOCATION_PIVOT:"LOCATION_PIVOT",MAP:"MAP",MUSIC_ARTIST_PMV:"MUSIC_ARTIST_PMV",MUSIC_ARTIST_POST:"MUSIC_ARTIST_POST",MUSIC_ARTIST_QP:"MUSIC_ARTIST_QP",NULLSTATE_ALERT:"NULLSTATE_ALERT",PAGE_CATEGORY:"PAGE_CATEGORY",PHOTO_STREAM:"PHOTO_STREAM",PHOTOS_MODULE_PIVOT:"PHOTOS_MODULE_PIVOT",PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT:"PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT",PLACES_HCM_TO_SET_SEARCH_PIVOT:"PLACES_HCM_TO_SET_SEARCH_PIVOT",PLACES_MODULE_PIVOT:"PLACES_MODULE_PIVOT",POST_CHAINING:"POST_CHAINING",QUERYLESS_CONTAINER:"QUERYLESS_CONTAINER",QUICK_PROMOTION:"QUICK_PROMOTION",REFERRAL_GROUP_POST_MALL_DD_CTA:"referral_group_post_mall_dd_cta",RELATED_HASHTAGS:"RELATED_HASHTAGS",RELATED_PUBLISHER_CUE:"RELATED_PUBLISHER_CUE",RELATED_SEARCHES:"RELATED_SEARCHES",RELATED_SEARCHES_EXPLORE:"RELATED_SEARCHES_EXPLORE",SEARCH_BOX:"SEARCH_BOX",SEARCH_INTERCEPT:"SEARCH_INTERCEPT",SEE_MORE:"SEE_MORE",SERP_NULL_STATE_CLEAR_FILTERS:"SERP_NULL_STATE_CLEAR_FILTERS",SERP_NULL_STATE_SEARCH_GLOBAL:"SERP_NULL_STATE_SEARCH_GLOBAL",SERP_TAB:"SERP_TAB",SETTINGS:"SETTINGS",SPORTS_MODULE:"SPORTS_MODULE",SUBTOPIC_PIVOTS:"SUBTOPIC_PIVOTS",SUGGESTED_SEARCH_CUE:"SUGGESTED_SEARCH_CUE",SWIPE_LEFT:"SWIPE_LEFT",SWIPE_RIGHT:"SWIPE_RIGHT",SYMT_PAGES:"SYMT_PAGES",TOPIC_DEEP_DIVE_API:"TOPIC_DEEP_DIVE_API",TRENDING:"TRENDING",UNKNOWN__DO_NOT_USE:"UNKNOWN__DO_NOT_USE",VIDEO_APP:"VIDEO_APP",VOICE:"VOICE",WATCH_NULLSTATE_TOPICS:"WATCH_NULLSTATE_TOPICS",WEBVIEW_SUGGESTION_CARD:"WEBVIEW_SUGGESTION_CARD",WORK_KNOWLEDGE_SERP:"WORK_KNOWLEDGE_SERP",WORKPLACE_GROUP_POPULAR_HASHTAGS:"WORKPLACE_GROUP_POPULAR_HASHTAGS",WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE:"WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE",WORKPLACE_TRENDING_HASHTAGS:"WORKPLACE_TRENDING_HASHTAGS",WORKPLACE_WATCH:"WORKPLACE_WATCH"});f["default"]=a}),66);
__d("extractEntrypointData",["BrowseEntryPointAction","SearchCometInterestsDeepDiveUtil"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=b.__epa__;b=b.__eps__;e=typeof e==="string"?c("BrowseEntryPointAction")[e]:null;a=a!=null?d("SearchCometInterestsDeepDiveUtil").getHashtagTag(a):null;e==null&&a!=null&&(e="HASHTAG");a=typeof b==="string"?b:null;return{entryPointAction:e,entryPointSurface:a}}g["default"]=a}),98);
__d("searchCometResultsSpellerLogEvent",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("ODS").__setRef("searchCometResultsSpellerLogEvent");function a(a){h.onReady(function(b){b.bumpEntityKey(4154,"search_browse_logging",a,1)})}g["default"]=a}),98);
__d("SearchResultPageLoggingResultsLoadedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744353");b=d("FalcoLoggerInternal").create("search_result_page_logging_results_loaded",a);e=b;g["default"]=e}),98);
__d("useSearchCometResultsResultsLoadedLogger",["CometRouteParams","InteractionTracing","SearchResultPageLoggingResultsLoadedFalcoEvent","extractEntrypointData","gkx","react","searchCometResultsSpellerLogEvent"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect,i=new Set();function a(a){var b=a.entryPointScope,e=a.filterType,f=a.loggingUnitID,g=a.query,j=a.sessionID,k=a.typeaheadSessionID;a=d("CometRouteParams").useRouteParams();var l=a.__epa__;a=c("extractEntrypointData")(g,a);var m=a.entryPointAction,n=a.entryPointSurface;h(function(){if(f==null||i.has(j))return;l==="CORRECTION"&&c("searchCometResultsSpellerLogEvent")("alert_ref_dym_link");i.add(j);c("InteractionTracing").getPendingInteractions().forEach(function(a){a.addAnnotation("comet_search_results_session_id",j)});var a={common:{logging_unit_id:f,session_id:j,timestamp:Date.now().toString(),typeahead_sid:k},entry_point_action:m,entry_point_scope:b,entry_point_surface:n,filter_type:e,query:g};c("SearchResultPageLoggingResultsLoadedFalcoEvent").logImmediately(function(){return a})},[l,m,b,n,e,f,g,j,k])}g["default"]=a}),98);
__d("XCometEventsExploreControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/explore/{location_name}/{location_id}/{?time}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);