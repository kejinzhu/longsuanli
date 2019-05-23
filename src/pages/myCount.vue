<template>
	<div>
		
	
	<div class="list-title">
					<span>可调余额</span>
					<span>（BTC）</span>
					<span>{{account}}</span>
					<button class="count-list-btun" @click="toPush('myBill')">账单</button>
					<button class="money" @click="toPush('getCion')">提币</button>
				</div>
				<div class="list-body">
					<div class="list-w">
					<ul>
						<li>
							<div class="suanli">{{hash_rate}}</div>
							<div class="suan">有效算力（TH/S）</div>
						</li>
						<li>
							<div class="suanli">{{net_income}}</div>
							<div class="suan">待确定收益（TH/S）</div>
						</li>
						<li>
							<div class="suanli">{{sunmNetIncome}}</div>
							<div class="suan">累计收益（TH/S）</div>
						</li>
					</ul>
					
					<ul>
						昨日收益
					</ul>
					<ul>
						<li>
							<p class="li-number">{{net_income}}</p>
							<p class="li-data">昨日净收益（BTC）</p>
						</li>
						<li>
							<p class="li-number">{{electricity_charge }}</p>
							<p class="li-data">昨日电费（BTC）</p>
						</li>
						
					</ul>
					<ul>
						<li>
							<p class="li-number">{{service_charge }}</p>
							<p class="li-data">昨日服务费（BTC）</p>
						</li>
						<li>
							<p class="li-number">{{per_t_rewards}}</p>
							<p class="li-data">昨日每T净收益（BTC）</p>
						</li>
						
					</ul>
					</div>
					
				</div>
			</div>
</template>

<script>
import { userInfo, userAccount, statistics, inviteUserData } from '@/api';
export default {
	data(){
		return{
			 account: 0,
		      hash_rate: 0,
		      net_income: 0,
		      sunmNetIncome: 0,
		      per_t_rewards: 0,
		      service_charge: 0,
		      electricity_charge: 0,
		      form: {
		        username: '',
		        phone: '',
		      },
		      inviteData: '',
		}
	},
	methods:{
		toPush(res){
			
			this.$router.push({path:'/'+res})
		},
		init(){
			// 获取用户信息
	    userInfo()
	      .then((res) => {
	        if (res.data.status === '1') {
	          this.form.username = res.data.data.name;
	          const phoneArr = res.data.data.tel.split('-');
	          if (phoneArr.length === 2) {
	            // 如果手机号有区号
	            this.form.phone = phoneArr[1];
	          } else {
	            // 没有区号
	            this.form.phone = phoneArr[0];
	          }
	          this.$emit('listenData',this.form.username,this.form.phone)
	        }
	      })
	      .catch();
	
	    // 获取用户余额
	    userAccount()
	      .then((res) => {
	        if (res.data.status === '1') {
	          this.account = res.data.data[0].available_balance;
	        } else if (res.data.msg === '未登录') {
	          this.$router.push('/login');
	        }
	      })
	      .catch();
	
	    // 用户统计 总收益
	    statistics()
	      .then((res) => {
	        if (res.data.status === 1) {
	          this.hash_rate = res.data.data.hash_rate;
	          this.net_income = res.data.data.net_income;
	          this.sunmNetIncome = res.data.data.sunmNetIncome || 0;
	          this.per_t_rewards = !this.hash_rate
	            ? '0'
	            : res.data.data.per_t_rewards;
	          this.service_charge = res.data.data.service_charge;
	          this.electricity_charge = res.data.data.electricity_charge;
	        }
	      })
	      .catch();
	
	
	    // 获取邀请人员信息
	    inviteUserData().then((res) => {
	      if (res.data.status === 1) {
	        this.inviteData = res.data.data;
	      } else {
	        this.$toast(res.data.msg);
	      }
	    })
	      .catch();
		}
	},
	created() {
	    this.init();
  },
  activated(){
  	this.init();
  	
  }
}
</script>

<style scoped>
.list-title{
	height: 86px;
	line-height: 86px;
	border-bottom: 2px solid #f2f2f2;
}
.list-title span:nth-child(1){
	margin-left: 32px;
	font-size: 12px;
	color: #c293f5;
}
.list-title span:nth-child(2){
	margin-left:9px;
	font-size: 12px;
	color: #c293f5;
}
.list-title span:nth-child(3){
	margin-left:9px;
	font-size: 14px;
	font-weight: 600;
	color: #8200ea;
}
.count-list-btun,.money {
	width: 67px;
	height: 30px;
	font-size: 12px;
	color: #ffffff;
	border-radius:2.5px;
}
.count-list-btun {
	margin-left: 116px;
	background: #b27cde;
}
.money {
	margin-left:24px;
	background: #7d6eff;
}
.list-body {
	width: 100%;
	height: 337px;
	background: #fbfbfb;
	overflow: hidden;
}
.list-w{
	width:507px;
	height:auto;
	margin: 0 auto;
	overflow: hidden;
}

.list-body ul {
	width:100%;
}
.list-body ul:nth-child(1){
	margin-top: 19px;
	overflow: hidden;
}
.list-body ul:nth-child(1) li{
	width: 154px;
	height: 69px;
	background:#ffffff;
	float: left;
}
.list-body ul:nth-child(1) li:nth-child(2),.list-body ul:nth-child(1) li:nth-child(3){
	margin-left:19px;
}
.suanli,.suan {
	text-align: center;
}
.suanli {
	margin-top: 16px;
	font-size: 13px;
	font-weight:600;
}
.suan {
	margin-top: 6px;
	font-size: 12px;
}
.list-body ul:nth-child(2) {
	width: 100%;
	height: 50px;
	line-height: 50px;
	margin-top: 16px;
	font-size: 14px;
	
}
.list-body ul:nth-child(3),.list-body ul:nth-child(4) {
	width: 100%;
	height:69px;
	
}
.list-body ul:nth-child(4) {
	margin-top: 10px;
}
.list-body ul:nth-child(3) li,.list-body ul:nth-child(4) li{
	width: 240px;
	height:69px;
	border: 2px solid #dacbea;
	background: #ffffff;
	float:left;
}
.list-body ul:nth-child(3) li:nth-child(2),.list-body ul:nth-child(4) li:nth-child(2){
	margin-left: 16px;
}
.li-number {
	margin-top:15px;
	margin-bottom:10px;
	font-size: 13px;
	font-weight: 600;
	text-align: center;
}
.li-data {
	text-align: center;
	font-size: 12px;
}
</style>