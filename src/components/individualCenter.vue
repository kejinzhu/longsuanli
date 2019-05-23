<template>
	<div class="personal">
		<div class="w">
			<div class="per-left">
				<ul>
					<li>
						<div class="user-phone">
							<img src="../assets/images/usei.png"/>
						</div>
						<div class="user-title">
							<p>{{userName}}</p>
							<p>{{userPhone}}</p>
						</div>
					</li>
				<router-link class="router-count" to="/myCount" style="cursor: pointer;" :class="{back:index === 1,'font-light':indexFont === 1}" @mouseenter.native="mouseenter(1)" @mouseleave.native="changeLeave(0)" @click.native='changeBack(0,1)'>
						<span class="user-count-icon">
							
						</span>
						<span :class="{'my-count':true}">我的账户</span>
						<span class="line" v-show="true"></span>
				</router-link>
				<router-link class="router-list" to="/myLIst" style="cursor: pointer;" :class="{back:index === 2,'font-light':indexFont === 2}" @mouseenter.native="mouseenter(2)" @mouseleave.native="changeLeave(0)" @click.native='changeBack(0,2)'>
						<span class="user-count-icon2">
							
						</span>
						<span :class="{'my-count':true}">我的算力记录</span>
				</router-link>
				</ul>
			</div> 
    
    		
		
			<keep-alive>
    		<router-view class="per-right" @listenData="doData">
					
				</router-view>
    	</keep-alive>
				
			
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			flag1:true,
			index:0,
			indexFont:0,
			userName:'',
			userPhone:'',
		}
	},
	methods:{
		mouseenter(num) {
			console.log(num)
			this.index = num;
			
		},
		changeLeave(num){
			console.log(num)
			this.index = num;
			
		},
		changeBack(num1,num2){
			this.index = num1;
			this.indexFont = num2;
		},
		doData(data1,data2){
			this.userName = data1;
			this.userPhone = data2;
		},
	}
}
</script>

<style scoped>
.personal {
	width: 100%;
	height:590px;
	padding-top: 50px;
	background: #fafafa;
}
.w {
	width: 750px;
	height: auto;
	margin:27px auto;
	overflow: hidden;
}
.per-left,.per-right {
	display: block;
	float: left;
	background: #ffffff;
	border: 2px solid #f2f2f2;
}
.per-left {
	width: 145px;
	height: 427px;
}
.per-right {
	
	width:567px;
	height: 427px;
	margin-left: 16px;
}
.per-left li:nth-child(1) {
	height: 86px;
	border-bottom: 2px solid #f2f2f2;
}
.user-phone,.user-title {
	float: left;
}
.user-phone {
	width: 59px;
	height: 100%;
	
}
.user-phone img {
	width: 34px;
	height: 34px;
	margin-left: 15px;
	margin-top: 25px;
}
.user-title{
	width: 79px;
	height: 100%;
	
}
.user-title p:nth-child(1){
	margin-top: 24px;
	font-size: 13px;
	font-weight: 600;
}
.user-title p:nth-child(2){
	margin-top:6px;
	font-size: 12px;
	
}
.router-count,.router-list{
	display: block;
	height: 55px;
	line-height: 55px;
	font-size: 13px;
	color: #000000;
}
.router-count .user-count-icon {
	display: inline-block; 
	width: 19px;
	height: 13px;
	margin-left: 17px;
	background: url("../assets/images/icon2.png");
	background-size: 100% 100%;
}
.line {
	display: inline-block;
	width:2px;
	height: 10px;
	margin-left:25px;
	background: #9320ed;;
}
.my-count {
	margin-left:6px;
}
.user-count-icon2 {
	display: inline-block; 
	width: 19px;
	height: 13px;
	margin-left: 17px;
	background: url("../assets/images/icon1.png");
	background-size: 100% 100%;
}

.back {
	background:#f9f3ff!important;
	color: #9525ed!important;
}
.font-light {
	color: #9525ed!important;
}

</style>