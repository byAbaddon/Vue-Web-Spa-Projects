import{b as q,aQ as N,x as r,f as n,g as c,i as e,j as u,w as d,e as t,y as z,z as A,C as E,B as g,t as U}from"./index.a0b5c28b.js";import{u as C}from"./treks.66b7df20.js";import{u as F}from"./updateData.0e278640.js";import{V as M}from"./VAlert.87e711d4.js";const j={class:"my-5 mx-auto",style:{"max-width":"70em","min-width":"23em"}},Q=["onSubmit"],Y={style:{margin:"0 92%"}},Z=g("mdi-window-close"),$={class:"form-label-group text-center"},G=["value"],H=e("label",{for:"inputTrekName"},"Location",-1),J={class:"form-label-group"},K=["value"],O=e("label",{for:"inputTrekDate"},"Date",-1),P={class:"form-label-group"},W=["value"],X=e("label",{for:"inputTrekDescription"},"Description",-1),ee={class:"form-label-group"},te=["value"],oe=e("label",{for:"inputTrekImage"},"Image",-1),se={class:"form-label-group"},ae=["value"],re=e("label",{for:"likes"},"Likes",-1),le={key:0,class:"btn btn-lg btn-dark btn-block text-white",type:"submit"},ie={key:1,class:"mx-auto"},pe={__name:"EditTrekView",setup(ne){const k=C(),m=q(),b=N().params.id;let{organizer:x,id:p,imageURL:y,date:T,description:w,location:D,owner:L,likes:V,voters:B}=k.allTreks.find(o=>o.id==b),_=r(V),l=r(!1),i=r(""),s=r("");const I=()=>{let o=new FormData(document.getElementById("edit"));const a=o.get("location"),h=o.get("dateTime"),R=o.get("description"),S=o.get("imageURL"),f=Number(o.get("likes"));F(p,{organizer:x,id:p,imageURL:S,date:h,description:R,location:a,owner:L,likes:f,voters:B}).then(v=>{_.value=f,l.value=!0,i.value="success",s.value="Success edit the trek"}).catch(v=>{console.log(v.error),l.value=!0,i.value="error",s.value="Fail to edit the trek!"}),setTimeout(()=>s.value="You will be redirect to home page...",2e3),setTimeout(()=>s.value=m.push("/"),3e3)};return(o,a)=>(n(),c("div",j,[e("form",{id:"edit",class:"create-trek",onSubmit:A(I,["prevent"])},[e("div",Y,[u(z,{class:"float",variant:"text",onClick:a[0]||(a[0]=h=>t(m).push("/"))},{default:d(()=>[u(E,{color:"red",size:"30"},{default:d(()=>[Z]),_:1})]),_:1})]),e("div",$,[e("input",{pattern:"[A-Za-z\\s]{1,}\\d*",type:"text",name:"location",class:"form-control",placeholder:"Location",required:"",autofocus:"",value:t(D)},null,8,G),H]),e("div",J,[e("input",{type:"date",name:"dateTime",class:"form-control",placeholder:"Date",required:"",value:t(T)},null,8,K),O]),e("div",P,[e("textarea",{minlength:"6",maxlength:"200",type:"text",name:"description",class:"form-control bg-white",placeholder:"Description",required:"",value:t(w)},null,8,W),X]),e("div",ee,[e("input",{pattern:"https?:\\/\\/.+",type:"text",name:"imageURL",class:"form-control",placeholder:"Image",required:"",autofocus:"",value:t(y)},null,8,te),oe]),e("div",se,[e("input",{type:"number",min:"0",max:"100",name:"likes",class:"form-control text-center",required:"",autofocus:"",value:t(_)},null,8,ae),re]),t(l)?(n(),c("div",ie,[u(M,{class:"mx-auto",type:t(i)=="success"?"success":"error"},{default:d(()=>[g(U(t(s)),1)]),_:1},8,["type"])])):(n(),c("button",le," Edit the trek "))],40,Q)]))}};export{pe as default};
