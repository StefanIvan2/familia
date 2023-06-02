;/*FB_PKG_DELIM*/

__d("useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],b={alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:a,storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorOnRowInputMismatchEffect_renderer",selections:[b,{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"selected_row_override",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[b],storageKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}}();e.exports=a}),null);
__d("useCometPrivacySelectorPushView_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorPushView_scope",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorCanOpenSelector_scope"},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEditableQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9491559780885739"}),null);
__d("CometPrivacySelectorEditable_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},c=[b,{kind:"Variable",name:"selected_override",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],d={alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null},f=[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],g={alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:f,storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"explanation",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"explanation_with_tag_expansion",storageKey:null},l={kind:"Variable",name:"scale",variableName:"scale"},m=[{kind:"Literal",name:"icon_purpose",value:"OPTION_LIST"},b,l],n={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},r={alias:null,args:m,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[n,o,p,q,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"info_type",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null};n=[n,o,p,q];o=[h,a];return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"CometPrivacySelectorEditable_renderer$includePickerData"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEditable_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEditable_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorEditable_renderer$normalization",selections:[a,{alias:"scope",args:c,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[d,e],storageKey:null},{kind:"InlineFragment",selections:[g,{alias:"scope",args:c,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"selected_row_override",plural:!1,selections:f,storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[g,a],storageKey:null}],storageKey:null},{alias:null,args:[b,{kind:"Literal",name:"supported",value:["PrivacyScopeCometButtonEntryPointRenderer","PrivacyScopeCometComposerButtonEntryPointRenderer","PrivacyScopeCometIconEntryPointRenderer","PrivacyScopeCometLabelEntryPointRenderer","PrivacyScopeCometToggleEntryPointRenderer","PrivacyScopeCometLeftRailButtonEntryPointRenderer"]}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometComposerPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointIcon_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLabel_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLabelEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointToggle_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$localPrivacyRow",variableName:"CometPrivacySelectorEditable_renderer$localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$renderLocation",variableName:"CometPrivacySelectorEditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$tags",variableName:"CometPrivacySelectorEditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLeftRailButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLeftRailButtonEntryPointRenderer",abstractKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"},{condition:"CometPrivacySelectorEditable_renderer$includePickerData",kind:"Condition",passingValue:!0,selections:[{alias:null,args:c,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_save_on_select",storageKey:null},d,{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacySelectorSimpleHeaderRenderer"]}],concreteType:null,kind:"LinkedField",name:"header_renderer",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{args:null,documentName:"CometPrivacySelectorPicker_scope",fragmentName:"CometPrivacySelectorPickerHeader_header",fragmentPropName:"header",kind:"ModuleImport"}],type:"PrivacySelectorSimpleHeaderRenderer",abstractKey:null}],storageKey:'header_renderer(supported:["PrivacySelectorSimpleHeaderRenderer"])'},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"options",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_selected",storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacyOptionBasicOptionRenderer","PrivacyOptionFullCustomOptionRenderer","PrivacyOptionSavedCustomOptionRenderer","PrivacyOptionLockedProfileDisabledOptionRenderer","PrivacyOptionRestrictedAudienceOptionRenderer"]}],concreteType:null,kind:"LinkedField",name:"renderer",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"option",plural:!1,selections:[i,j,k,r,a,s,t,g],storageKey:null}],type:"PrivacyOptionBasicOptionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"option",plural:!1,selections:[{alias:null,args:m,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:n,storageKey:null},i,j,k,a,t,g],storageKey:null}],type:"PrivacyOptionFullCustomOptionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"saved_custom_type",storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"option",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"included_members",plural:!0,selections:o,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"excluded_members",plural:!0,selections:o,storageKey:null},a,i,j,k,r,s,t,g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dialog_title",storageKey:null}],type:"PrivacyOptionSavedCustomOptionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"option",plural:!1,selections:[r,i,j,k,s,t,g,a],storageKey:null}],type:"PrivacyOptionLockedProfileDisabledOptionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"option",plural:!1,selections:[a,g],storageKey:null}],type:"PrivacyOptionRestrictedAudienceOptionRenderer",abstractKey:null}],storageKey:'renderer(supported:["PrivacyOptionBasicOptionRenderer","PrivacyOptionFullCustomOptionRenderer","PrivacyOptionSavedCustomOptionRenderer","PrivacyOptionLockedProfileDisabledOptionRenderer","PrivacyOptionRestrictedAudienceOptionRenderer"])'},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:"trigger_icon_image",args:[{kind:"Literal",name:"icon_purpose",value:"TRIGGER"},b,l],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:n,storageKey:null}],storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_in_locked_profile_mode",storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacySelectorDefaultPrivacyFooterRenderer"]}],concreteType:null,kind:"LinkedField",name:"footer_renderer",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{args:null,documentName:"CometPrivacySelectorPickerFooter_scope",fragmentName:"CometDefaultPrivacySelectorPickerFooter_footer",fragmentPropName:"footer",kind:"ModuleImport"}],type:"PrivacySelectorDefaultPrivacyFooterRenderer",abstractKey:null}],storageKey:'footer_renderer(supported:["PrivacySelectorDefaultPrivacyFooterRenderer"])'}],storageKey:null},g]}]}}();e.exports=a}),null);
__d("CometPrivacySelectorEditableQuery.graphql",["CometPrivacySelectorEditable_renderer$normalization.graphql","CometPrivacySelectorEditableQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"id"},c={defaultValue:!1,kind:"LocalArgument",name:"includePickerData"},d={defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},e={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g={defaultValue:null,kind:"LocalArgument",name:"tags"},h=[{kind:"Variable",name:"id",variableName:"id"}];return{fragment:{argumentDefinitions:[a,c,d,e,f,g],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEditableQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"includePickerData",variableName:"includePickerData"},{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}],kind:"FragmentSpread",name:"CometPrivacySelectorEditable_renderer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,e,f,g,a],kind:"Operation",name:"CometPrivacySelectorEditableQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:[{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$includePickerData",variableName:"includePickerData"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$tags",variableName:"tags"}],fragment:b("CometPrivacySelectorEditable_renderer$normalization.graphql"),kind:"FragmentSpread"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("CometPrivacySelectorEditableQuery_facebookRelayOperation"),metadata:{},name:"CometPrivacySelectorEditableQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometPrivacySelectorEditable_renderer.graphql",["CometPrivacySelectorEditableQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"tags",variableName:"tags"},c=[{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},a];return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"includePickerData"},{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{kind:"RootArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:b("CometPrivacySelectorEditableQuery.graphql"),identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"CometPrivacySelectorEditable_renderer",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer"},{args:c,kind:"FragmentSpread",name:"useCometPrivacySelectorOnRowInputMismatchEffect_renderer"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:c,kind:"FragmentSpread",name:"CometPrivacySelectorEntryPointMatchContainer_renderer"},{condition:"includePickerData",kind:"Condition",passingValue:!0,selections:[{args:c,kind:"FragmentSpread",name:"CometPrivacySelectorPickerContainer_renderer"}]},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},a],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorPushView_scope"},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null}],storageKey:null}],type:"PrivacyScopeEditableRenderer",abstractKey:null}}();e.exports=a}),null);
__d("CometUnavailableFeature.react",["fbt","CometTooltip.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.children;return i.jsx("div",{className:"x1h6gzvc x1n2onr6 x1ja2u2z x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j",children:i.jsxs(c("CometTooltip.react"),{position:"above",tooltip:h._("__JHASH__FSzHKYNMOBS__JHASH__"),children:[i.jsx("div",{className:"x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x1vjfegm"}),i.jsx("div",{className:"x47corl x1ja2u2z x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j",children:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeatureKillswitch.react",["CometUnavailableFeature.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,d=a.enableFeature;a=a.fallback;return d?b:h.jsx(c("CometUnavailableFeature.react"),{children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorPushView.entrypoint",["CometPrivacySelectorPickerContainer.entrypoint","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{entryPoints:{containerEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("CometPrivacySelectorPickerContainer.entrypoint"),entryPointParams:a})}}},root:c("JSResourceForInteraction")("CometPrivacySelectorPushView.react").__setRef("CometPrivacySelectorPushView.entrypoint")};g["default"]=a}),98);
__d("useCometPrivacySelectorOnRowInputMismatchEffect",["CometPrivacySelectorContext","CometRelay","PrivacyRowInput","react","useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useContext,j=e.useEffect,k=e.useRef;function a(a,e,f){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql"),a);var g=a.scope,m=i(c("CometPrivacySelectorContext")),n=m[0].localPrivacyRow;m=m[1];var o=k(m);o.current=m;var p=k(e);p.current=e;var q=d("PrivacyRowInput").usePrivacyRowInput(g==null?void 0:g.selected_row_override),r=d("PrivacyRowInput").usePrivacyRowInput(a.privacy_row_input),s=d("PrivacyRowInput").usePrivacyRowInput(g==null?void 0:(m=g.selected_option)==null?void 0:m.privacy_row_input);j(function(){if(f)return;var a=n!==null&&l(n,q,s),b=l(null,n,q)&&d("PrivacyRowInput").arePrivacyRowInputsEqual(r,s);if(a||b)return;a=n!==null&&q===null&&l(n,r,s);if(a){o.current({localPrivacyRow:null,type:"setLocalPrivacyRow"});return}return p.current()},[q,s,f,n,r])}function l(a,b,c){return d("PrivacyRowInput").arePrivacyRowInputsEqual(a,b)&&d("PrivacyRowInput").arePrivacyRowInputsEqual(a,c)}g["default"]=a}),98);
__d("useCometPrivacySelectorOnTagsChangedEffect",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function j(a,b){if(a==null&&b==null)return!0;if(a==null||b==null)return!1;if(a.length!==b.length)return!1;var c=new Set(b);return a.every(function(a){return c.has(a)})}function a(a,b){var c=i(b);c.current=b;var d=i(a);h(function(){if(!j(d.current,a))return c.current(function(){d.current=a})},[a])}g["default"]=a}),98);
__d("useCometPrivacySelectorPushView",["fbt","CometPlaceholder.react","CometPrivacySelectorPushView.entrypoint","CometProgressIndicator.react","CometRelay","qpl","react","useCometInteractionTracing","useCometPrivacySelectorCanOpenSelector","useCometPrivacySelectorPushView_scope.graphql","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useMemo,m=e.useRef;function a(a,e,f,g){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useCometPrivacySelectorPushView_scope.graphql"),a);var n=a==null?void 0:a.privacy_write_id,o=c("useCometPrivacySelectorCanOpenSelector")(a),p=m(!1),q=e.pushPage,r=(a=e.title)!=null?a:h._("__JHASH__-JQsLQLzBmp__JHASH__"),s=c("useCometInteractionTracing")(c("qpl")._(30605326,"2342"),"responsive","INTERACTION"),t=c("useCometRelayEntrypointContextualEnvironmentProvider")(),u=k(function(){if(n==null||q==null)return;s(function(a){a.onComplete(function(){p.current?a.addMetadata("revisit",1):p.current=!0});var b=d("CometRelay").loadEntryPoint(t,c("CometPrivacySelectorPushView.entrypoint"),{localPrivacyRow:f==null?void 0:f.localPrivacyRow,privacyWriteID:n,renderLocation:e.renderLocation,tags:e.tags});q(function(a){a=a.onReturn;e.onBeforePushPage&&e.onBeforePushPage(a);return j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx("div",{className:"x6s0dn4 x78zum5 x1egiwwb xl56j7k",children:j.jsx(c("CometProgressIndicator.react"),{})}),children:j.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:b,props:babelHelpers["extends"]({dispatch:g,onClose:a,privacyWriteID:n,state:f},e)})})},{onBack:function(a){g&&g({localPrivacyRow:null,type:"setLocalPrivacyRow"});return a},title:r})})},[g,t,e,n,q,f,r,s]);return l(function(){return o?u:null},[o,u])}g["default"]=a}),98);
__d("CometPrivacySelectorEditable.react",["CometFeatureKillswitch.react","CometPrivacySelectorContext","CometPrivacySelectorEditable_renderer.graphql","CometPrivacySelectorEntryPointMatchContainer.react","CometRelay","WebPixelRatio","emptyFunction","killswitch","react","unrecoverableViolation","useCometPrivacySelectorDialog","useCometPrivacySelectorNotifyPrivacyOnInitEffect","useCometPrivacySelectorOnRowInputMismatchEffect","useCometPrivacySelectorOnTagsChangedEffect","useCometPrivacySelectorPushView"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useMemo,m=e.useRef,n=e.useState,o=e.useTransition;function p(a){return a==null?void 0:a.filter(function(a){return!isNaN(a)})}function a(a){var e=a.onPrivacyChange,f=a.onPrivacyChangeStart,g=a.renderer,q=babelHelpers.objectWithoutPropertiesLoose(a,["onPrivacyChange","onPrivacyChangeStart","renderer"]);a=q.pushPage;var r=q.renderLocation,s=q.tags;s=p(s);g=d("CometRelay").useRefetchableFragment(h!==void 0?h:h=b("CometPrivacySelectorEditable_renderer.graphql"),g);var t=g[0],u=g[1],v=t.id;g=t.scope;var w=k(c("CometPrivacySelectorContext")),x=w[0];w=w[1];var y=x.localPrivacyRow;c("useCometPrivacySelectorNotifyPrivacyOnInitEffect")(t,y==null?e:null);var z=o(),A=z[0],B=z[1];z=n(!1);var C=z[0],D=z[1],E=m(!1);z=C||A||E.current;function F(a,b){a===void 0&&(a=null);if(v==null)return;var c={id:v,includePickerData:!0,localPrivacyRow:b,renderLocation:r,scale:d("WebPixelRatio").get(),tags:s},e=b?"store-and-network":"network-only";B(function(){u(c,{fetchPolicy:e,onComplete:function(){E.current=!1,a==null?void 0:a()}})})}var G=j(function(a){D(!0),f&&f(a)},[f]),H=m(F);H.current=F;var I=j(function(a){a.type==="success"&&H.current(null,a.__newLocalPrivacyRow),D(!1),e&&e(a)},[e]),J=function(a){return F(a,y)};c("useCometPrivacySelectorOnTagsChangedEffect")(s,J);c("useCometPrivacySelectorOnRowInputMismatchEffect")(t,J,C||A);J=l(function(){return babelHelpers["extends"]({},q,{onPrivacyChange:I,onPrivacyChangeStart:G})},[q,I,G]);if(g==null)throw c("unrecoverableViolation")("Failed to render privacy selector. No scope was received.","comet_privacy_selector");C=g.can_viewer_edit;A=g.privacy_write_id;if(C!==!0)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector that the user cannot edit","comet_privacy_selector");if(A==null)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector without a write ID","comet_privacy_selector");C=c("useCometPrivacySelectorDialog")(g,J,x,w);A=C[0];C=C[1];g=c("useCometPrivacySelectorPushView")(g,J,x,w);J=c("killswitch")("COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED");x=null;J||(x=a!=null?g:A);a=(w=q.enabled)!=null?w:!0;A=i.jsx(c("CometPrivacySelectorEntryPointMatchContainer.react"),{props:{isEnabled:!J&&a,isSaving:z,onPress:(g=x)!=null?g:c("emptyFunction"),onPrivacyChange:I,onPrivacyChangeStart:G,renderLocation:r,triggerRef:C},renderer:t});return i.jsx(c("CometFeatureKillswitch.react"),{enableFeature:!J,fallback:A,children:A})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("PagesComposerCometInterceptionPluginForLexical_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesComposerCometInterceptionPluginForLexical_page",selections:[{alias:null,args:null,concreteType:"Phone",kind:"LinkedField",name:"all_phones",plural:!0,selections:[{alias:null,args:null,concreteType:"PhoneNumber",kind:"LinkedField",name:"phone_number",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"universal_number",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useMessageButtonCometPagesComposerInterceptionHandler_page"}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesComposerCometInterceptionWhatsAppDeeplinkPluginUtilsForLexical",["CometLexicalGenericEntityNode","Lexical"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(a==null)return!1;var b=!1;a.read(function(){d("Lexical").$nodesOfType(d("CometLexicalGenericEntityNode").CometLexicalGenericEntityNode).forEach(function(a){a.getEntityType()==="PageWhatsAppNumber"&&(b=!0)})});return b}g.isPostWithWhatsAppDeeplinkForLexical=a}),98);
__d("pagesPerformInterceptionForLexical",["FBLogger","LexicalText","PagesComposerCometInterceptionPluginUtils","PagesComposerCometInterceptionWhatsAppDeeplinkPluginUtilsForLexical"],(function(a,b,c,d,e,f,g){"use strict";var h="comet_pages_composer_interception_platform";function a(a,b,e,f,g,i,j,k,l,m,n){var o=(i==null?void 0:i.getEditorState().read(d("LexicalText").$rootTextContent))||"";i=d("PagesComposerCometInterceptionWhatsAppDeeplinkPluginUtilsForLexical").isPostWithWhatsAppDeeplinkForLexical(i==null?void 0:i.getEditorState());var p=function(c){return d("PagesComposerCometInterceptionPluginUtils").handleInterceptionResponse(a,b,e,c,f,o,j,l,m,n)};i=d("PagesComposerCometInterceptionPluginUtils").getVariablesForInterceptionRequest(f,g,a==null?void 0:a.sponsorID,o,i,j,k,p);if(i==null)return;d("PagesComposerCometInterceptionPluginUtils").makeInterceptionRequest(e,i,function(a){c("FBLogger")(h).info(a.message),d("PagesComposerCometInterceptionPluginUtils").sendResponseToPartner(p)},function(a){d("PagesComposerCometInterceptionPluginUtils").receiveGraphQLResponse(a,g,!1,p)})}g["default"]=a}),98);
__d("PagesComposerCometInterceptionPluginForLexical.react",["CometRelay","LexicalText","PagesComposerCometInterceptionPluginForLexical_page.graphql","composerDirtyStateViewStateReducer","pagesPerformInterceptionForLexical","react","useBrandedContentEnforcementInterceptionHandler","useBrandedContentRBCInterceptionHandler","useCallNowPagesComposerInterceptionHandler","useCometRouterDispatcher","useComposerPreSubmitHook","useComposerViewStateDispatcher","useComposerViewStateReducer","useEventCometPagesComposerInterceptionHandler","useMarketplaceVerticalsPagesComposerInterceptionHandler","useMessageButtonCometPagesComposerInterceptionHandler","useMessagingCometPagesComposerInterceptionHandler","useOffersCometPagesComposerInterceptionHandler","useVolunteeringCometPagesComposerInterceptionHandler","useWhatsAppCometPagesComposerInterceptionHandler","useWhatsAppDeeplinkCometPagesComposerInterceptionHandler","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a){var e,f=a.boostAfterPosting,g=a.brandedContentData,i=a.callNowMetadata,j=a.interceptionPluginKeyForLexical,k=a.isBoostWhatsAppPostToggleOn,l=a.isGetMessagesPost,m=a.isGetWhatsAppMessagePost,n=a.lexicalEditor,o=a.mediaAttachments,p=a.pageID,q=a.sessionID,r=a.setBoostAfterPosting;a=a.submitForm;j=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesComposerCometInterceptionPluginForLexical_page.graphql"),j);var s=d("CometRelay").useRelayEnvironment(),t=c("useCometRouterDispatcher")(),u=c("useBrandedContentEnforcementInterceptionHandler")(a),v=c("useBrandedContentRBCInterceptionHandler")(a),w=c("useCallNowPagesComposerInterceptionHandler")(j==null?void 0:(e=j.all_phones)==null?void 0:(e=e[0])==null?void 0:(e=e.phone_number)==null?void 0:e.universal_number,i);e=(n==null?void 0:n.getEditorState().read(d("LexicalText").$rootTextContent))||"";var x=c("useEventCometPagesComposerInterceptionHandler")({pageID:p,sessionID:q,text:e}),y=c("useMessageButtonCometPagesComposerInterceptionHandler")(l,p,q,a,j),z=c("useMessagingCometPagesComposerInterceptionHandler")(l,p,q),A=c("useWhatsAppDeeplinkCometPagesComposerInterceptionHandler")(p,a,q),B=c("useWhatsAppCometPagesComposerInterceptionHandler")(q,p,m,null,f,r,k),C=c("useOffersCometPagesComposerInterceptionHandler")(q),D=c("useMarketplaceVerticalsPagesComposerInterceptionHandler")(p,q),E=c("useVolunteeringCometPagesComposerInterceptionHandler")(p,q,t);c("useComposerViewStateReducer")(c("composerDirtyStateViewStateReducer"));var F=c("useComposerViewStateDispatcher")();function G(a){var b=a.onContinue;a=a.onHalt;c("pagesPerformInterceptionForLexical")(g,F,s,p,q,n,o,"pages_composer_post_button",b,a,{brandedContentEnforcementHandler:u,brandedContentRBCHandler:v,callNowHandler:w,eventsHandler:x,marketplaceVerticalsHandler:D,messageButtonHandler:y,messagingHandler:z,offersHandler:C,volunteeringHandler:E,whatsAppDeeplinkHandler:A,whatsAppHandler:B})}c("useComposerPreSubmitHook")(G);return null}e=c("withComposerViewStatePart")(a,function(a){return{brandedContentData:a.brandedContent,callNowMetadata:a.callNowMetadata,isBoostWhatsAppPostToggleOn:a.isBoostWhatsAppPostToggleOn,isGetMessagesPost:a.isGetMessagesPost,isGetWhatsAppMessagePost:a.isGetWhatsAppMessagePost,lexicalEditor:a.lexicalEditor,mediaAttachments:a.mediaAttachments}});g["default"]=e}),98);