<template>
	<div class="get-cion">
		<div class="w">
			<p>
				<span>
					
						提币
					
					
				</span>
				<span>注：可用余额小于0.01BTC时无法提币</span>
				<span id="icon-circle">
					
				</span>
			</p>
			<p>
				<span>提币地址</span>
				<span>如何获取钱包地址？</span>
			</p>   
			<input v-model="address" type="text" class="wallet" placeholder="请填写正确的钱包地址，如：uxueygthruwb"/>
			<p class="common-style">
				<span>提币数量 (BTC)</span>
				<span>可用余额0.00077155BTC</span>
			</p>
			<input v-model="mont" type="text" class="wallet" placeholder="最多可提0.00077155BTC"/>
			<p class="common-style">
				<span>手续费 (BTC)</span>
				
			</p>
			<input v-model="service" type="text" class="wallet" placeholder="0"/>
			<p class="common-style">
				<span>到账数量 (BTC)</span>
				<span>提币数量-手续费</span>
			</p>
			<input v-model="profitS" type="text" class="wallet" placeholder="0"/>
			<p class="bottom-butn">
				<button class="confirm-cion" @click="shouFrame()()">确认提币</button>
				<span class="get-data">查询明细>></span>
			</p>
			
		</div>
		<div class="frame-all" v-show="flag">
			<div class="frame-center">
				<div class="icon">
					<span></span>
				</div>
				<p>
					{{mont}}
					<span id="cion-unit">BTC</span>
				</p>
				<p>待平台发出</p>
				<p>钱包地址</p>
				<p>{{address}}</p>
				<p>
					<button class="cancel" @click="cancelFrame()">取消</button>
					<button class="confirm" @click="addExt()()">确认</button>
				</p>	
			</div>
		</div>
	
	</div>
</template>

<script>
import { userAccount, addExt, extList } from '@/api';
export default {
	data (){
		return {
			cionNum:0,
			flag:false,
			 address: '',
		      data: {},
		      count: '',
		      mont: '',
		      button: 'button',
		      data1: [],
		      list: false,
		      link: 'link active',
		      page: 1,
		      loading: false,
		      finished: false,
		}
	},
	 created() {
	    this.userAccount();
	  },
	 computed: {
    service() {
      if (this.mont >= 0.01 || this.mont <= 0) {
        return 0.00;
      }
      return this.mont * 0.005;
    },
    profitS() {
      if (this.mont <= 0) {
        return 0.0;
      }
      return this.mont - this.service;
    },
  },
   
  methods: {
  	shouFrame(){
  		
//	  	 if (this.count < 0.01) {
//		        alert('您的资产小于0.01，无法提币0');
//		        return;
//		      }
//	      if (this.mont === '' || this.mont > this.count || this.mont === 0) {
//	        alert('请输入正确的提币数量');
//	        
//	        return;
//	      }
		  this.flag = true;
		},
		cancelFrame() {
			this.flag = false;
		},
		commite() {
			this.flag = false;
		},
    userAccount() {
      
      userAccount()
        .then((res) => {
          if (res.data.status === '1') {
            if (res.data.msg === '已登录') {
              this.data = res.data.data;
              this.count = (res.data.data[0].available_balance - 0).toFixed(8);
            } else {
             alert(res.data.msg);
            }
           
          } else {
            alert(res.data.msg);
          }
          
        })
        .catch(() => {
          
        });
    },
    statusName(item) {
      if (item === 0) {
        return this.$t('currency.cancel');
      } else if (item === 1) {
        return this.$t('currency.examine');
      } else if (item === 2) {
        return this.$t('currency.unpaid');
      }
      return this.$t('currency.ok');
    },
    chack() {
      if (this.list === true) {
        this.list = false;
        this.link = 'link active';
      } else {
        this.list = true;
        this.link = 'link';
      }
    },
    bgColor() {
      if (this.address !== '') {
        this.button = 'button active';
        // if(this.count<=0.001) {
        //   this.button = 'button'
        // } else {

        // }
      } else {
        this.button = 'button';
      }
    },
    extList() {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        message: this.$t('calculation.loading'),
      });
      extList({
        page: this.page,
      })
        .then((res) => {
          this.loading = false;
          if (res.data.status === '1' || res.data.status === 1) {
            if (res.data.msg === '成功') {
              this.$toast.clear();
              // this.data1 = res.data.data;
              if (this.page === res.data.data.last_page) {
                this.finished = true;
              }
              if (!res.data.data.data.length) {
                this.finished = true;
              }
              this.page += 1;
              this.data1 = this.data1.concat(res.data.data.data);
              // this.finished = true;
            }
          } else {
            Toast(res.data.msg);
          }
        })
        .catch(() => {
          this.loading = false;
          this.$toast.clear();
        });
    },
    addExt() {
    	
   
      addExt({
        coin_num: this.mont,
        poundage: this.service,
        pay_num: this.profitS,
        wallet_addr: this.address,
      })
        .then((res) => {
          if (res.data.status === '1' || res.data.status === 1) {
            this.$toast.clear();
            this.extList();
            this.userAccount();
            this.mont = '';
            alert('提币成功');
            this.$router.push('/asset');
          } else {
          	
            alert(res.data.msg);
          }
        })
        .catch(() => {
          alert('网络不好')
        });
    },
  },
}
</script>

