<template>
	<div >
		
	
	<div class="detail">
		<ul>
			<li>
				<p class="title-detail">
					<span id="icon">
						
					</span>
					 BTC{{type}}
				</p>
			</li>
			
			<li>
				<p class="title">
					<span class="outCirl"><span class="inCirl"></span></span>产品单位
				</p>
				<p class="content">每份产品代表矿机{{count}}的算力{{countInfo}}。</p>
				
			</li>
			<li>
				<p class="title">
					<span class="outCirl"><span class="inCirl"></span></span>产品生效
				</p>
				<p class="content">
					 当您提交订单且在24小时内按照订单金额付款(0元购商品无需转账付款),并回传付款凭证后，我们的客服人员会核对收款状态，确认您的付款到账后，则视为您购买产品成功，您成功购买的“BTC {{type}}”产品{{timer}}</p>
				</p>
				
			</li>
			<li>
				<p class="title">
					<span class="outCirl"><span class="inCirl"></span></span>退款服务
				</p>
				<p class="content">
					"BTC {{type}}"产品为终身合约，一旦确认购买并付款，便不接受任何形式退款要求，直至产品终止。
				</p>
			</li>
			<li>
				<p class="title">
					<span class="outCirl"><span class="inCirl"></span></span>收益保障
				</p>
				<p class="content">
					因币价波动，以用户购买合约生效起12个月后的2019年7月24日零点BTC实时币价计算，若累计净收益不足买入价，则由平台使用BTC补偿剩余差价，从而确保用户的收益不受币价波动造成的损失。
				</p>
			</li>
			<li>
				<p class="title">
					<span class="outCirl"><span class="inCirl"></span></span>电力费用
				</p>
				<p class="content">
					每份产品功耗为 131 W，电费单价为CNY 0.55 元/kW·h，每T每日总电费为CNY1.73 元。"BTC{{type}}"产品挖矿产品的电力成本可能由于国家政策及电力成本的变化而波动，深圳射手座信息技术有限公司将保留调整电费的权利。
				</p>
			</li>
			
		</ul>
		<button class="but" @click="pushTo()">去抢购</button>
	  </div>
	  <img class="img" src="../assets/images/2-benner.png"/>
	</div>
</template>

<script>
import { goodsInfo, contractFind, statusNumber } from '@/api';
export default {
	name:'detailBuy',
	data(){
		return {
			 data: '',
		      data2: '',
		      type: '',
		      count: '1T',
		      countInfo: '',
		      buttonFlag: true,
		      profit: false, // 详情说明显示调整
		      timer: '自北京时间2018年6月20日24:00时起生效。',
		}
	},
	methods:{
		pushTo:function (){
			var a = this.$route.query.type
			this.$router.push({path:'/countBuy',query:{type: a}})
		}
	},
	created(){
		  this.type = this.$route.query.type;
    if (this.type === '6801') {
      this.timer = '自北京时间2018年6月20日24:00时起生效。';
      this.count = '1T';
      this.buttonFlag = false;
    } else if (this.type === '6800') {
      // this.timer = '即日生效。';
      this.timer = '自北京时间2018年7月15日00:00时起生效。';
      this.count = '100G';
    } else if (this.type === '7801') {
      this.timer = '自北京时间2018年7月09日24:00时起生效。';
      this.count = '1T';
    } else if (this.type === '无忧产品') {
      this.timer = '自北京时间2018年7月25日24:00时起生效。';
      this.count = '1T';
      this.countInfo = ',10T起售';
      this.profit = true;
      // this.buttonFlag = false;
    } else if (this.type === '7802') {
      this.timer = '自北京时间2018年7月20日24:00时起生效。';
      this.count = '1T';
    }
    this.statusNumber();
    // this.type;
    goodsInfo({ goods_id: 3 })
      .then((res) => {
        if (res.data.status === 1) {
          this.data = res.data.data;
        }
      })
      .catch();
    contractFind()
      .then((res) => {
        if (res.data.status === 1) {
          this.data2 = res.data.data;
        }
      })
      .catch();
	}
}
</script>

<style scoped>
.detail {
	width: 727px;
	min-height:541px;
	margin-top: 43px;
	margin-left: auto;
	margin-right: auto;
	background: #ffffff;
	border: 1px solid #e3e3e3;
}
.detail .title-detail {
	position: relative;
	width:179px;
	height: 23px;
	font-size: 16px;
	font-weight: 400;
	line-height:23px;
	border: 1px solid #9aa6e2;
	background: #f0f2fc;
	border-radius: 50px;
}
.detail .title-detail #icon {
	display: inline-block;
	width:29px;
	height:30px;
	margin-top: -4.5px;
	margin-left: -4px;
	margin-right: 5px;
	background: url(../assets/icon/b-2.png);
	background-size:110% 110% ;
	vertical-align: middle;
}
.detail ul li{
	margin-left: 70px;
	margin-top:19px;
	padding-right: 79px;
}
.detail ul li:nth-child(1) {
	margin-left: 34px;
	margin-top: 31px;
}
.detail .outCirl {
	display: inline-block;
	width: 16px;
	height: 16px;
	text-align: center;
	line-height:16px;
	border: 1px solid #e1daea;
	border-radius: 50%;
	/*vertical-align: middle;*/
	margin-right: 7px;
}
.detail .inCirl {
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #6800c4;
	border-radius: 50%;
}
.detail .title {
	
	color: #6b2ab8;
	font-size:14px;
}
.detail .content {
	margin-top: 11px;
	margin-left: 24px;
	font-size: 7px;
	color: #969696;
}
.detail .but {
	display: block;
 	width: 135px;
 	height: 39px;
 	margin:31px auto;
 	font-size: 16px;
 	color: #fff;				
 	background: #bf44d5;
   border-radius: 5px;
}
.img {
	display: block;
	width:975px;
	height: 237px;
	margin:62px auto;
}
</style>