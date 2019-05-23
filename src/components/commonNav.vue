<template>
	<div class="nav">
			<ul :class="{scrollBack:flagColor}">
				<li><span class="nav-icon"></span></li>
				<li class="butt" id="first">
					 <router-link to="/" :class= "{scrolColor:flagColor}">
						 首页
					 	<div class="line"></div>
						<div class="mask"></div>
					 </router-link>
					
				</li>
				<li class="butt">
					 <router-link to="/price" :class= "{scrolColor:flagColor}">
					 	价格信息
						 <div class="line"></div>
						 <div class="mask"></div>
					</router-link>
					
				</li>
				<li class="butt">
					 <router-link to="/mineHelp" :class= "{scrolColor:flagColor}">
					 	挖矿帮助
					 	<div class="line"></div>
						<div class="mask"></div>
					 </router-link>
					
				</li>
					<li class="butt">
					 <router-link to="/tool" :class= "{scrolColor:flagColor}">
					 	应用工具
					 	<div class="line"></div>
						<div class="mask"></div>
					 </router-link>
					
				</li>
				<li class="butt">
					 <router-link to="/invitation" :class= "{scrolColor:flagColor}">
					 	邀请计划
					 	<div class="line"></div>
						<div class="mask"></div>
					 	
					 </router-link>
					
				</li>
				<li class="butt">
					 <router-link to="/publicAnnounce" :class= "{scrolColor:flagColor}">
					 	公告信息
					 	<div class="line"></div>
						<div class="mask"></div>
					 </router-link>
					
				</li>
				<li v-if="$store.state.flag" style="margin-left: 15%;"><button @click="login()" :class= "{scrolColor:flagColor}">登陆</button></li>
				<li v-if="$store.state.flag"><button @click="goRegister()" :class= "{scrolColor:flagColor}">注册</button></li>
				<li v-if="$store.state.flag2" style="margin-left: 12.5%;width: 160px;cursor: pointer;" @click="$router.push({path:'/individualCenter'})"><span id="use-header" ></span><span id="useCount" :class= "{scrolColor:flagColor}">13436514340</span></li>
				<li v-if="$store.state.flag2"><span class="setting" @click="goSetting()"></span></li>
			</ul>
			
		</div>
</template>

<script>
	
export default {
  	name: 'HelloWorld',
  	data (){
		return {
			flag1:true,
			flag2:false,
			useCount:'13436514340',
			flagColor:true,
			scroll:0
		}	
	},
	methods:{
		login(){
			this.$router.push({path:'/login'})
		},
		goRegister(){
			this.$router.push({path:'/register'})
		},
		goSetting(){
			this.$router.push({path:'/setting'})
		},
		scrollBack(){
			
		}
	},
	mounted(){
		window.addEventListener('scroll',this.scrollBack)
	}
		
}
</script>

<style scoped>
.scrollBack {
	background-color:rgba(255,255,255,.91) ;
}
.backColor {
	color: #000000!important;
}
	.nav {
	width: 100%;
	height: 60px;
	position: fixed;
	top: 0;
	left: 0;
	z-index:999;
}
.nav ul {
	overflow: hidden;
	padding-left: 21%;
	border-bottom: 1px solid #fafafa;
}
.nav ul li {
	width: 69px;
	height: 60px;
	text-align: center;
	line-height: 60px;
	float: left;
	margin-left: 1%;
	position: relative;
}
.scrolColor{
	color: #000;
}
.nav ul li .nav-icon {
	display: inline-block;
	width:22px;
	height:25px;
	background-image: url(../assets/icon/logo-base-infor.png);
	background-size:100% 100% ;
	margin-top:19px;
}
.nav ul li button {
	width: 46px;
	height: 21px;
	background: #6f1bce;
	border-radius: 10%;
	color: #fff;
}
.nav ul li .a {
	display: inline-block;
	position: relative;
	width: 100%;
	height: 100%;
	
}
.nav ul .line {
	width: 69px;
	height:4px;
	background: transparent;
	position:absolute;
	top: 0;
	left: 0;
	z-index: 999;
}
.nav ul .mask {
	width: 69px;
	height:56px;
	background:#000;
	opacity: 0.2;
	position:absolute;
	top: 4px;
	left: 0;
	z-index: 999;
	display: none;
}
#use-header {
	display: inline-block;
	vertical-align:middle;
	width: 15px;
	height: 15px;
	background:url(../assets/icon/setting.png);
	background-size: 100% 100%;
	cursor: pointer;
}
#useCount {
	display: inline-block;
	width: 25px;
	height: 15px;
	margin-left: 10px;
	margin-right: 10px;
	line-height: 15px;
	font-size: 12px;
	/*color: #000000;*/
}
.setting {
	display: inline-block;
	width: 15px;
	height: 15px;
	background: url(../assets/icon/setting2.png);
	background-size: 100% 100%;
	position: relative;
	top:3.9px;
	cursor: pointer;
}
</style>