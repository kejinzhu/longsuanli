<template>
	<div class="mine-help">
		<common-baner></common-baner>
		
		<div class="infor-all" >
			<div class="help-icon">
				<p>
					常见问题
				</p>
			</div>
			<span  @click="changeAbout()"><router-link to='/minehelpDetail' :class= "{default:bollean1,active:msg === 'aboute'}" >挖矿帮助 </router-link></span>
			<span @click="changePrivat()"><router-link to='/minehelpYuan' :class= "{default:bollean1,active:msg === 'privaty'}" >挖矿原理</router-link></span>
			
			
			
			
			<router-view class="view"></router-view>
		</div>
	</div>
</template>

<script>
import commonBaner from './commonBaner'	
export default {
	name:'price',
	data (){
		return {
			bollean1:true,
  			msg:'aboute'
		}
	},
	components:{
  		commonBaner
 },
    methods:{
  	changeAbout:function (){
  		this.msg = 'aboute';
  	},
  	changePrivat: function (){
  		this.msg = 'privaty';
  	}
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
.mine-help {
	width: 100%;
	height:auto;
	background-color: #fafafa;
}
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
 .infor-all {
	width:751px;
	height: 505px;
	margin:41px auto;
	margin-bottom: 0;
	padding-bottom: 50px;
	background:#fafafa;
}
.help-icon p {
	width:166px;
	height: 55px;
	line-height: 55px;
	color: #ffffff;
	font-size: 19px;
    text-indent:59px;
	background-image: url(../assets/icon/help-icon.png);
	background-size: 100% 100%;
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
	/*border: 1px solid #f1f1f1;*/
	background: #ffffff;
	margin-top: -1px;
}

</style>