<template>
	<div class="infor-us">
		<common-baner></common-baner>
		<div class="infor-all" >
			<span  @click="changeAbout()"><router-link to='/inforAboutUs/aboutUs' :class= "{default:bollean1,active:msg === 'aboute'}" >关于我们 </router-link></span>
			<span @click="changePrivat()"><router-link to='/inforAboutUs/privacyTreaty' :class= "{default:bollean1,active:msg === 'privaty'}" >隐私条约</router-link></span>
			<span @click="changeConcat()"><router-link to='/inforAboutUs/contactUs' :class= "{default:bollean1,active:msg === 'contact'}" >联系我们</router-link></span>
			
			
			
			<router-view class="view"></router-view>
		</div>
		<common-img></common-img>
	</div>
</template>

<script>
import commonBaner from './commonBaner'
import commonImg from './commonImg'


export default {
  name: 'App',
  data (){
  	return {
  		bollean1:true,
  		msg:''
  	}
  },
  methods:{
  	changeAbout:function (){
  		this.msg = 'aboute';
  	},
  	changePrivat: function (){
  		this.msg = 'privaty';
  	},
  	changeConcat:function (){
  		this.msg = 'contact';
  	}
  }
  ,
  components:{
  	commonImg,
  	commonBaner
  },
  
  created(){
  	if (this.$route.query.name === 'aboute') {
  		this.msg = 'aboute';
  	} else if(this.$route.query.name === 'privaty'){
  		this.msg = 'privaty';
  	}else {
  		this.msg = 'contact';
  	}
  	

	}
}
</script>

<style scoped>
* {
 	margin: 0;
 	padding: 0;
 }
 li {
 	list-style: none;
 }
 a {
 	text-decoration: none;
 }
 .infor-us {
	width: 100%;
	height:auto;
	padding-bottom: 100px;
	background:#fafafa;
}
.infor-us .infor-all {
	width: 727px;
	height:auto;
	margin-top: 21px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 76px;
}
.default {
	position: relative;
	z-index: 999;
	text-decoration: none;
	display: inline-block;
	width: 154px;
	height: 46px;
	text-align: center;
	line-height: 46px;
	color: #636363;
	font-size: 16px;
	border: 1px solid transparent;
	border-bottom: 1px solid  #f1f1f1;
	border-radius: 10px 10px 0 0;
	background: #fefefe;
}
.active  {
	color:#aa70ec;
	border: 1px solid #f1f1f1;
	border-bottom: 1px solid  #ffffff;
	border-radius: 10px 10px 0 0;
}
.view {
	border: 1px solid #f1f1f1;
	background: #ffffff;
	margin-top: -1px;
}

</style>