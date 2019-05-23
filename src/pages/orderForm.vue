<template>
	
	<div class="order">
		<div class="order-success">
			<img src="../assets/icon/order-success.png"/>
			<p class="symbol-success">下单成功</p>
			<p class="odd-numbers">下单号：<span class="odd-number">{{codeId}}</span></p>
		</div>
		<div class="account-infor">
			<p class="pay-account">一. 打款帐号</p>
			<ul class="bank">
				<li>国内银行资料:</li>
				<li><span class="font-weight">开户银行 :</span> 中信银行深圳三诺大厦支行</li>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-weight">开户名 :</span> 深圳射手座信息技术有限公司</li>
				<li><span class="font-weight">银行账号 :</span> 8110301012900305902</li>
			</ul>
			<ul class="customer-attent">
				<li>注 ：*以人民币付款每T收费为{{money}}元*</li>
				<li>二. 打款时间</li>
			</ul>
			<p class="pay-time">非支票存入星期一至周五工作日15:00前存款可于即日办理。以支票存入支票存入需时两个工作天处理，客户请自行预早存入。</p>
			<ul>
				<li class="item-attent">注 ：* 客户请留意，不同类型的账户对交易及结算的存款时限可能有不同，如有疑问，请向客户主任查询*</li>
			</ul>
		</div>
		<div class="button-group">
			<button class="" @click="$router.push('/')">返回首页</button>
			<button class="active" @click="$router.push('/setting')">完善资料</button>
		</div>
		<img class="img" src="../assets/images/2-benner.png"/>
		
	</div>
	
 
</template>

<script>
export default {
	data (){
		return {
			money:'',
			codeId:''
		}
	},
	created(){
		
		this.codeId = this.$route.query.codeID;
		
         if (this.$route.query.type === '6801' || this.$route.query.type === '6801' || this.$route.query.type === '7801' || this.$route.query.type === '7802') {
	      this.money = 499;
	    
	    }
         else if (this.$route.query.type === '6800') {
	      this.money = 0.00;
	    } else if (this.$route.query.type === '无忧产品') {
	      this.money = 999.00;
	    } else {
	      this.money = 778;
	    }            
	               
			
		}
}
</script>

<style scoped>
.order {
	width: 100%;
	height:1000px;
	background: #fafafa;
}
.order .order-success {
	width: 725px;
	height: 199px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	background: #ffffff;
	border: 1px solid #f7f7f7;
}
.order .order-success img {
	display: block;
	width: 43px;
	margin-top:34px;
	margin-left: auto;
	margin-right: auto;
}
.order .order-success .symbol-success {
	height: 19px;
	margin-top: 21px;
	text-align: center;
}
.order .order-success .odd-numbers {
	height: 21px;
	margin-top: 21px;
	text-align: center;
}
.order .account-infor {
	width: 725px;
	height:324px;
	margin-top: 19px;
	margin-left: auto;
	margin-right: auto;
	background: #ffffff;
	border: 1px solid #f7f7f7;
}
.order .pay-account {
	height: 46px;
	background: #ffffff;
	padding-left: 46px;
	line-height: 46px;
	font-size: 14px;
	font-weight: 600;
}
.order .bank {
	height:113px;
	padding-left: 65px;
	font-size: 12px;
	background: #fbfbfb;
}
.order .bank li {
	height: 21px;
	line-height: 21px;
} 
.order .bank li:nth-child(1) {
	height: 43px;
	line-height: 43px;
}
.font-weight {
	font-weight: 600;
}
.order .customer-attent {
	height: 69px;
}
.order .customer-attent li:nth-child(1) {
	height: 30px;
	line-height:30px;
	padding-left: 65px;
	line-height: 30px;
	font-size: 12px;
}
.order .customer-attent li:nth-child(2) {
	height: 49px;
	font-size: 14px;
	line-height: 49px;
	font-weight: 600;
	padding-left: 46px;
}
.order .pay-time{
	height: 34px;
	padding:15px 0 15px 65px;
	font-size: 12px;
	background: #fbfbfb;
} 
.order .item-attent {
	height: 31px;
	line-height: 31px;
	font-size: 12px;
	padding-left: 65px;
}
.order .button-group {
	margin: 39px 0 0 665px;
}
.order button {
	display:inline-block;
 	width: 91px;
 	height: 34px;
 	margin-left: 37px;
 	line-height: 34px;
 	font-size: 16px;
 	background: #fbfbfb;
 	border: 1px solid #e0e0e0;
    border-radius: 5px;
}
.active {
	background: #7d6eff!important;
	color: #ffffff;
}
.img {
	display: block;
	width:975px;
	height: 237px;
	margin:62px auto;
}
</style>