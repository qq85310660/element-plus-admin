let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as l,m as t,r as a,q as o,s as r,b as s,o as i,e as u,g as d,y as n,j as m}from"./index.3b006b7a.js";import{s as p,a as c,v as h}from"./CardListItem.2e237007.js";const f=()=>{const e=a({name:"",region:"",delivery:!1,resource:"",type:[]}),l=a({name:[{required:!0,message:"请输入姓名",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"blur"}],resource:[{required:!0,message:"请选择活动性质",trigger:"blur"}],type:[{required:!0,message:"请选择特殊资源",trigger:"blur"}]}),o=t(null);return{form:e,rules:l,submit:async()=>{await h(o)&&console.log(e)},refForm:o}};var y=l({name:"CardListTest",components:{CardList:p,CardListItem:c},setup:()=>({show:t(!1),listItem:t([{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21",url:"http://baidu.com",target:"_blank"},{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21"},{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21"}]),remove:e=>console.log(e),edit:e=>console.log(e),...f()})});const b=n("data-v-2a9ab96a");o("data-v-2a9ab96a");const _={class:"content"},g=m(" 删除 "),w=m(" 编辑 "),v=m(" 申请单号 "),k=m(" 2020001686 "),V=m(" 项目编码 "),x=m(" DC2000000373 "),C=m(" 申报金额 "),q=m(" ￥0.01 "),I=m(" 项目名称 "),L=d("span",null,"2020年广西一流学科建设项目（化学）",-1),U=m(" 提交 "),j=m(" 姓名 "),K=m(" 活动区域 "),F=m(" 即时配送 "),T=m(" 活动性质 "),D=m(" 特殊资源 ");r();const E=b(((e,l,t,a,o,r)=>{const n=s("card-list"),m=s("el-col"),p=s("el-button"),c=s("el-button-group"),h=s("card-list-item"),f=s("el-input"),y=s("el-option"),E=s("el-select"),H=s("el-switch"),M=s("el-checkbox"),z=s("el-checkbox-group"),A=s("el-radio"),B=s("el-radio-group"),G=s("el-row");return i(),u("div",_,[d(G,{gutter:15,class:"clear-both"},{default:b((()=>[d(m,{span:12},{default:b((()=>[d(n,{"list-item":e.listItem,"show-header":!1,"is-nowrap":!0,"show-liststyle":!1},null,8,["list-item"])])),_:1}),d(m,{span:12},{default:b((()=>[d(n,{"list-item":e.listItem,"show-header":!1,"is-nowrap":!0,"show-liststyle":!0},null,8,["list-item"])])),_:1}),d(m,{span:12},{default:b((()=>[d(n,{title:"列表","list-item":e.listItem,"show-header":!0,"is-nowrap":!0,"show-liststyle":!0},null,8,["list-item"])])),_:1}),d(m,{span:12},{default:b((()=>[d(n,{title:"列表","list-item":e.listItem,"show-header":!0,"is-nowrap":!0,"show-liststyle":!0},{btn:b((()=>[d(c,null,{default:b((()=>[d(p,{icon:"el-icon-delete",onClick:e.remove},{default:b((()=>[g])),_:1},8,["onClick"]),d(p,{icon:"el-icon-edit",onClick:e.edit},{default:b((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1},8,["list-item"])])),_:1}),d(m,{span:24},{default:b((()=>[d(n,{type:"KeyValue",title:"键值对","show-header":!0},{KeyValue:b((()=>[d(h,{width:"100px"},{key:b((()=>[v])),value:b((()=>[k])),_:1}),d(h,{width:"100px"},{key:b((()=>[V])),value:b((()=>[x])),_:1}),d(h,{width:"100px"},{key:b((()=>[C])),value:b((()=>[q])),_:1}),d(h,{width:"100px"},{key:b((()=>[I])),value:b((()=>[L])),_:1})])),_:1})])),_:1}),d(m,{span:24},{default:b((()=>[d(n,{ref:l=>{e.refForm=l},title:"表单",type:"KeyValue","show-header":!0,form:e.form,rules:e.rules},{btn:b((()=>[d(c,null,{default:b((()=>[d(p,{icon:"el-icon-edit",onClick:e.submit},{default:b((()=>[U])),_:1},8,["onClick"])])),_:1})])),KeyValue:b((()=>[d(h,{width:"100px","is-require":!0,prop:"name"},{key:b((()=>[j])),value:b((()=>[d(f,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),d(h,{width:"100px","is-require":!0,prop:"region"},{key:b((()=>[K])),value:b((()=>[d(E,{modelValue:e.form.region,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.region=l),placeholder:"请选择活动区域"},{default:b((()=>[d(y,{label:"区域一",value:"shanghai"}),d(y,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(h,{width:"100px",prop:"delivery"},{key:b((()=>[F])),value:b((()=>[d(H,{modelValue:e.form.delivery,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.delivery=l)},null,8,["modelValue"])])),_:1}),d(h,{width:"100px","is-require":!0,prop:"type"},{key:b((()=>[T])),value:b((()=>[d(z,{modelValue:e.form.type,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.type=l)},{default:b((()=>[d(M,{label:"美食",name:"type"}),d(M,{label:"地推",name:"type"}),d(M,{label:"线下",name:"type"}),d(M,{label:"品牌",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(h,{width:"100px","is-require":!0,prop:"resource"},{key:b((()=>[D])),value:b((()=>[d(B,{modelValue:e.form.resource,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.resource=l)},{default:b((()=>[d(A,{label:"线上品牌商赞助"}),d(A,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["form","rules"])])),_:1})])),_:1})])}));y.render=E,y.__scopeId="data-v-2a9ab96a";export default y;
