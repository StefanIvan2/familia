;/*FB_PKG_DELIM*/

__d("MWChatBusinessCTAAdsSenderMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4594831010626708"}),null);
__d("MWChatBusinessCTAAdsSenderMutation.graphql",["MWChatBusinessCTAAdsSenderMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"action_link",variableName:"input"}],kind:"ScalarField",name:"messenger_business_ads_sender",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatBusinessCTAAdsSenderMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatBusinessCTAAdsSenderMutation",selections:c},params:{id:b("MWChatBusinessCTAAdsSenderMutation_facebookRelayOperation"),metadata:{},name:"MWChatBusinessCTAAdsSenderMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("WelcomeMessageSendQPLConstants",["qpl"],(function(a,b,c,d,e,f,g){"use strict";a="welcome_message_send_failed";b="welcome_message_send_success";d="welcome_message_send";e=c("qpl")._(619057412,"608");g.WELCOME_MESSAGE_SEND_FAILED=a;g.WELCOME_MESSAGE_SEND_SUCCESS=b;g.WELCOME_MESSAGE_SEND=d;g.WELCOME_MESSAGE_SEND_QPL_EVENT=e}),98);
__d("useIsActingAsUnderlyingUser",["Actor","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("Actor").useActor(),b=a[0];a[1];a=c("CurrentUser").getID();return b===a}g["default"]=a}),98);
__d("MWChatBusinessCTAAdsSenderMutation",["CometRelay","MWChatBusinessCTAAdsSenderMutation.graphql","QPLUserFlow","WelcomeMessageSendQPLConstants"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatBusinessCTAAdsSenderMutation.graphql");function a(a,b){d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(){c("QPLUserFlow").addPoint(d("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_QPL_EVENT,d("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_SUCCESS),c("QPLUserFlow").endSuccess(d("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_QPL_EVENT)},onError:function(a){c("QPLUserFlow").endFailure(d("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_QPL_EVENT,d("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_FAILED)},variables:{input:b}})}g.sendAds=a}),98);