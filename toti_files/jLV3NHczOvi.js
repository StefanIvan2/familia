;/*FB_PKG_DELIM*/

__d("CometVideoHomeVideoLink_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoLink_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canonical_uri_with_fallback",storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CatalogCtaClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846168");b=d("FalcoLoggerInternal").create("catalog_cta_click",a);e=b;g["default"]=e}),98);
__d("CatalogCtaImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846169");b=d("FalcoLoggerInternal").create("catalog_cta_impression",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesContentThumbnailClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846172");b=d("FalcoLoggerInternal").create("show_surfaces_content_thumbnail_click",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesContentThumbnailImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846173");b=d("FalcoLoggerInternal").create("show_surfaces_content_thumbnail_impression",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesEpisodeSaveFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846174");b=d("FalcoLoggerInternal").create("show_surfaces_episode_save",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesEpisodeUnsaveFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846175");b=d("FalcoLoggerInternal").create("show_surfaces_episode_unsave",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesShowSeasonPickedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846176");b=d("FalcoLoggerInternal").create("show_surfaces_show_season_picked",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesSocialContextImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1846177");b=d("FalcoLoggerInternal").create("show_surfaces_social_context_impression",a);e=b;g["default"]=e}),98);
__d("ShowSurfacesLoggingUtil",["CatalogCtaClickFalcoEvent","CatalogCtaImpressionFalcoEvent","ShowSurfacesContentThumbnailClickFalcoEvent","ShowSurfacesContentThumbnailImpressionFalcoEvent","ShowSurfacesEpisodeSaveFalcoEvent","ShowSurfacesEpisodeUnsaveFalcoEvent","ShowSurfacesShowSeasonPickedFalcoEvent","ShowSurfacesSocialContextImpressionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e,f,g,h,i,j){var k={entrypoint_surface:b,event_data:f,network_page_id:a,player_origin:i,player_suborigin:j,surface:d,video_id:g,video_list_id:h};switch(e){case"catalog_cta_click":c("CatalogCtaClickFalcoEvent").log(function(){return k});break;case"catalog_cta_impression":c("CatalogCtaImpressionFalcoEvent").log(function(){return k});break;case"show_surfaces_content_thumbnail_click":c("ShowSurfacesContentThumbnailClickFalcoEvent").log(function(){return k});break;case"show_surfaces_content_thumbnail_impression":c("ShowSurfacesContentThumbnailImpressionFalcoEvent").log(function(){return k});break;case"show_surfaces_episode_save":c("ShowSurfacesEpisodeSaveFalcoEvent").log(function(){return k});break;case"show_surfaces_episode_unsave":c("ShowSurfacesEpisodeUnsaveFalcoEvent").log(function(){return k});break;case"show_surfaces_show_season_picked":c("ShowSurfacesShowSeasonPickedFalcoEvent").log(function(){return k});break;case"show_surfaces_social_context_impression":c("ShowSurfacesSocialContextImpressionFalcoEvent").log(function(){return k});break;default:return}}g.log=a}),98);
__d("CometTahoeTracePolicyContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometVideoHomeLiveContext",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");function a(){}c=b.createContext({hasInjectedVideo:!1,heroVideoID:null,hiddenVideoIDs:[],hotswapVideoID:null,setHeroVideoID:a,setHiddenVideoIDs:a,setHotswapVideoID:a,setVideoMuted:a,updateVisibleVideoIDs:a,videoMuted:!0,visibleVideoIDs:{}});g["default"]=c}),98);
__d("CometVideoHomeShowSurfacesLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({entrypoint:"",pageID:null,sectionTypeName:"",surface:""});g["default"]=b}),98);
__d("VideoHomeLoggingFeedAggregationTypeContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("VideoHomeLoggingSectionSubtypeContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("VideoPlayerLoggingExternalLogContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({externalLogID:null,externalLogType:null});g["default"]=b}),98);
__d("CometVideoHomeVideoLink.react",["fbt","CometLink.react","CometRelay","CometTahoeTracePolicyContext","CometVideoHomeLiveContext","CometVideoHomePositionInUnitContext","CometVideoHomeSectionPositionContext","CometVideoHomeShowSurfacesLoggingContext","CometVideoHomeVideoLink_video.graphql","ShowSurfacesLoggingUtil","TetraButton.react","VideoHomeLoggingFeedAggregationTypeContext","VideoHomeLoggingReactionVideoChannelTypeContext","VideoHomeLoggingSectionSubtypeContext","VideoHomeLoggingUpstreamPlayerSourceContext","VideoHomeTypedLoggerLite","VideoPlayerLoggingExternalLogContext","VideoPlayerLoggingSuboriginContext","XCometVideoControllerRouteBuilder","XCometWatchControllerRouteBuilder","cr:1187630","react","useCometTahoeChainingDepth","useInnerMostTrackingCode","usePlayerOriginRouteTracePolicy"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useContext;function a(a){var e=a.buttonProps,f=a.caller,g=a.chainingCursor,m=a.chainingSeedVideoId,n=a.channelEntryPoint,o=a.channelIDOverride,p=a.children,q=a.clickPoint,r=a.display,s=a.extraData,t=a.isFromInterestDestinationPage,u=a.onClick,v=a.openInTahoe;v=v===void 0?!0:v;var w=a.playerOrigin,x=a.preventLocalNavigation,y=a.searchKeyword,z=a.sectionTypeName,A=a.shouldOverlayHeaderOverAttachment;A=A===void 0?!1:A;var B=a.shouldPrefetch;B=B===void 0?!1:B;var C=a.startTimestamp,D=a.tabTypeName,E=a.testid;a.trackingData;E=a.useTrackingCode;E=E===void 0?!1:E;var F=a.video;a=babelHelpers.objectWithoutPropertiesLoose(a,["buttonProps","caller","chainingCursor","chainingSeedVideoId","channelEntryPoint","channelIDOverride","children","clickPoint","display","extraData","isFromInterestDestinationPage","onClick","openInTahoe","playerOrigin","preventLocalNavigation","searchKeyword","sectionTypeName","shouldOverlayHeaderOverAttachment","shouldPrefetch","startTimestamp","tabTypeName","testid","trackingData","useTrackingCode","video"]);F=d("CometRelay").useFragment(i!==void 0?i:i=b("CometVideoHomeVideoLink_video.graphql"),F);var G=(w=w)!=null?w:"video_home",H=l(c("VideoPlayerLoggingSuboriginContext")),I=l(c("VideoHomeLoggingUpstreamPlayerSourceContext")),J=l(c("CometVideoHomeSectionPositionContext")),K=l(c("CometVideoHomePositionInUnitContext"));w=l(c("CometVideoHomeLiveContext"));w=w.heroVideoID;var L=c("usePlayerOriginRouteTracePolicy")(),M=l(c("CometTahoeTracePolicyContext")),N=l(c("VideoHomeLoggingReactionVideoChannelTypeContext")),O=l(c("VideoHomeLoggingFeedAggregationTypeContext")),P=l(c("VideoPlayerLoggingExternalLogContext")),Q=P.externalLogID;P=P.externalLogType;var R=l(c("VideoHomeLoggingSectionSubtypeContext")),S=s==null?void 0:s.view_type;S!=null&&typeof S==="string"&&(R=S);var T=l(c("CometVideoHomeShowSurfacesLoggingContext"));S=d("useCometTahoeChainingDepth").useChainingDepthContext();var U=S.chainingDepthDispatch;S=c("useInnerMostTrackingCode")();m={bypassAutoplaySettings:!0,caller:f,chainingCursor:g,chainingSeedVideoId:m,channelEntryPoint:n,channelID:o,externalLogID:Q,externalLogType:P,feedAggregationType:O,heroVideoID:w,initialTracePolicy:(f=M)!=null?f:L,playerSubOrigin:H,reactionVideoChannelType:N,searchKeyword:y,startTimestamp:(g=C)!=null?g:0,unmute:!0};E&&(m.trackingCode=S);o=(n=F.owner)==null?void 0:n.id;var V=F.id,W=k(function(a){U&&U({type:"INCREMENT"}),c("VideoHomeTypedLoggerLite").log({click_point:q,event:"click",event_target:"video",event_target_id:V,event_target_info:z,extra_data:s,player_origin:G,player_suborigin:H,position_in_unit:K,section_subtype:R,section_video_channel_type:N,tab_type:D,unit_position:J,upstream_player_source:I}),d("ShowSurfacesLoggingUtil").log(T.pageID,T.entrypoint,T.surface,"show_surfaces_content_thumbnail_click",{content_id:V||""},V,null,null,H),t!==null&&t===!0&&c("VideoHomeTypedLoggerLite").log({event:"click",event_target:"subtopic_aggregation_video",event_target_info:z,section_subtype:R,tab_type:D}),u&&u(a)},[U,q,s,u,K,N,R,T.entrypoint,T.pageID,T.surface,H,J,I,V,G,D,z,t]);if(o==null||V==null)return j.jsx(j.Fragment,{children:p});Q=!!F.is_live_streaming;P=F==null?void 0:F.canonical_uri_with_fallback;!v&&!Q&&(b("cr:1187630")!=null?P=b("cr:1187630").getURIBuilder().setString("vanity",o).setInt("video_id",V).setEnum("__so__",H).setEnum("__rv__",N).getURI().toString():P=c("XCometWatchControllerRouteBuilder")==null?void 0:c("XCometWatchControllerRouteBuilder").buildURL({v:V}));w=(O=P)!=null?O:c("XCometVideoControllerRouteBuilder").buildURL({page_token:o,story_token:V});if(e!=null){return j.jsx(c("TetraButton.react"),babelHelpers["extends"]({},e,{"aria-label":h._("__JHASH__FHUl8fOHUrR__JHASH__"),linkProps:{passthroughProps:m,preventLocalNavigation:Boolean(x),traceParams:{navigation_source:(M=q)!=null?M:"null"},url:w},onPress:function(a){e.onPress!=null&&e.onPress(a),W(a)}}))}return j.jsx(c("CometLink.react"),babelHelpers["extends"]({},a,{"aria-label":h._("__JHASH__FHUl8fOHUrR__JHASH__"),color:A?"white":void 0,display:r||"block",href:w,onClick:W,passthroughProps:m,prefetchQueriesOnHover:B,preventLocalNavigation:!!x,testid:void 0,traceParams:{navigation_source:(f=q)!=null?f:"null"},children:p}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeRootContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({autoplay:!0,injectedVideoID:null,isFacebookReferrer:!1,qplInstanceKey:0,renderedInWatchRoot:!1});g["default"]=b}),98);
__d("VideoHomeGlobalSoundContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({muted:!0,setMuted:function(){},setVolume:function(){},volume:1});g["default"]=b}),98);
__d("CometVideoHomeFeedAutoAdvanceAPIContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({advance:function(){},register:function(){},unregister:function(){}});g["default"]=b}),98);
__d("CometVideoHomeLiveUFIContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({renderConfig:"default"});g["default"]=b}),98);
__d("VideoHomeLoggingExternalLogIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("VideoHomeLoggingPermalinkShareIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={permalinkShareID:null};c=a.createContext(b);g["default"]=c}),98);
__d("CometVideoHomeInjectionPortalingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({initialTracePolicy:null,injectedVideoID:null,portableVideoID:null,subOrigin:null});g["default"]=b}),98);
__d("CometVideoHomeUFICommentListRendererRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6852067378154878"}),null);