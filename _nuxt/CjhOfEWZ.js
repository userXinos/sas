import{P as C,Q as h,d as l,t as m,v as c,x as n,K as r,_ as u,y as i,z as f,R as P,r as b,i as k,o as I,M as v,N as $,O as g}from"./BB3vmbJs.js";import{u as B,V as N}from"./LPw8qIsx.js";const y=C("comments",()=>{const a=h({});return{deleted:a,deleteComment:t,isDeleted:s};function t(o,e){o in a||(a[o]=[]),a[o].push(e)}function s(o,e){var d;return((d=a[o])==null?void 0:d.includes(e))??!1}}),S=l({__name:"PostCommentActions",props:{comment:{},postId:{}},setup(a){const t=y();return(s,o)=>(m(),c("div",null,[n("button",{class:"btn remove",onClick:o[0]||(o[0]=e=>r(t).deleteComment(s.postId,s.comment.id))}," Удалить ")]))}}),V=u(S,[["__scopeId","data-v-9eef5c37"]]),D={class:"comment"},A={class:"body"},F={class:"body_content"},M={class:"username"},R={class:"comment-footer"},w=l({__name:"PostComment",props:{comment:{},postId:{}},setup(a){return(t,s)=>(m(),c("div",D,[s[1]||(s[1]=n("div",{class:"avatar"},null,-1)),n("div",A,[n("div",F,[n("h2",M,i(t.comment.user.username),1),n("p",null,i(t.comment.body),1)]),n("div",R,[s[0]||(s[0]=n("span",{class:"date"},"Today",-1)),f(V,{comment:t.comment,"post-id":t.postId},null,8,["comment","post-id"])])])]))}}),z=u(w,[["__scopeId","data-v-e1934ebe"]]),E={class:"post-page"},K={key:0},L={class:"comments"},O=l({__name:"[id]",setup(a){const t=P(),s=B(),o=y(),e=b(),d=k(()=>e.value?e.value.comments.filter(p=>!o.isDeleted(e.value.id,p.id)):[]);return I(async()=>{e.value=await s.getFullPost(Number.parseInt(t.params.id))}),(p,Q)=>(m(),c("div",E,[r(e)?(m(),c(v,{key:1},[f(N,{post:r(e)},null,8,["post"]),n("div",L,[n("h2",null,i(d.value.length)+" Комментариев",1),(m(!0),c(v,null,$(d.value,_=>(m(),g(z,{key:_.id,comment:_,"post-id":r(e).id},null,8,["comment","post-id"]))),128))])],64)):(m(),c("div",K," Крутая анимация загрузки... "))]))}}),q=u(O,[["__scopeId","data-v-ada27210"]]);export{q as default};