<style scoped>
.get-cion {
	width: 569px;
	height:512px;
	background:#ffffff;
}
.w {
	width: 476px;
	height: 100%;
	margin: 0 auto;
}
.get-cion p:nth-child(1){
	position: relative;
	height: 83px;
	line-height: 83px;
}

#icon-circle {
	position: absolute;
	top: 25px;
	left:24px;
	z-index: 0;
	display: inline-block;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #f7f7ff;
}
.get-cion p:nth-child(1) span:nth-child(1){
	position: relative;
	z-index: 9;
	font-size: 14px;
	font-weight: 600;
	color: #9425ed;
}
.get-cion p:nth-child(1) span:nth-child(2){
	margin-left:31px;
	font-size: 12px;
	color: #b77af3;
}
.get-cion p:nth-child(2) span:nth-child(1){
	font-size:14px;
	font-weight: 600;
	color: #6d6d6d;
}
.get-cion p:nth-child(2) span:nth-child(2){
	margin-left:279px;
	font-size: 12px;
	color: #e07fe8;
}
.wallet{
	display: block;
	width:473px;
	height:32px;
	margin-top: 12px;
	text-indent: 5px;
	border: 1px solid #d7d7d7;
	border-radius:2.5px;
}
.common-style {
	margin-top: 23px;
	overflow: hidden;
}
.common-style span:nth-child(1) {
	float: left;
	font-size:14px;
	font-weight: 600;
	color: #6d6d6d;
}
.common-style span:nth-child(2) {
	float: right;
	margin-left:231px;
	font-size: 12px;
	color: #bfbfbf;
}
.bottom-butn{
	margin-top:30px;
	overflow:hidden;
}
.confirm-cion {
	float: left;
	width: 100px;
	height: 34px;
	cursor: pointer;
	background: #7d6eff;
	border-radius: 5px;
	font-size:16px;
	color: #ffffff;
}
.get-data{
	float: right;
	margin-top: 15px;
	color: #a79dfe;
	font-size: 12px;
	cursor: pointer;
}
body,html {
	width: 100%;
	height: 100%;
}
.frame-all {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.5);
}
.frame-center{
	width: 375px;
	height: 337px;
	background: #ffffff;
	margin:194px auto;
	border-radius: 5px;
	overflow: hidden;
}
.icon {
	margin-top: 51px;
	text-align: center;
}
.frame-center .icon span {
	display: inline-block;
	width: 31px;
	height: 31px;
	background-image: url(../assets/icon/confirm-ion.png);
	background-size: 100% 100%;
}
.frame-center p:nth-child(2){
	margin-top: 41px;
	text-align: center;
	font-size: 15px;
	color: #9bb4ae!important;
}
#cion-unit {
	font-size: 12px;
	color: #9bb4ae!important;
}
.frame-center p:nth-child(3){
	margin-top:10px;
	text-align: center;
	font-size: 12px;
	color: #d9d9d9;
}
.frame-center p:nth-child(4){
	height: 1.5px;
	line-height: 1.5px;
	margin-top:30px;
	text-align: center;
	font-size: 12px;
	color: #d9d9d9;
	background-image: url(../assets/icon/frame-back.png);
	background-size: 100% 100%;
}
.frame-center p:nth-child(5){
	margin-top:10px;
	text-align: center;
	font-size: 12px;
	color: #9e9e9e;
}
.frame-center p:nth-child(6){
	margin-top:41px;
	text-align: center;
	
}
.cancel,.confirm {
	display: inline-block;
	width: 101px;
	height: 33px;
	font-size: 16px;
	cursor: pointer;
	border-radius:5px;
}
.cancel {
	border: 1px solid #ebebeb;
	background: #ffffff;
}
.confirm {
	margin-left: 34px;
	background: #7972f6;
	color: #ffffff;
}

</style>