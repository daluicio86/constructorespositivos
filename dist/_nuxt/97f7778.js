(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{693:function(t,e,n){"use strict";n.r(e);n(490);var l={data:function(){return{nombre:"",apellido:"",email:"",nameState:null,lastnameState:null,emailState:null}},methods:{checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},handleSubmit:function(){this.sendData(),this.$store.commit("index/SET_EMAIL",this.email),localStorage.setItem("user_email",this.email)}}},o=n(31),component=Object(o.a)(l,(function(){return(0,this._self._c)("div")}),[],!1,null,"67bc3b62",null);e.default=component.exports}}]);