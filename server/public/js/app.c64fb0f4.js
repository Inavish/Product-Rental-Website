(function(){"use strict";var t={79:function(t,o,e){var r=e(963),l=e(119),d=e(252);const c={class:"container"};function a(t,o,e,r,l,a){const n=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)("div",c,[(0,d.Wm)(n)])}var n={name:"App"},u=e(744);const s=(0,u.Z)(n,[["render",a],["__scopeId","data-v-abcdced8"]]);var i=s,p=e(687);const _=t=>((0,d.dD)("data-v-635a54ea"),t=t(),(0,d.Cn)(),t),h={class:"hello"},m=_((()=>(0,d._)("h2",null,"Login Form",-1))),P=_((()=>(0,d._)("div",{class:"imgcontainer"},[(0,d._)("img",{src:p,alt:"Avatar",class:"avatar"})],-1))),g={class:"container"},y=_((()=>(0,d._)("label",{for:"uname"},[(0,d._)("b",null,"Email")],-1))),f=_((()=>(0,d._)("label",{for:"psw"},[(0,d._)("b",null,"Password")],-1))),v=_((()=>(0,d._)("div",{class:"container",style:{"background-color":"#f1f1f1"}},[(0,d._)("span",{class:"psw"},[(0,d.Uk)("Forgot "),(0,d._)("a",{href:"#"},"password?")])],-1)));function w(t,o,e,l,c,a){return(0,d.wg)(),(0,d.iD)("div",h,[m,P,(0,d._)("div",g,[y,(0,d.wy)((0,d._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>c.email=t),placeholder:"Enter Email",required:""},null,512),[[r.nr,c.email]]),f,(0,d.wy)((0,d._)("input",{type:"password",placeholder:"Enter Password","onUpdate:modelValue":o[1]||(o[1]=t=>c.password=t),required:""},null,512),[[r.nr,c.password]]),(0,d._)("button",{onClick:o[2]||(o[2]=t=>a.user_login()),type:"submit"},"Login")]),v])}var C=e(669),b=e.n(C),I={name:"AdminLogin",data(){return{email:"",password:""}},methods:{async user_login(){try{await b().post("http://localhost:5000/users/login",{email:this.email,password:this.password}).then((t=>{console.log(t),this.$router.push("/allProducts")}))}catch(t){console.log(t)}}}};const k=(0,u.Z)(I,[["render",w],["__scopeId","data-v-635a54ea"]]);var D=k,N=e(577);const z=t=>((0,d.dD)("data-v-a5df6b6c"),t=t(),(0,d.Cn)(),t),F={class:"hello"},O={id:"main-container"},A=z((()=>(0,d._)("h1",null,"Available Products on your website",-1))),U={style:{"overflow-x":"auto"}},M=z((()=>(0,d._)("tr",null,[(0,d._)("th",null,"Model Name"),(0,d._)("th",null,"Product Name"),(0,d._)("th",null,"Product Category"),(0,d._)("th",null,"Product Price"),(0,d._)("th",null,"Product Image"),(0,d._)("th",null,"Product Color"),(0,d._)("th",null,"Update Product"),(0,d._)("th",null,"Delete Product")],-1))),x=["src"],V=["onClick"],E={class:"form-popup",id:"myForm"},L=["src"],W=z((()=>(0,d._)("br",null,null,-1))),j=z((()=>(0,d._)("label",{for:"productName"},"Product Name:",-1))),q=z((()=>(0,d._)("br",null,null,-1))),Z=z((()=>(0,d._)("label",{for:"productCategory"},"Product Category:",-1))),T=z((()=>(0,d._)("br",null,null,-1))),$=z((()=>(0,d._)("label",{for:"productPrice"},"Product Price:",-1))),B=z((()=>(0,d._)("br",null,null,-1))),R=z((()=>(0,d._)("label",{for:"productColor"},"Product Color:",-1))),H=z((()=>(0,d._)("br",null,null,-1))),K=["onClick"];function Y(t,o,e,l,c,a){const n=(0,d.up)("Dashboard");return(0,d.wg)(),(0,d.iD)("div",F,[(0,d.Wm)(n),(0,d._)("div",O,[A,(0,d._)("div",U,[(0,d._)("table",null,[M,((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(c.products,(t=>((0,d.wg)(),(0,d.iD)("tr",{key:t._id},[(0,d._)("td",null,(0,N.zw)(t.ProductModel),1),(0,d._)("td",null,(0,N.zw)(t.ProductName),1),(0,d._)("td",null,(0,N.zw)(t.ProductCategory),1),(0,d._)("td",null,(0,N.zw)(t.ProductPrice)+" Rs/day",1),(0,d._)("td",null,[(0,d._)("img",{src:t.ProductImage,class:"product-img",alt:"Image"},null,8,x)]),(0,d._)("td",null,(0,N.zw)(t.ProductColor),1),(0,d._)("td",null,[(0,d._)("button",{class:"update-user",onClick:o=>a.openForm(t)}," Update ",8,V),(0,d._)("div",E,[(0,d._)("img",{src:this.productImage,class:"product-img",alt:"Image"},null,8,L),W,j,q,(0,d.wy)((0,d._)("input",{type:"text",id:"productName","onUpdate:modelValue":o[0]||(o[0]=t=>this.productName=t),required:""},null,512),[[r.nr,this.productName]]),Z,T,(0,d.wy)((0,d._)("input",{type:"text",id:"productCategory","onUpdate:modelValue":o[1]||(o[1]=t=>this.productCategory=t),required:""},null,512),[[r.nr,this.productCategory]]),$,B,(0,d.wy)((0,d._)("input",{type:"text",id:"productPrice","onUpdate:modelValue":o[2]||(o[2]=t=>this.productPrice=t),required:""},null,512),[[r.nr,this.productPrice]]),R,H,(0,d.wy)((0,d._)("input",{type:"text",id:"ProductColor","onUpdate:modelValue":o[3]||(o[3]=t=>this.productColor=t),required:""},null,512),[[r.nr,this.productColor]]),(0,d._)("button",{type:"button",class:"update-user",onClick:o[4]||(o[4]=t=>a.updateProduct())}," Update "),(0,d._)("button",{type:"button",class:"delete-user",onClick:o[5]||(o[5]=t=>a.closeForm())}," Cancel ")])]),(0,d._)("td",null,[(0,d._)("button",{class:"delete-user",onClick:o=>a.deleteProduct(t._id)}," Delete ",8,K)])])))),128))])])])])}const G=t=>((0,d.dD)("data-v-4a68fd97"),t=t(),(0,d.Cn)(),t),J={class:"one"},Q={class:"two"},S=G((()=>(0,d._)("div",{id:"logo"},[(0,d._)("img",{class:"img1",src:"https://assets.website-files.com/5f2bd20de11b965424e6cb83/60c2f7ee3d33e2e05090942d_Fynd.png",alt:"logo"})],-1))),X={id:"link1"},tt=G((()=>(0,d._)("br",null,null,-1))),ot={class:"navLink"},et=(0,d.Uk)("All Products"),rt={class:"navLink"},lt=(0,d.Uk)("Add Products"),dt={class:"navLink"},ct=(0,d.Uk)("All Orders"),at=G((()=>(0,d._)("div",{class:"content",align:"center"},[(0,d._)("div",{class:"topbar"},[(0,d._)("h2",null,"Dashboard")])],-1)));function nt(t,o,e,r,l,c){const a=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",J,[(0,d._)("div",Q,[S,(0,d._)("div",X,[tt,(0,d._)("ul",null,[(0,d._)("li",ot,[(0,d.Wm)(a,{to:"/allProducts"},{default:(0,d.w5)((()=>[et])),_:1})]),(0,d._)("li",rt,[(0,d.Wm)(a,{to:"/addProducts"},{default:(0,d.w5)((()=>[lt])),_:1})]),(0,d._)("li",dt,[(0,d.Wm)(a,{to:"/allOrders"},{default:(0,d.w5)((()=>[ct])),_:1})]),(0,d._)("li",{onClick:o[0]||(o[0]=t=>c.logoutUser()),class:"navLink"},"Logout")])])]),at])}var ut={name:"DashboardPage",methods:{logoutUser(){try{console.log("Checking"),b().get("http://localhost:5000/users/logout").then((t=>{console.log(t)})),this.$router.push("/")}catch(t){console.log(t)}}}};const st=(0,u.Z)(ut,[["render",nt],["__scopeId","data-v-4a68fd97"]]);var it=st,pt={name:"AllProducts",data(){return{products:[],productName:"",productCategory:"",productPrice:"",productColor:"",productImage:""}},components:{Dashboard:it},created:function(){this.get_all_products()},methods:{async get_all_products(){try{const t=await b().get("http://localhost:5000/products");console.log(t),this.products=t.data.products}catch(t){console.log(t)}},async updateProduct(){try{await b().put(`http://localhost:5000/products/update/${this.productId}`,{ProductName:this.productName,ProductCategory:this.productCategory,ProductPrice:this.productPrice,ProductColor:this.productColor}),this.get_all_products(),this.closeForm()}catch(t){console.log(t)}},openForm(t){document.getElementById("myForm").style.display="block",this.productId=t._id,this.productName=t.ProductName,this.productCategory=t.ProductCategory,this.productPrice=t.ProductPrice,this.productColor=t.ProductColor,this.productImage=t.ProductImage},closeForm(){document.getElementById("myForm").style.display="none"},async deleteProduct(t){let o="Are you sure to delete this product?";if(1==confirm(o))try{await b()["delete"](`http://localhost:5000/products/${t}`),this.get_all_products()}catch(e){console.log(e)}else this.get_all_products()}}};const _t=(0,u.Z)(pt,[["render",Y],["__scopeId","data-v-a5df6b6c"]]);var ht=_t;const mt=t=>((0,d.dD)("data-v-0bb03804"),t=t(),(0,d.Cn)(),t),Pt={class:"main-container"},gt=mt((()=>(0,d._)("h1",null,"Add Products to website",-1))),yt=mt((()=>(0,d._)("p",null," Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other. ",-1))),ft={class:"container"},vt={class:"row"},wt=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductModel"},"Model")],-1))),Ct={class:"col-75"},bt={class:"row"},It=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductName"},"Product Name")],-1))),kt={class:"col-75"},Dt={class:"row"},Nt=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductCategory"},"Product Category")],-1))),zt={class:"col-75"},Ft={class:"row"},Ot=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductPrice"},"Product Price")],-1))),At={class:"col-75"},Ut={class:"row"},Mt=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductColor"},"Product Color")],-1))),xt={class:"col-75"},Vt={class:"row"},Et=mt((()=>(0,d._)("div",{class:"col-25"},[(0,d._)("label",{for:"ProductImage"},"Product Image")],-1))),Lt={class:"col-75"},Wt={class:"row"};function jt(t,o,e,l,c,a){const n=(0,d.up)("Dashboard");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(n),(0,d._)("div",Pt,[gt,yt,(0,d._)("div",ft,[(0,d._)("div",vt,[wt,(0,d._)("div",Ct,[(0,d.wy)((0,d._)("input",{type:"text",id:"ProductModel","onUpdate:modelValue":o[0]||(o[0]=t=>c.ProductModel=t),placeholder:"Model.."},null,512),[[r.nr,c.ProductModel]])])]),(0,d._)("div",bt,[It,(0,d._)("div",kt,[(0,d.wy)((0,d._)("input",{type:"text",id:"Product Name","onUpdate:modelValue":o[1]||(o[1]=t=>c.ProductName=t),placeholder:"Product name.."},null,512),[[r.nr,c.ProductName]])])]),(0,d._)("div",Dt,[Nt,(0,d._)("div",zt,[(0,d.wy)((0,d._)("input",{type:"text",id:"ProductCategory","onUpdate:modelValue":o[2]||(o[2]=t=>c.ProductCategory=t),placeholder:"Product Category.."},null,512),[[r.nr,c.ProductCategory]])])]),(0,d._)("div",Ft,[Ot,(0,d._)("div",At,[(0,d.wy)((0,d._)("input",{type:"number",id:"ProductPrice","onUpdate:modelValue":o[3]||(o[3]=t=>c.ProductPrice=t),placeholder:"Product Price.."},null,512),[[r.nr,c.ProductPrice]])])]),(0,d._)("div",Ut,[Mt,(0,d._)("div",xt,[(0,d.wy)((0,d._)("input",{type:"text",id:"ProductColor","onUpdate:modelValue":o[4]||(o[4]=t=>c.ProductColor=t),placeholder:"Product Color.."},null,512),[[r.nr,c.ProductColor]])])]),(0,d._)("div",Vt,[Et,(0,d._)("div",Lt,[(0,d._)("input",{type:"file",id:"ProductImage",accept:"image/*",onChange:o[5]||(o[5]=(...t)=>a.onFileChanged&&a.onFileChanged(...t))},null,32)])]),(0,d._)("div",Wt,[(0,d._)("button",{onClick:o[6]||(o[6]=(...t)=>a.addProduct&&a.addProduct(...t))},"Add Product")])])])])}var qt={name:"Add_Products",components:{Dashboard:it},data(){return{ProductModel:"",ProductName:"",ProductCategory:"",ProductPrice:"",ProductImage:null,ProductColor:""}},methods:{onFileChanged(t){this.ProductImage=t.target.files[0]},async addProduct(){if(this.ProductImage&&this.ProductModel&&this.ProductName&&this.ProductPrice&&this.ProductColor&&this.ProductCategory){const t=new FormData;t.append("ProductImage",this.ProductImage),console.log(this.ProductImage),t.append("ProductModel",this.ProductModel),t.append("ProductName",this.ProductName),t.append("ProductPrice",this.ProductPrice),t.append("ProductColor",this.ProductColor),t.append("ProductCategory",this.ProductCategory),console.log("check shivani"),console.log(t),await b().post("http://localhost:5000/products",t).then((t=>{console.log(t),this.ProductModel="",this.ProductName="",this.ProductCategory="",this.ProductPrice="",this.ProductImage=null,this.ProductColor=""})),alert("Product Added successfully")}else alert("All fields are required*")}}};const Zt=(0,u.Z)(qt,[["render",jt],["__scopeId","data-v-0bb03804"]]);var Tt=Zt;const $t=t=>((0,d.dD)("data-v-182f6fee"),t=t(),(0,d.Cn)(),t),Bt={class:"main-container"},Rt=$t((()=>(0,d._)("h1",null,"All Orders Details",-1))),Ht=$t((()=>(0,d._)("tr",null,[(0,d._)("th",null,"User Name"),(0,d._)("th",null,"Email"),(0,d._)("th",null,"Contact"),(0,d._)("th",null,"Address"),(0,d._)("th",null,"From Date"),(0,d._)("th",null,"To Date"),(0,d._)("th",null,"Total Days"),(0,d._)("th",null,"Total Prize"),(0,d._)("th",null,"Ordered On"),(0,d._)("th",null,"Ordered Product")],-1))),Kt=["onClick"],Yt={class:"form-popup",id:"myForm"},Gt=["src"],Jt=["onClick"];function Qt(t,o,e,r,l,c){const a=(0,d.up)("Dashboard");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(a),(0,d._)("div",Bt,[Rt,(0,d._)("table",null,[Ht,((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(l.orders,(t=>((0,d.wg)(),(0,d.iD)("tr",{key:t._id},[(0,d._)("td",null,(0,N.zw)(t.firstName)+" "+(0,N.zw)(t.lastName),1),(0,d._)("td",null,(0,N.zw)(t.email),1),(0,d._)("td",null,(0,N.zw)(t.contact),1),(0,d._)("td",null,(0,N.zw)(t.address),1),(0,d._)("td",null,(0,N.zw)(t.fromDate),1),(0,d._)("td",null,(0,N.zw)(t.toDate),1),(0,d._)("td",null,(0,N.zw)(t.totalDays)+" Days",1),(0,d._)("td",null,(0,N.zw)(t.totalPrize)+" Rs.",1),(0,d._)("td",null,[(0,d._)("button",{class:"update-user",onClick:o=>c.openForm(t)}," Product Details ",8,Kt),(0,d._)("div",Yt,[(0,d._)("p",null,[(0,d._)("img",{src:this.ProductImage,class:"product-img",alt:"Image"},null,8,Gt)]),(0,d._)("p",null,"Model: "+(0,N.zw)(this.productModel),1),(0,d._)("p",null,"Product Name: "+(0,N.zw)(this.productName),1),(0,d._)("p",null,"Price: "+(0,N.zw)(this.productPrize)+" Rs.",1),(0,d._)("p",null,"Colour: "+(0,N.zw)(this.productColor),1),(0,d._)("p",null,"Category: "+(0,N.zw)(this.productCategory),1),(0,d._)("button",{type:"button",class:"btn cancel",onClick:o[0]||(o[0]=t=>c.closeForm())}," Close ")])]),(0,d._)("td",null,[(0,d._)("button",{onClick:o=>c.deleteOrder(t._id),class:"delete-order"}," Delete ",8,Jt)])])))),128))])])])}var St={name:"All_Orders",components:{Dashboard:it},data(){return{orders:[],productName:"",ProductImage:"",productModel:"",productPrize:"",productColor:"",productCategory:""}},created:function(){this.get_all_orders()},methods:{openForm(t){document.getElementById("myForm").style.display="block",this.productName=t.productInfo.ProductName,this.ProductImage=t.productInfo.ProductImage,this.productModel=t.productInfo.ProductModel,this.productPrize=t.productInfo.ProductPrice,this.productColor=t.productInfo.ProductColor,this.productCategory=t.productInfo.ProductCategory},closeForm(){document.getElementById("myForm").style.display="none"},async get_all_orders(){try{const t=await b().get("http://localhost:5000/order");console.log(t.data.order),this.orders=t.data.order}catch(t){console.log(t)}},async deleteOrder(t){let o="Are you sure to delete this order?";if(1==confirm(o))try{await b()["delete"](`http://localhost:5000/order/${t}`),this.get_all_orders()}catch(e){console.log(e)}else this.get_all_orders()}}};const Xt=(0,u.Z)(St,[["render",Qt],["__scopeId","data-v-182f6fee"]]);var to=Xt;const oo=[{name:"AdminLogin",path:"/",component:D},{name:"All_Products",path:"/allProducts",component:ht},{name:"Add_Products",path:"/addProducts",component:Tt},{name:"All_Orders",path:"/allOrders",component:to}],eo=l.p7({history:l.PO(),routes:oo});r.ri(i).use(eo).mount("#app")},687:function(t,o,e){t.exports=e.p+"img/user-log0.bdb0fc36.jpg"}},o={};function e(r){var l=o[r];if(void 0!==l)return l.exports;var d=o[r]={exports:{}};return t[r](d,d.exports,e),d.exports}e.m=t,function(){var t=[];e.O=function(o,r,l,d){if(!r){var c=1/0;for(s=0;s<t.length;s++){r=t[s][0],l=t[s][1],d=t[s][2];for(var a=!0,n=0;n<r.length;n++)(!1&d||c>=d)&&Object.keys(e.O).every((function(t){return e.O[t](r[n])}))?r.splice(n--,1):(a=!1,d<c&&(c=d));if(a){t.splice(s--,1);var u=l();void 0!==u&&(o=u)}}return o}d=d||0;for(var s=t.length;s>0&&t[s-1][2]>d;s--)t[s]=t[s-1];t[s]=[r,l,d]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var l,d,c=r[0],a=r[1],n=r[2],u=0;if(c.some((function(o){return 0!==t[o]}))){for(l in a)e.o(a,l)&&(e.m[l]=a[l]);if(n)var s=n(e)}for(o&&o(r);u<c.length;u++)d=c[u],e.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return e.O(s)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(79)}));r=e.O(r)})();
//# sourceMappingURL=app.c64fb0f4.js.map