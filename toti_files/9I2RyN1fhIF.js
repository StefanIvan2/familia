;/*FB_PKG_DELIM*/

__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["getComputedStyle","mergeRefs","react","useCometAriaID","useCometUniqueID","useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useLayoutEffect,j=b.useMemo,k=b.useRef,l=b.useState;function a(a){var b=a.alt,d=a.blur,e=a.height,f=a.previewData,g=a.width,m=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var n=a.height,o=a.width;d=(a=d)!=null?a:1.2;a=c("useCometUniqueID")();var p=c("useSetAttributeRef")("id",a),q="url(#"+a+")",r=c("useSetAttributeRef")("filter",q),s=c("useCometAriaID")("aria-labelledby"),t=s[0],u=t[0];t=t[1];s=s[1];var v=s[0],w=s[1],x=k(null);s=j(function(){return b!=null?c("mergeRefs")(w,x):x},[b,w,x]);var y=l(e!==void 0||n!==void 0||g!==void 0||o!==void 0),z=y[0],A=y[1];i(function(){var a=x.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||n!==void 0||g!==void 0||o!==void 0){A(!0);return}var b=a.style.display,d=c("getComputedStyle")(a);a.style.display="none";A(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=b},[e,f.height,f.width,n,o,g]);return h.jsxs("svg",babelHelpers["extends"]({},m,b!=null?v:null,{height:(y=e)!=null?y:z?void 0:f.height,preserveAspectRatio:"none",ref:s,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(m=g)!=null?m:z?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[b!=null&&h.jsx("title",babelHelpers["extends"]({},u,{ref:t,children:b})),h.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:p,suppressHydrationWarning:!0,children:[h.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),h.jsx("feComponentTransfer",{children:h.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),h.jsx("image",{filter:q,height:f.height,ref:r,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesSuspenseContuxContext",["StoriesConstants","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={cardIndex:d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX,commentCount:0,isFirstCard:!1,isLastCard:!1,isStoryOverlayActive:!1};c=a.createContext(b);g["default"]=c}),98);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h="data:image/jpeg;base64,",i=160,j=162,k=42;function l(a,b){b===void 0&&(b=0);a=atob(a);if(a.length<=3)throw c("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+b);for(var e=0;e<a.length;e++)d[b+e]=a.charCodeAt(e);return d}var m;function n(){m==null&&(m=l("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return m}function a(a){var b=n();try{a=l(a,b.length-3);var d=a[b.length-1],e=a[b.length-3],f=a[b.length-2];if(d>k)throw c("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+k+"."),"comet_infra");if(f>k)throw c("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+k+"."),"comet_infra");a.set(b,0);a[i]=d;a[j]=f;b=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+h+b,height:d,width:f,version:e}}catch(b){a=c("FBLogger")("images_infra");b instanceof Error&&a.catching(b);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}g["default"]=a}),98);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometImage.react","CometRelay","VideoBlurBackgroundContainer_video.graphql","getPreviewDataFromImagePreviewPayload","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={blurryImage:{filter:"x1hedwgd",transform:"x4zgh4k",$$css:!0},image:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",height:"x5yr21d",opacity:"xti2d7y",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},lightBackgroundInLightMode:{backgroundColor:"x2bj2ny",$$css:!0},root:{backgroundColor:"xal61yo",height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};function a(a,e){var f,g=a.children,k=a.lightBackgroundInLightMode,l=a.video;a=a.xstyle;l=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoBlurBackgroundContainer_video.graphql"),l);f=(f=l.preferred_thumbnail)==null?void 0:f.image_preview_payload;var m;if(f!=null){f=c("getPreviewDataFromImagePreviewPayload")(f);f!=null&&(m=i.jsx(c("CometBlurryImagePreview.react"),{className:"x1ey2m1c x9f619 xds687c x5yr21d xti2d7y x10l6tqk x17qophe x13vifvy xh8yej3 x1ja2u2z",previewData:f}))}f=(f=l.preferred_thumbnail)==null?void 0:(l=f.image)==null?void 0:l.uri;m==null&&f!=null&&(m=i.jsx(c("CometImage.react"),{src:f,xstyle:[j.blurryImage,j.image]}));return i.jsxs("div",{className:c("stylex")(j.root,a,k===!0&&j.lightBackgroundInLightMode),ref:e,children:[m,g]})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("CometWatchAndScrollTriggerContextProvider",["CometWatchAndScrollTriggerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo,k=b.useState;function a(a){a=a.children;var b=i(c("CometWatchAndScrollTriggerContext")),d=k(b.isControlShown),e=d[0],f=d[1];d=k(b.isTriggerDisabled);var g=d[0],l=d[1];b=j(function(){return{isControlShown:e,isTriggerDisabled:g,setIsControlShown:f,setIsTriggerDisabled:l}},[e,g]);return h.jsx(c("CometWatchAndScrollTriggerContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ColorUtils",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$"),h=function(a,b){if(a==null)return null;a=a.match(g);if(a==null)return null;a=a.slice(1).map(function(a){return parseInt(a.length==1?a+a:a,16)});if(a.length==4){b==="ARGB"&&a.push(a.shift());return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]/100+")"}return"rgb("+a[0]+","+a[1]+","+a[2]+")"};function a(a){return h(a,"ARGB")}function b(a){return h(a,"RGBA")}f.hexARGBToCSSRGBA=a;f.hexRGBAToCSSRGBA=b}),66);
__d("ProfileCometFeaturedHighlightsEditCollectionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8607182012656054"}),null);
__d("StoriesCommentsSheetOverlayRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6391220417587695"}),null);