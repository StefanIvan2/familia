;/*FB_PKG_DELIM*/

__d("CometProfilePlusLikeMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4867271226642619"}),null);
__d("CometProfilePlusLikeMutation.graphql",["CometProfilePlusLikeMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d=[{kind:"Literal",name:"action_type",value:"LIKE"}],e={args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"},f=[{kind:"Literal",name:"action_type",value:"FOLLOWING_STATUS"}],g={alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"is_viewer_fan",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},l={alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},o={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometProfilePlusLikeMutation",selections:[{alias:null,args:c,concreteType:"PageLikeResponsePayload",kind:"LinkedField",name:"page_like",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_plus_for_delegate_page",plural:!1,selections:[{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[e],storageKey:'profile_action(action_type:"LIKE")'},{alias:"following_status",args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[e,g],storageKey:'profile_action(action_type:"FOLLOWING_STATUS")'}],storageKey:null},h,i],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometProfilePlusLikeMutation",selections:[{alias:null,args:c,concreteType:"PageLikeResponsePayload",kind:"LinkedField",name:"page_like",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_plus_for_delegate_page",plural:!1,selections:[{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[j,k,l,m,n,o],storageKey:'profile_action(action_type:"LIKE")'},{alias:"following_status",args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[j,k,l,m,n,o,g],storageKey:'profile_action(action_type:"FOLLOWING_STATUS")'},m],storageKey:null},h,i,m],storageKey:null}],storageKey:null}]},params:{id:b("CometProfilePlusLikeMutation_facebookRelayOperation"),metadata:{},name:"CometProfilePlusLikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometProfilePlusLikeMutation",["CometProfilePlusLikeMutation.graphql","CometRelay","GraphQLFanFBPageActionOriginValueHackEnum","ProfileActionFollowingMutationUtils","WebPixelRatio","getJSEnumSafe"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometProfilePlusLikeMutation.graphql");function a(a,b,e,f,g){g=c("getJSEnumSafe")(c("GraphQLFanFBPageActionOriginValueHackEnum"),g);d("CometRelay").commitMutation(a,{mutation:i,optimisticResponse:{page_like:{page:{id:b,is_viewer_fan:!0,profile_plus_for_delegate_page:{following_status:babelHelpers["extends"]({},d("ProfileActionFollowingMutationUtils").getOptimisticFollowingActionForSubscriptionStatus("REGULAR_FOLLOW",e),{is_active:!1}),id:e,profile_action:babelHelpers["extends"]({},d("ProfileActionFollowingMutationUtils").getOptimisticLikeActionForIsViewerFan(!0,e))},subscribe_status:"IS_SUBSCRIBED"}}},variables:{input:{is_tracking_encrypted:f!=null,page_id:b,source:g,tracking:f},scale:d("WebPixelRatio").get()}})}g.profilePlusLikeCommitMutationAction=a}),98);
__d("EventCometGuestlistDetailsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5853808714678795"}),null);