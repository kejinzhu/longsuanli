<template>
	<div class="price">
			<div class="baner">
					<common-baner></common-baner>
			</div>
			<div class="data_buy">
				<div class="swiper-container">
				<div class="swiper-wrapper">
								<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="data_sale">在售</span>
														<ul>
															<li>
																<span>¥</span>
																<span>499.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC 7801 
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button @click="pushTo('7801')">去抢购</button>
															</li>
															<li @click="excavate('7801')">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="data_sale">在售</span>
														<ul>
															<li>
																<span>¥</span>
																<span>499.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																 BTC 7802 
															</li>
															<li >终身合约</li>
															<li>7月20号产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button  @click="pushTo('7802')">去抢购</button>
															</li>
															<li  @click="excavate('7802')">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="data_sale">在售</span>
														<ul>
															<li>
																<span>¥</span>
																<span>999.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC 无忧产品
															</li>
															<li >终身合约</li>
															<li>7月20号产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button  @click="pushTo('无忧产品')">去抢购</button>
															</li>
															<li @click="excavate('无忧产品')">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="now_sale">限时活动</span>
														<ul>
															<li>
																<span>¥</span>
																<span>0.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC 6800
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button :disabled="disabled" :class="{disabe:disabled}"  @click="ContractNew('6800')">{{toBuy}}</button>
															</li>
															<li @click="excavate('6800')">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="now_sale">限时活动</span>
														<ul>
															<li>
																<span>¥</span>
																<span>0.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC 6807 
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>每个用户只能领取一次</li>
															<li>
																<button :disabled="disabled0" :class="{disabe:disabled0}" @click="receiveIncome()">{{helpful}}</button>
															</li>
															<li @click="$router.push('/excavateInfoOne');">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="will_sale">售罄</span>
														<ul>
															<li>
																<span>¥</span>
																<span>499.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC6801
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button disabled="disabled" class="disabe">已售罄</button>
															</li>
															<li @click="excavate('6801')">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="will_sale">售罄</span>
														<ul>
															<li>
																<span>¥</span>
																<span>688.00</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC5801
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button disabled="disabled" class="disabe">已售罄</button>
															</li>
															<li  @click="$router.push('/excavate2');">产品详情<span id="arrow">></span></li>
															<li
																></li>
															<li></li>
														</ul>
												</div>
												<div class="swiper-slide">
														<div class="phone">
																<img src="../assets/icon/photo.png" alt="">
														</div>
														<span class="will_sale">售罄</span>
														<ul>
															<li>
																<span>¥</span>
																<span>778.00起</span>
																<span>1TH/S</span>
															</li>
															<li>
																<span class="b"></span>
																BTC 5802
															</li>
															<li >终身合约</li>
															<li>7月9日产品生效</li>
															<li>售完为止，先到先得</li>
															<li>
																<button disabled="disabled" class="disabe">已售罄</button>
															</li>
															<li @click="$router.push('/excavate');">产品详情<span id="arrow">></span></li>
															<li></li>
															<li></li>
														</ul>
												</div>
												
										</div>
										<div class="swiper-button-prev"><</div>
										<div class="swiper-button-next">></div>
														
							</div>

							</div>	
							<div class="fo">
								<router-view/>
							</div>		
										
			</div>
			
	
</template>

<script>
import commonBaner from './commonBaner'	
import { goodsInfo, receiveNumber, receiveIncome, statusNumber } from '@/api';
export default {
	name:'price',
	data (){
		return {
			 helpful: '领取',
     		 toBuy: '抢购',
     		 disabled:false,
     		 disabled0:false,
		}
	},
	components:{
  		commonBaner
  }
	,
	methods:{
		init:function (){
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				slidesPerView : 3,
				spaceBetween :50,
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				
		})        

		},
		pushTo:function (a){
			
			if(this.$store.state.isLogin === true){
				this.$router.push({path:'/datailBuy',query:{type: a}})
			}else {
				this.$router.push({path:'/login'})
			}
			
		},
		excavate(a) {
      this.$router.push({
        path: '/excavateInfo',
        query: {
          type: a,
        },
      });
    },
    toHuo(a) {
      if (this.isLogin) {
        this.$router.push({
          path: '/ContractHuo',
          query: {
            type: a,
          },
        });
      } else {
        this.$router.push('/login');
      }
    },
    ContractNew(a) {
    	
      if (this.toBuy === '已购买') {
        return true;
      }
      if (this.$store.state.isLogin === true) {
        this.$router.push({path:'/datailBuy',query:{type: a}})
      } else {
        this.$router.push({path:'/login'})
      }
      return true;
    },
    receiveNumber() {
      receiveNumber({ type: 1 })
        .then((res) => {
        
          if (res.data.data - 0 >= 1) {
          	this.disabled0 = true;
            this.helpful = '已领取';
          } else {
            this.over = 'fr';
            this.disabled0 = false;
          }
        })
        .catch(() => {
          Toast('网络开小差了哦');
        });
    },
    statusNumber() {
      statusNumber({ goods_id: 4 })
        .then((res) => {
          if (res.data.data.all - 0 >= 1) {
            this.disabled = true;
            this.toBuy = '已购买';
          } else {
            this.disabled = false;
            this.toBuy = '去抢购';
          }
        })
        .catch(() => {
          Toast('网络开小差了哦');
        });
    },
    receiveIncome() {
      if (this.helpful === '已领取') {
        return;
      }
      receiveIncome({ type: 1 })
        .then((res) => {
        		
          if (res.data.msg === '成功') {
          	alert('领取成功，请到个人中心查看收益账单')
            
            this.disabled0 = true;
            this.helpful = '已领取';
          } else {
          	alert(res.data.msg)
           
          }
        })
        .catch(() => {
          Toast('网络开小差了哦');
        });
    },
	},
	mounted (){
		this.init();
	},
	created() {
		
	    this.receiveNumber();
	    this.statusNumber();
	  
//  document.getElementsByClassName('van-swipe__track').width = `${(9.273 +
//    0.667) *
//    8}rem`;
//  goodsInfo({ goods_id:3})
//    .then((res) => {
//      if (res.data.status === 1) {
//        this.data = res.data.data;
//      }
//    })
//    .catch({});
  },
   activated (){
   	
  	this.receiveNumber();
	this.statusNumber();
  }
  
 
  }

