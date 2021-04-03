(this["webpackJsonpsmall-blog"]=this["webpackJsonpsmall-blog"]||[]).push([[0],{104:function(t,e,n){t.exports={comment:"Comment_comment__3dg-3"}},130:function(t,e,n){},15:function(t,e,n){t.exports={toolWrapper:"PostPage_toolWrapper__lvSCC",link:"PostPage_link__etB6z",button:"PostPage_button__XN9U2",wrapper:"PostPage_wrapper__2U7KT",commentTitle:"PostPage_commentTitle__2q0d2",commentsList:"PostPage_commentsList__2hSZ1"}},231:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(47),o=n.n(r),a=n(23),c=n(5),i=n(6),l=n(96),d=n.n(l).a.create({baseURL:"https://bloggy-api.herokuapp.com/",headers:{"Content-Type":"application/json"}}),u=function(){return d.get("/posts").then((function(t){return t.data}))},b=function(t){return d.post("/posts",t).then((function(t){return t.data}))},p=function(t,e){return d.put("posts/".concat(t),e).then((function(t){return t.data}))},j=function(t){return d.delete("/posts/".concat(t)).then((function(t){return t.data}))},m=function(){return d.get("/comments").then((function(t){return t.data}))},h=function(t){return d.post("/comments",t).then((function(t){return t.data}))},O="SET-POSTS",_="SET-COMMENTS",x="ADD-POST",f="ADD-COMMENT",y="REMOVE-POST",g="CHANGE-POST",P={posts:[],comments:[]},v=n(97),N=Object(a.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(i.a)(Object(i.a)({},t),{},{posts:Object(c.a)(e.data)});case x:return Object(i.a)(Object(i.a)({},t),{},{posts:[].concat(Object(c.a)(t.posts),[e.data])});case g:var n=Object(c.a)(t.posts).map((function(t){return t.id.toString()===e.postId?Object(i.a)(Object(i.a)({},t),e.data):t}));return Object(i.a)(Object(i.a)({},t),{},{posts:Object(c.a)(n)});case y:return Object(i.a)(Object(i.a)({},t),{},{posts:Object(c.a)(t.posts).filter((function(t){return t.id.toString()!==e.postId}))});case _:return Object(i.a)(Object(i.a)({},t),{},{comments:Object(c.a)(e.data)});case f:return Object(i.a)(Object(i.a)({},t),{},{comments:[].concat(Object(c.a)(t.comments),[e.data])});default:return t}}}),C=Object(a.e)(N,Object(a.a)(v.a)),k=n(22),F=n(7),S=(n(130),n(3)),w=n(25),T=n.n(w),I=n(52),M=n.n(I),E=n(1),A=function(t){return Object(E.jsxs)("div",{className:M.a.wrapper,children:[Object(E.jsx)("h1",{className:M.a.title,children:"Latest posts"}),Object(E.jsx)("ul",{className:M.a.postsList,children:t.posts})]})},B=n(30),L=n.n(B),q=function(t){var e,n,s=(null===(e=t.body)||void 0===e?void 0:e.length)>200?"".concat(t.body.slice(0,200),"..."):t.body;return Object(E.jsxs)("li",{className:L.a.postItem,children:[Object(E.jsxs)("span",{className:L.a.wrapper,children:[Object(E.jsx)(F.b,{to:"/posts/".concat(t.post),className:L.a.link,children:Object(E.jsx)("h2",{className:L.a.title,children:t.title})}),Object(E.jsx)("p",{className:L.a.description,children:s})]}),Object(E.jsx)("span",{className:L.a.firstLetter,children:null===(n=t.title[0])||void 0===n?void 0:n.toUpperCase()})]})},W=Object(k.b)((function(t){return{posts:t.posts.posts}}),{})((function(t){var e=t.posts.map((function(t){return Object(E.jsx)(q,{post:t.id,title:t.title,body:t.body},t.id)}));return Object(E.jsx)(A,{posts:e})})),V=n(14),D=n(15),J=n.n(D),U=n(19),z=n(29),Q=n(38),G=n.n(Q),R=function(t){var e=z.a().shape({body:z.b().required("Body is required").test("len","Must be exactly 10 characters",(function(t){return void 0!==t&&t.length>10}))});return Object(E.jsx)("div",{className:G.a.wrapper,children:Object(E.jsx)(U.b,{initialValues:{body:""},validateOnBlur:!0,validationSchema:e,onSubmit:function(e,n){var s=n.resetForm;t.createComment({postId:t.postId,body:e.body}),s()},children:function(t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(U.a,{name:"body",as:"textarea",className:G.a.text}),t.touched.body&&t.errors.body&&Object(E.jsx)("p",{className:G.a.errorMessage,children:t.errors.body}),Object(E.jsx)("button",{type:"submit",onClick:t.handleSubmit,disabled:!t.isValid&&!t.dirty,className:G.a.button,children:"Send comment"})]})}})})},Z=n(33),H=n.n(Z),K=z.a().shape({title:z.b().required("Title is required").test("len","Must be exactly 10 characters",(function(t){return void 0!==t&&t.length>10})),body:z.b().required("Body is required").test("len","Must be exactly 10 characters",(function(t){return void 0!==t&&t.length>10}))}),X=function(t){return Object(E.jsx)(U.b,{initialValues:{title:t.postTitle,body:t.postBody},validateOnBlur:!0,validationSchema:K,onSubmit:function(e){t.editPost(t.postId,{title:e.title,body:e.body}).then((function(){t.setEditMode(!1)}))},children:function(t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("input",{type:"text",name:"title",value:t.values.title,onChange:t.handleChange,onBlur:t.handleBlur,className:H.a.title}),t.touched.title&&t.errors.title&&Object(E.jsx)("p",{className:H.a.errorMessage,children:t.errors.title}),Object(E.jsx)(U.a,{name:"body",as:"textarea",placeholder:"Text",className:H.a.text}),t.touched.body&&t.errors.body&&Object(E.jsx)("p",{className:H.a.errorMessage,children:t.errors.body}),Object(E.jsx)("button",{type:"submit",onClick:t.handleSubmit,disabled:!t.isValid&&!t.dirty,className:H.a.button,children:"Update Post"})]})}})},Y=function(t){var e=Object(s.useState)(!1),n=Object(V.a)(e,2),r=n[0],o=n[1];return Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:J.a.toolWrapper,children:[Object(E.jsx)(F.b,{to:"/",className:J.a.link,children:"Back"}),Object(E.jsxs)("div",{children:[r?Object(E.jsx)("button",{type:"button",className:J.a.button,onClick:function(){return o(!1)},children:"Cancel edit"}):Object(E.jsx)("button",{type:"button",className:J.a.button,onClick:function(){return o(!0)},children:"Edit post"}),Object(E.jsx)("button",{type:"button",className:J.a.button,onClick:function(){t.deletePost(t.postId)},children:"Delete post"})]})]}),Object(E.jsx)("div",{className:J.a.wrapper,children:r?Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(X,{postId:t.postId,postTitle:t.title,postBody:t.body,editPost:t.editPost,setEditMode:o})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:t.title}),Object(E.jsx)("p",{children:t.body})]})}),Object(E.jsxs)("div",{className:J.a.wrapper,children:[Object(E.jsx)("p",{className:J.a.commentTitle,children:"Comments"}),Object(E.jsx)(R,{postId:t.postId,createComment:t.createComment}),Object(E.jsx)("ul",{className:J.a.commentsList,children:t.comments})]})]})},$=n(104),tt=n.n($),et=function(t){return Object(E.jsx)("li",{className:tt.a.comment,children:t.text})},nt=Object(a.d)(S.g,Object(k.b)((function(t){return{posts:t.posts.posts,comments:t.posts.comments}}),{createComment:function(t){return function(e){h(t).then((function(t){e(function(t){return{type:f,data:t}}(t))}))}},deletePost:function(t){return function(e){j(t).then((function(n){e(function(t){return{type:y,postId:t}}(t))}))}},editPost:function(t,e){return function(n){return p(t,e).then((function(s){n(function(t,e){return{type:g,postId:t,data:e}}(t,e))}))}}}))((function(t){var e,n,s,r=t.match.params.postId,o=null===(e=t.posts)||void 0===e?void 0:e.find((function(t){return t.id.toString()===r})),a=null===(n=t.comments)||void 0===n||null===(s=n.filter((function(t){return t.postId.toString()===r})))||void 0===s?void 0:s.map((function(t){return Object(E.jsx)(et,{text:t.body},t.id)}));return o?Object(E.jsx)(Y,{postId:r,title:o.title,body:o.body,comments:a,deletePost:t.deletePost,editPost:t.editPost,createComment:t.createComment}):Object(E.jsx)(S.a,{to:"/"})})),st=n(53),rt=n.n(st),ot=n(26),at=n.n(ot),ct=function(t){var e=Object(s.useState)(!1),n=Object(V.a)(e,2),r=n[0],o=n[1],a=Object(s.useState)(""),c=Object(V.a)(a,2),i=c[0],l=c[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("p",{className:"".concat(at.a.link," ").concat(r?at.a.linkActive:null),children:["The post was created.",Object(E.jsx)(F.b,{to:"/posts/".concat(i),children:"Go to post"})]}),Object(E.jsx)(U.b,{initialValues:{title:"",body:""},validateOnBlur:!0,validationSchema:K,onSubmit:function(e,n){var s=n.resetForm;t.createPost({title:e.title,body:e.body}).then((function(t){l(t.id),o(!0)})),s({title:"",body:""})},children:function(t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("input",{type:"text",name:"title",placeholder:"Title",value:t.values.title,onChange:t.handleChange,onBlur:t.handleBlur,className:at.a.title}),t.touched.title&&t.errors.title&&Object(E.jsx)("p",{className:at.a.errorMessage,children:t.errors.title}),Object(E.jsx)(U.a,{name:"body",as:"textarea",placeholder:"Text",className:at.a.text}),t.touched.body&&t.errors.body&&Object(E.jsx)("p",{className:at.a.errorMessage,children:t.errors.body}),Object(E.jsx)("button",{type:"submit",onClick:t.handleSubmit,disabled:!t.isValid&&!t.dirty,className:at.a.button,children:"Create post"})]})}})]})},it=function(t){return Object(E.jsxs)("div",{children:[Object(E.jsx)(F.b,{to:"/",className:rt.a.link,children:"Back"}),Object(E.jsx)("h1",{className:rt.a.title,children:"Create new post"}),Object(E.jsx)("div",{className:rt.a.wrapper,children:Object(E.jsx)(ct,{createPost:t.createPost})})]})},lt=Object(k.b)((function(t){return{}}),{getComments:function(){return function(t){m().then((function(e){t(function(t){return{type:_,data:t}}(e))}))}},getPosts:function(){return function(t){u().then((function(e){t(function(t){return{type:O,data:t}}(e))}))}},createPost:function(t){return function(e){return b(t).then((function(t){return e(function(t){return{type:x,data:t}}(t)),t}))}}})((function(t){return Object(s.useEffect)((function(){t.getPosts(),t.getComments()}),[t]),Object(E.jsxs)("div",{className:T.a.wrapper,children:[Object(E.jsx)("div",{className:T.a.headerWrapper,children:Object(E.jsxs)("header",{className:T.a.container,children:[Object(E.jsx)(F.b,{to:"/",className:T.a.logo,children:"Inquire"}),Object(E.jsx)(F.b,{to:"/post/new",className:T.a.link,children:"Create post"})]})}),Object(E.jsx)("div",{className:T.a.mainWrapper,children:Object(E.jsx)("main",{className:T.a.container,children:Object(E.jsxs)(S.d,{children:[Object(E.jsx)(S.b,{exact:!0,path:"/",render:function(){return Object(E.jsx)(W,{})}}),Object(E.jsx)(S.b,{exact:!0,path:"/post/new",render:function(){return Object(E.jsx)(it,{createPost:t.createPost})}}),Object(E.jsx)(S.b,{path:"/posts/:postId?",render:function(){return Object(E.jsx)(nt,{})}})]})})})]})})),dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),o(t),a(t)}))};o.a.render(Object(E.jsx)(F.a,{basename:"/tt_simple_blog",children:Object(E.jsx)(k.a,{store:C,children:Object(E.jsx)(lt,{})})}),document.getElementById("root")),dt()},25:function(t,e,n){t.exports={container:"App_container__1LgNn",wrapper:"App_wrapper__3tNhG",headerWrapper:"App_headerWrapper__2tFvb",logo:"App_logo__2Oj_6",link:"App_link__1Ydnk",mainWrapper:"App_mainWrapper__3Need"}},26:function(t,e,n){t.exports={title:"FormikPostForm_title__1WahT",text:"FormikPostForm_text__37atj",link:"FormikPostForm_link__Jas37",linkActive:"FormikPostForm_linkActive__1zTLS",errorMessage:"FormikPostForm_errorMessage__2AV9c",button:"FormikPostForm_button__2JL9T"}},30:function(t,e,n){t.exports={postItem:"Post_postItem__1RTkZ",wrapper:"Post_wrapper__35Akj",link:"Post_link__2O_mO",title:"Post_title__NbuSu",description:"Post_description__19oei",firstLetter:"Post_firstLetter__1mX1A"}},33:function(t,e,n){t.exports={title:"FormikEditForm_title__1zf5Q",text:"FormikEditForm_text__1-iE3",errorMessage:"FormikEditForm_errorMessage__295Hq",button:"FormikEditForm_button__1iqaK"}},38:function(t,e,n){t.exports={wrapper:"CreateComment_wrapper__1hZuT",text:"CreateComment_text__7rhci",errorMessage:"CreateComment_errorMessage__2zxm7",button:"CreateComment_button__2Qry-"}},52:function(t,e,n){t.exports={wrapper:"Posts_wrapper__1Ftl2",title:"Posts_title__1Qx8e",postsList:"Posts_postsList__2FJ1I"}},53:function(t,e,n){t.exports={wrapper:"CreatePost_wrapper__3Q0uA",title:"CreatePost_title__2raia",link:"CreatePost_link___wpSD"}}},[[231,1,2]]]);
//# sourceMappingURL=main.31317e4a.chunk.js.map