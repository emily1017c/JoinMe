(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"013f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"flex-login"},[e("div",{staticClass:"logo-login flex-item",on:{click:t.quickPass}},[e("img",{staticClass:"img",attrs:{src:a("cf05")}})])]),e("div",{staticClass:"btngroup flex-login"},[e("q-btn",{staticClass:"fb btn",staticStyle:{width:"180px"},attrs:{unelevated:""},on:{click:t.facebooklogin}},[e("q-icon",{staticClass:"fab fa-facebook-f q-pa-md q-pr-lg",attrs:{size:"sm"}}),e("label",{staticClass:"q-px-sm"},[t._v("Facebook")])],1),e("q-btn",{staticClass:"g btn q-ma-md",staticStyle:{width:"180px"},attrs:{color:"red-8",unelevated:"",type:"submit"},on:{click:t.googlelogin}},[e("q-icon",{staticClass:"fab fa-google q-pa-md q-pr-lg",attrs:{size:"sm"}}),e("label",{staticClass:"q-px-sm"},[t._v("Google")])],1),e("q-separator",{staticClass:"q-ma-md",attrs:{inset:""}}),e("router-link",{attrs:{to:"/email"}},[e("q-btn",{staticClass:"em btn q-ma-md",staticStyle:{width:"180px"},attrs:{color:"blue-8",unelevated:""}},[e("q-icon",{staticClass:"q-pa-md q-pr-lg far fa-envelope",attrs:{size:"sm"}}),e("label",{staticClass:"q-px-sm"},[t._v("Email")])],1)],1),e("div",{staticClass:"text"},[e("span",{staticClass:"signin"},[t._v("還沒有帳號嗎？")]),e("router-link",{attrs:{to:"signin"}},[e("span",[t._v("註冊")])])],1)],1)])},i=[],o=a("8aa5"),n=a.n(o),l=a("fc1b"),c={name:"Login",data(){return{user:{},isAuth:!1,email:"s110519014@stu.ntue.edu.tw",password:"123456"}},created(){l["c"].onAuthStateChanged(t=>{t?(this.user=t,this.isAuth=!0):(this.user={},this.isAuth=!1)})},methods:{quickPass:function(){n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(t=>{t.user&&this.$router.replace("/week")}).catch(t=>{this.error=t.message})},googlelogin(){const t=new n.a.auth.GoogleAuthProvider;l["c"].signInWithPopup(t).then(t=>{this.user=t.user,this.isAuth=!0,this.$router.replace("/loading")}).catch(t=>console.error(t))},facebooklogin(){const t=new n.a.auth.FacebookAuthProvider;l["c"].signInWithPopup(t).then(t=>{this.user=t.user,this.isAuth=!0,this.$router.replace("/loading")}).catch(t=>console.error(t))},logout(){l["c"].signOut().then(()=>{this.user={},this.isAuth=!1}).catch(t=>console.log(t))}}},r=c,u=(a("da41"),a("2877")),h=a("9c40"),d=a("0016"),g=a("eb85"),p=a("eebe"),m=a.n(p),b=Object(u["a"])(r,e,i,!1,null,null,null);s["default"]=b.exports;m()(b,"components",{QBtn:h["a"],QIcon:d["a"],QSeparator:g["a"]})},da41:function(t,s,a){"use strict";var e=a("e196"),i=a.n(e);i.a},e196:function(t,s,a){}}]);