(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return w}));var r=n(38),a=n(3),c=n(11),s=n.n(c),i=n(19),o=n(21),u="FOLLOW",l="UNFOLLOW",j="SET_USERS",d="CHENGE_CURRENT_PAGE",f="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",p="TOGGLE_IS_FOLLOWING_PROGRESS",O=function(e){return{type:u,userID:e}},m=function(e){return{type:l,userID:e}},g=function(e){return{type:d,newCurrentPage:e}},h=function(e){return{type:b,isFetching:e}},x=function(e,t){return{type:p,isFetching:e,userID:t}},v=function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(e)),r(h(!0)),n.next=4,Object(o.f)(e,t);case 4:a=n.sent,r(h(!1)),r((s=a.items,{type:j,users:s})),r((c=a.totalCount,{type:f,totalCount:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(n,e,o.c,O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(n,e,o.b,m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function S(e,t,n,r){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={users:[],pageSize:10,totalUsersCount:24,currentPage:1,isFetching:!1,followingIsProgress:[]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id==t.userID?Object(a.a)(Object(a.a)({},e),{},{followed:!0}):e}))});case l:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id==t.userID?Object(a.a)(Object(a.a)({},e),{},{followed:!1}):e}))});case j:return Object(a.a)(Object(a.a)({},e),{},{users:Object(r.a)(t.users)});case d:return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.newCurrentPage});case f:return Object(a.a)(Object(a.a)({},e),{},{totalUsersCount:t.totalCount});case b:return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case p:return Object(a.a)(Object(a.a)({},e),{},{followingIsProgress:t.isFetching?[].concat(Object(r.a)(e.followingIsProgress),[t.userID]):e.followingIsProgress.filter((function(e){return e!=t.userID}))});default:return e}}},131:function(e,t,n){e.exports={footer:"Footer_footer__2pf7n"}},132:function(e,t,n){e.exports={content:"News_content__DVlXq"}},133:function(e,t,n){e.exports={content:"Music_content__2ds-x"}},14:function(e,t,n){e.exports={nav:"NavBar_nav__30leb",item:"NavBar_item__26yVW",activeLink:"NavBar_activeLink__1jYXl"}},168:function(e,t,n){},169:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f}));var r=n(136),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8aab515b-a7ff-412f-94c0-660df0312e47"}}),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},s=function(e){return a.post("follow/".concat(e))},i=function(e){return a.delete("follow/".concat(e))},o=function(){return a.get("auth/me")},u=function(e){return a.get("profile/".concat(e))},l=function(e){return a.get("profile/status/".concat(e))},j=function(e){return a.put("/profile/status",{status:e})},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},f=function(){return a.delete("auth/login")}},24:function(e,t,n){e.exports={content:"Dialogs_content__2LYe-",dialogsItems:"Dialogs_dialogsItems__3lcZS",dialog:"Dialogs_dialog__36ELV",active:"Dialogs_active__3GVtM",MessagesItems:"Dialogs_MessagesItems__2P88K",MessagesElemenst:"Dialogs_MessagesElemenst__1IxmD",MessageInput:"Dialogs_MessageInput__1lh9v",submit:"Dialogs_submit__25aAn",Message:"Dialogs_Message__2GDDs"}},292:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(0),c=n.n(a),s=n(67),i=n.n(s),o=(n(168),n(29)),u=n(30),l=n(32),j=n(31),d=(n(169),n(15)),f=n(9),b=n(14),p=n.n(b),O=n(1),m=function(){return Object(O.jsxs)("nav",{className:p.a.nav,children:[Object(O.jsx)(d.b,{to:"/profile",className:p.a.item,activeClassName:p.a.activeLink,children:"Profile"}),Object(O.jsx)(d.b,{to:"/dialogs",className:p.a.item,activeClassName:p.a.activeLink,children:"Messages"}),Object(O.jsx)(d.b,{to:"/users",className:p.a.item,activeClassName:p.a.activeLink,children:"Users"}),Object(O.jsx)(d.b,{to:"/news",className:p.a.item,activeClassName:p.a.activeLink,children:"News"}),Object(O.jsx)(d.b,{to:"/music",className:p.a.item,activeClassName:p.a.activeLink,children:"Music"}),Object(O.jsx)("br",{}),Object(O.jsx)(d.b,{to:"/settings",className:p.a.item,activeClassName:p.a.activeLink,children:"Settings"}),Object(O.jsx)(d.b,{to:"/login",className:p.a.item,activeClassName:p.a.activeLink,children:"Login"})]})},g=n(131),h=n.n(g),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={time:"Time"},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=new Date,n=e.TotalTime(String(t.getHours())),r=e.TotalTime(String(t.getMinutes())),a=e.TotalTime(String(t.getSeconds()));e.setState({time:"".concat(n,":").concat(r,":").concat(a)})}),1e3)}},{key:"TotalTime",value:function(e){return 1==e.length?"0"+e:e}},{key:"render",value:function(){return Object(O.jsx)("div",{className:h.a.footer,children:this.state.time})}}]),n}(c.a.Component),v=n(132),_=n.n(v),w=function(e){return Object(O.jsx)("div",{className:_.a.content,children:"News"})},S=n(133),y=n.n(S),N=function(e){return Object(O.jsx)("div",{className:y.a.content,children:"Music"})},T=n(128),C=n(129),E=n(24),I=n.n(E),k=function(e){return Object(O.jsxs)(d.b,{to:"/dialogs/".concat(e.id),className:I.a.dialog,children:[" ",e.name," "]})},P=function(e){return Object(O.jsx)("div",{className:I.a.Message,children:e.text})},M=n(41),L=n(42),A=Object(L.a)(10),D=Object(C.a)({form:"messages"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,className:I.a.MessageInput,children:[Object(O.jsx)(T.a,{cols:"30",rows:"3",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",name:"messageText",validate:[L.b,A],component:M.b}),Object(O.jsx)("button",{className:I.a.submit,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),F=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(O.jsx)(k,{name:e.name,id:e.id})})),n=e.dialogsPage.messages.map((function(e){return Object(O.jsx)(P,{text:e.text,id:e.id})}));return Object(O.jsxs)("div",{className:I.a.content,children:[Object(O.jsx)("div",{className:I.a.dialogsItems,children:t}),Object(O.jsxs)("div",{className:I.a.MessagesItems,children:[Object(O.jsx)("div",{className:I.a.MessagesElemenst,children:n}),Object(O.jsx)(D,{onSubmit:function(t){e.sendMessage(t.messageText)}})]})]})},U=n(38),G=n(3),R="SEND_MESSAGE",B="UPDATE_NEW_MESSAGE_TEXT",H={dialogs:[{id:1,name:"Alex"},{id:2,name:"Kristina"},{id:3,name:"Anasteysha"},{id:4,name:"Kate"},{id:5,name:"Victoria"}],messages:[{id:1,text:"Lorem, ipsum."},{id:1,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta."},{id:1,text:"\u0414\u0430\u043b\u0435\u043a\u043e-\u0434\u0430\u043b\u0435\u043a\u043e \u0437\u0430 \u0441\u043b\u043e\u0432\u0435\u0441\u043d\u044b\u043c\u0438 \u0433\u043e\u0440\u0430\u043c\u0438 \u0432 \u0441\u0442\u0440\u0430\u043d\u0435, \u0433\u043b\u0430\u0441\u043d\u044b\u0445 \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0445."}],newMessageText:"Message"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(G.a)(Object(G.a)({},e),{},{newMessageText:"",messages:[].concat(Object(U.a)(e.messages),[{id:6,text:t.messageText}])});case B:return Object(G.a)(Object(G.a)({},e),{},{newMessageText:t.newText});default:return e}},V=n(12),W=n(97),K=n(10),J=Object(K.d)(Object(V.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onMessageChenge:function(t){e(function(e){return{type:B,newText:e}}(t))},sendMessage:function(t){e(function(e){return{type:R,messageText:e}}(t))}}})),W.a)(F),X=n(66),Y=n(71),Z=n.n(Y),q=function(e){return Object(O.jsxs)("div",{className:Z.a.settings,children:[Object(O.jsx)("div",{className:Z.a.settingItem,children:Object(O.jsx)("button",{onClick:function(){e.newScore()},children:"\u041a\u043d\u043e\u043f\u043a\u0430"})}),Object(O.jsx)("div",{className:Z.a.settingvalue,children:e.SettingsScore})]})},Q=Object(V.b)((function(e){return{SettingsScore:e.profilePage.SettingsScore}}),(function(e){return{newScore:function(){e(Object(X.a)())}}}))(q),$=n(11),ee=n.n($),te=n(19),ne=n(21),re=n(49),ae="SET_USER_DATA",ce="LOGOUT_USER",se=function(e,t,n){return{type:ae,data:{id:e,email:t,login:n}}},ie=function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,r,a,c,s;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)();case 2:n=e.sent,r=n.data.data,a=r.login,c=r.id,s=r.email,n.data.resultCode||t(se(c,s,a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},oe={id:null,login:null,email:null,isFetching:!1,isAuth:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(G.a)(Object(G.a)(Object(G.a)({},e),t.data),{},{isAuth:!0});case ce:return Object(G.a)(Object(G.a)({},e),{},{isAuth:!1});default:return e}},le=n(46),je=n.n(le),de=function(e){return Object(O.jsxs)("header",{className:je.a.header,children:[Object(O.jsx)("div",{className:je.a.logo,children:Object(O.jsx)("img",{src:"https://www.webidunya.com/wp-content/uploads/2018/07/logo-tasarim-firmalari.png"})}),Object(O.jsx)("div",{className:je.a.info,children:"Header"}),Object(O.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?e.login.toUpperCase():Object(O.jsx)(d.b,{className:je.a.loginBlock_Item,to:"/login",children:"Login"})})]})},fe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(de,Object(G.a)({},this.props))}}]),n}(c.a.Component),be=Object(V.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{})(fe),pe=n(54),Oe=n.n(pe),me=Object(C.a)({form:"login"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(T.a,{type:"text",placeholder:"Email",component:M.a,name:"email",validate:[L.b]})}),Object(O.jsx)("div",{children:Object(O.jsx)(T.a,{type:"text",placeholder:"Password",component:M.a,name:"password",validate:[L.b]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(T.a,{type:"checkbox",component:M.a,name:"rememberMe"})," remember me"]}),e.error&&Object(O.jsx)("div",{className:Oe.a.formSummatyError,children:e.error}),Object(O.jsx)("button",{children:"Sign up"}),Object(O.jsx)("button",{onClick:e.reset,type:"button",children:"Reset"})]})})),ge=Object(V.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunkCreator:function(e){var t=e.email,n=e.password,r=e.rememberMe;return function(){var e=Object(te.a)(ee.a.mark((function e(a){var c,s;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.g)(t,n,r);case 2:(c=e.sent).data.resultCode?(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(re.a)("login",{_error:s}))):a(ie());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},logoutProfile:function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.h)();case 2:e.sent.data.resultCode||t({type:ce});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),e.isAuth?Object(O.jsx)("button",{onClick:function(){e.logoutProfile()},type:"button",children:"Logout"}):Object(O.jsx)(me,{onSubmit:function(t){e.loginThunkCreator(t)}})]})})),he="SET_INITIALIZED",xe={initialized:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(G.a)(Object(G.a)({},e),{},{initialized:!0});default:return e}},_e=n(89),we=c.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Se=c.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),ye=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentWillMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsx)(d.a,{basename:"/social-network-react",children:Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(be,{}),Object(O.jsx)(m,{}),Object(O.jsx)(c.a.Suspense,{fallback:Object(O.jsx)(_e.a,{}),children:Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(Se,{})}}),Object(O.jsx)(f.b,{path:"/dialogs",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(f.b,{path:"/users",render:function(){return Object(O.jsx)(we,{})}}),Object(O.jsx)(f.b,{path:"/news",render:function(){return Object(O.jsx)(w,{})}}),Object(O.jsx)(f.b,{path:"/music",render:function(){return Object(O.jsx)(N,{})}}),Object(O.jsx)(f.b,{path:"/settings",render:function(){return Object(O.jsx)(Q,{})}}),Object(O.jsx)(f.b,{path:"/login",render:function(){return Object(O.jsx)(ge,{})}})]})}),Object(O.jsx)(x,{})]})})}):Object(O.jsx)(_e.a,{})}}]),n}(c.a.Component),Ne=Object(V.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ie());Promise.all([t]).then((function(){e({type:he})}))}}})(ye),Te={},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Ee=n(127),Ie="SET_TIME",ke={time:"time"},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(G.a)(Object(G.a)({},e),{},{time:t.time});default:return e}},Me=n(137),Le=n(130),Ae=Object(K.c)({profilePage:X.c,dialogsPage:z,sidebarPage:Ce,usersPage:Ee.b,auth:ue,app:ve,footer:Pe,form:Le.a}),De=Object(K.e)(Ae,Object(K.a)(Me.a));window.store=De;var Fe=De;i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(V.a,{store:Fe,children:Object(O.jsx)(Ne,{})})}),document.getElementById("root")),r()},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(138),c=n(54),s=n.n(c),i=n(1),o=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(o?s.a.error:null),children:[Object(i.jsx)("div",{children:Object(i.jsx)(c.tagName,Object(r.a)(Object(r.a)({},c),t))}),o&&Object(i.jsx)("span",{children:n.error})]})},u=function(e){return Object(i.jsx)(o,Object(r.a)({tagName:"textarea"},e))},l=function(e){return Object(i.jsx)(o,Object(r.a)({tagName:"input"},e))}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},46:function(e,t,n){e.exports={header:"Header_header__2Ei1P",info:"Header_info__17ZoZ",logo:"Header_logo__2wtuL",loginBlock:"Header_loginBlock__2VIuV",loginBlock_Item:"Header_loginBlock_Item__2d3JF"}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__iQSSj",error:"FormsControls_error__1OsUA",formSummatyError:"FormsControls_formSummatyError__3FCL6"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(38),a=n(3),c=n(11),s=n.n(c),i=n(19),o=n(21),u="ADD_POST",l="SETTINGS_CHANGE_SCORE",j="SET_USER_PROFILE",d="SET_STATUS",f=function(e){return{type:u,postText:e}},b=function(){return{type:l}},p=function(e){return{type:j,profile:e}},O=function(e){return{type:d,status:e}},m=function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.i)(e);case 2:0==t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.e)(e);case 2:200==(r=t.sent).status&&n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.d)(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x={profile:null,posts:[{id:1,textPost:"Hi, how are you?"},{id:2,textPost:"It's my first post"}],newPostText:"it_kamasutra",SettingsScore:0,status:""};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:e.posts.length+1,textPost:t.postText};return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n])});case l:return Object(a.a)(Object(a.a)({},e),{},{SettingsScore:e.SettingsScore+1});case j:return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case d:return Object(a.a)(Object(a.a)({},e),{},{status:t.status});default:return e}}},71:function(e,t,n){e.exports={settings:"Settings_settings__qw6O9",settingItem:"Settings_settingItem__1DMUw",settingvalue:"Settings_settingvalue__nQJYu"}},89:function(e,t,n){"use strict";n(0);var r=n(95),a=n.n(r),c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:a.a.preloader,children:Object(c.jsx)("div",{className:a.a.spinner})})}},95:function(e,t,n){e.exports={preloader:"Preloader_preloader__2potu",spinner:"Preloader_spinner__1Uv3K",spin:"Preloader_spin__16X6D"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(29),c=n(30),s=n(32),i=n(31),o=n(0),u=n.n(o),l=n(12),j=n(9),d=n(1),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(s.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(j.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(f)(t)}}},[[292,1,2]]]);
//# sourceMappingURL=main.ef6ef0e8.chunk.js.map