</script>

<style scoped>
button {
	cursor: pointer;
}
.price {
  background: #fafafa;
}
.baner{
  width:100%;
  height:507px;
}
.baner img {
  width: 100%;
  height: 100%;
}
.data_buy {
  width:100%;
  height:566px;
  background:url(../assets/images/beijing.png);
  background-size: 100% 100%;
  padding-top: 73px;
 
}
.swiper-container {
  width: 846px;
  height: 404px;
  padding-top: 50px;
  
}

.swiper-slide {
  background: #ffffff;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,.swiper-button-next{
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: #d1c0e2;
  text-align: center;
  line-height: 29px;
  font-weight:600; 
}
.data_buy .data_sale {
  display: inline-block;
  width: 41px;
  height: 20px;
  background-color: #7a72f9;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
}
.data_buy .phone {
  display: inline-block;
  width: 96px;
  height: 81px;
  position: absolute;
  left: 78px;
  top:-38px;
}
.data_buy .phone img {
  width: 100%;
  height: 100%;
}
.data_buy ul {
  margin-top: 75px;
}
.data_buy ul li:nth-child(1) {
  color: #5e10b7;
  text-align: center;
}
.data_buy ul li:nth-child(1) span:nth-child(1){
  font-size: 7px;
}
.data_buy ul li:nth-child(1) span:nth-child(2){
  font-size:16px;
  font-weight: 600;
}
.data_buy ul li:nth-child(1) span:nth-child(3){
  font-size:9px;
 }
 .data_buy ul li:nth-child(2){
   width: 89px;
   height:19px;
   margin: 19px auto;
   text-align: center;
   border: 1px solid #bcc4ec;
   border-radius:50px 50px 50px 50px;
 }
 .data_buy .b {
   display: inline-block;
   width: 21px;
   height: 21px;
   margin-top: -2.5px;
   margin-left: -10px;
   vertical-align: top;
   background: url(../assets/icon/b.png);
   background-size: 110% 115%;
 }
 .data_buy ul li:nth-child(3) {
  margin-top: 19px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #2b1149;
 }
 .data_buy ul li:nth-child(4) {
  margin-top: 7px;
  text-align: center;
  font-size: 12px;
 }
 .data_buy ul li:nth-child(5) {
   display: block;
   width: 120px;
   height: 15px;
   margin-top: 50px;
   margin-left: auto;
   margin-right: auto;
   font-size: 12px;
   text-align: center;
   color: #9460cf;
   line-height:15px;
   border: 1px solid #9460cf;
   border-radius: 50px 50px 50px 50px; 
 }
 .data_buy ul li:nth-child(6)  button {
 	  display: inline-block;
 		width: 135px;
 		height: 39px;
 		margin-top: 31px;
 		margin-left: auto;
 		margin-right: auto;
 		font-size: 16px;
 		color: #fff;
 		
	    background: #6723b2; /* 标准的语法 */
	  	border-radius: 5px;
 }
.data_buy ul li {
	text-align: center;
}
.data_buy ul li:nth-child(7) {
	font-size:12px ;
	margin-top: 16px;
}
.data_buy ul #arrow {
	display: inline-block;
	width: 15px;
	height: 15px;
	transform:rotate(90deg);
 -ms-transform:rotate(90deg); 	/* IE 9 */
-moz-transform:rotate(90deg); 	/* Firefox */
-webkit-transform:rotate(90deg); /* Safari 和 Chrome */
 }
  .swiper-slide {
  	transition: all .5s linear; 
  	border: 1px solid transparent;
  }
 .swiper-slide:hover {
 		transform: scale(1.05);
 		border: 1px solid #afaafb;
 }
.will_sale,.now_sale {
		display: inline-block;
		position: absolute;
		top: 0;
		width: 54px;
		height: 17px;
		font-size: 12px;
		text-align: center;
}
.will_sale {
	background: #33d3b7;
}
.now_sale {
	background: #ea1999;
}
.disabe {
	opacity: 0.5;
}
.fo {
	width: 100%;
	min-height:112px;
	background: #fff;
	overflow: hidden;
	background: #fafafa;
}
</style>