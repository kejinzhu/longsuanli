<template>
	<div class="count">
		<div class="count-form">
			<p class="title-count">
					<span id="icon">
						
					</span>
					{{type}}
			</p>
			<ul>
				<li>
					<img src="../assets/icon/photo.png"/>
				</li>
				<li>
					<p class="title">
						<span class="chineseMono">
							￥
						</span>
						<span class="price">
							{{CNY}}
						</span>
						<span class="mount">
						
						</span>
					</p>
					<p class="agreement"> 终身合约</p>
				</li>
				<li>
					<button :disabled="disFlag" class="reduce" @click="reduce()">—</button>
					<input class="number" type="text"  v-model="form.amount"/>
					<button :disabled="disFlag" class="add active-buy" @click="add()">+</button>
					<input class="preferential" type="text" placeholder="选填- 请填写优惠码" v-show="false"/>
				</li>
			</ul>
			<div class="count-all">
				<span class="pricr-count">总计</span>
				<span class="price-nmber">{{form.amount}}T</span>
				<span class="price-icon">￥</span>
				<span class="price-all">{{form.total_money}}</span>
				<button class="now-buy" @click="nowBuy()">立即购买</button>
			</div>
		</div>
		<form class="user-form" v-if="bollean1">
			<p class="form-title">
				<span>请填写以下信息：</span>
				<span class="star">*</span>
				<span class="cue">为必填项</span>
			</p>
			<p class="user-name">
				<label  for="name">姓名<span class="star">*</span></label>
				<input v-model="form.username" type="text" id="name"  placeholder="请输入您的真实姓名"/>
			</p>
			<p class="user-phone">
				<label>手机号<span class="star">*</span></label>
				
				<select>
					<option>中国+86</option>
				</select>
				<input v-model="form.phone" type="tel" placeholder="请输入手机号码"/>
			</p>
			<p class="user-email">
				<label for="">邮箱<span class="star">*</span></label>
				<input type="email" v-model="form.email" placeholder="13296650000@163.com"/>
			</p>
			<p class="pay-way">
				<label for="">支付方式</label>
				<input type="text" name="" placeholder="线下账户汇款" v-model="xian" disabled />
			</p>
			<p class="agree">
				<input style="background:#fbfbfb;" type="checkbox" name="" @click="check()" :checked="al"/>
				
				我已阅读并完全同意：
				<a href="#" class="" @click="goAgrement()">用户协议及产品详情规定</a>
			</p>
		</form>
		<p class="form-submit" v-if="bollean1">
			<button class="cancel" @click="cancel()">取消</button>
			<button v-bind:disabled="dis" :class="{submmit:true,'active-sub':true,dis:dis}" @click="submit()">确认并提交</button>
		</p>
		
		<img class="common-img" width="981" height="237" src="../assets/images/2-benner.png"/>
	</div>
</template>

<script>
import Utils from '../model/phoneCode.js'	
import { addOrder, userInfo} from '@/api';
export default {
	name:'detailBuy',
	data(){
		return {
			disFlag:false,
			prePhone:'0',
			version_type:'zh',
			al:false,
			userPhone:'',
			commenFlag:true,
			dis:true,
			xian: '线下账户汇款',
			countrysArr:[],
			phoneArr:[],
			bollean1:false,
			num:1,
			  CNY: '499.00',
      show_dialog: false,
      activeindex: 0,
      show_search: false,
      showmax_info: false,
      USD: 6.613,
      type: '',
      temp: '',
      emailInfo: false,
      goto_form: false,
      prePhone: '+86',
      phoneLock: false,
      prePhoneLock: true,
      hasCaac: false,
      hasCountry: false,
      discount: '',
      country_id: 37,
      nameLock: false,
      heyue: false,
      flag: true,
      type1: '',
      ok_num: false,
      xian: '线下账户汇款',
      form: {
        goods_id: undefined,
        amount: 1,
        total_money: 0,
        total_CNY: 0,
        pay_type: 2, //  1线上支付；2线下支付
        currency_type: 1, // 1人民币 2美元 3港
        coupon: '', // 优惠卷
        username: '',
        phone: '',
        email: '',
        wallet_addr: '',
        caac: '',
      },
		}
	},
	methods:{
		goAgrement(){
			this.$router.push({path:'/agreement'})
		},
		nowBuy:function (){
			this.bollean1 = true;
		},
		cancel:function (){
			this.bollean1 = false;
		},
		reduce:function (){
			if(this.form.amount > 1){
				
				this.form.amount--;
				this.form.total_money = this.CNY*this.form.amount;
			}
			
		},
		check:function(){
			
			if(!this.al){
				this.al = true;
			}else{
				this.al = false;
			}
		},
		add:function(){
			this.form.amount++;
			this.form.total_money = this.CNY*this.form.amount;
		},
		pushTo:function (){
			this.$router.push({path:'/orderForm'});
		},
		utilFn(){
			for (var i=0;i<Utils.state.phoneCode.length;i++) {
				this.countrysArr.push(Utils.state.phoneCode[i].zh+ '+' + Utils.state.phoneCode[i].code) ;
				
			}
			console.log(this.countrysArr)
		},
		   submit() {
    	
//    if (!this.canSubmit) {
//      
//      return;
//    }
     
      Object.assign(this.form, {
        version_type: this.version_type,
        mobile: `${this.prePhone}${this.form.phone}`,
      });
      const error = {
        2: {
          en: 'wrong email',
          zh: '邮箱错误',
        },
        3: {
          en: 'too many submissions',
          zh: '提交次数过多',
        },
        4: {
          en: 'wrong verification code',
          zh: '验证码错误',
        },
        5: {
          en: 'The number of purchases must not exceed 500',
          zh: '购买数量不得超过500',
        },
        6: {
          en: 'No commodity information',
          zh: '没有商品信息',
        },
        7: {
          en: 'Discount volume does not exist',
          zh: '优惠卷错误',
        },
        default: {
          en: 'submission failed',
          zh: '提交失败',
        },
        timeout: {
          en: 'submission failed, connection timed out.',
          zh: '提交失败,连接超时.',
        },
      };
      if (this.flag === false) {
        return;
      }
      this.flag = false;
      addOrder(this.form)
        .then((res) => {
          // 去支付
          if (res.data.status === 1) {
            // 判断支付方式
            this.flag = true;
            if (this.form.pay_type === 1 && res.data.url) {
              // 线上
              location.href = `${baseURL}/${res.data.url}`;
            } else {
              // 线下
//            this.$store.commit('user/SET_ORDER_ID', res.data.data.order_id);
				
              this.$router.push(
                {path: '/orderForm',
                  query: {
                    type: this.type1,
                    codeID:res.data.data.order_id
                  },
                });
            }
          } else if (res.data.status === 0) {
            // 提交错误信
            Toast({
              message: res.data.msg,
              // type: 'warning',
            });
          } else {
            Toast({
              message: error.default[res.data.data.version_type],
              type: 'warning',
            });
          }
        })
        .catch();
    }
		

		
	},
	mounted(){
		this.form.total_money = this.CNY*this.form.amount;
	}
	,
	
	created(){
		this.type = this.$route.query.type;
		this.utilFn();
		
	    if (this.$route.query.type === '6801') {
	      this.type = '6801 产品';
	      this.type1 = '6801';
	      this.form.goods_id = 3;
	      this.CNY = 499.00;
	      this.temp = 1;
	    } else if (this.$route.query.type === '7801') {
	      this.type = '7801 产品';
	      this.type1 = '7801';
	      this.form.goods_id = 5;
	      this.CNY = 499.00;
	      this.temp = 1;
	    } else if (this.$route.query.type === '无忧产品') {
	      this.form.goods_id = 6;
	      this.type1 = '无忧产品';
	      this.CNY = 999.00;
	      this.temp = 10;
	    } else if (this.$route.query.type === '7802') {
	      this.type = '7802 产品';
	      this.type1 = '7802';
	      this.form.goods_id = 8;
	      this.CNY = 499.00;
	      this.temp = 1;
	    }else if (this.$route.query.type === '6800') {
	      this.type = '6800 产品';
	      this.type1 = '7802';
	      this.form.goods_id = 8;
	      this.CNY = 0;
	      this.form.amount = 0;
	      this.temp = 0;
	      this.disFlag = true;
	    }
	    
       userInfo().then((res) => {
        if (res.data.status === '1') {
        	this.form.username = res.data.data.name;
          this.form.email = res.data.data.email;

         
         	
          const phoneArr = res.data.data.tel.split('-');
          if (phoneArr.length === 2) {
          
            // 如果手机号有区号
            this.prePhone = phoneArr[0];
            this.form.phone = phoneArr[1];
           	if (this.prePhone) {
              this.prePhoneLock = true;
            }
            
          } else {
            // 没有区号
            this.form.phone = res.data.data.tel;
          }
         
        }
      })
      .catch();
	},
	
	watch:{

		al(newval,oldval){
			
			
			if (newval) {
            	if (newval === true) {
            		
            		this.dis = false;
            		
            	}
            }else {
            	this.dis = true;
            	
            }
		},
//		userPhone(newval,oldval){
//		
//			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
//			
//          if (myreg.test(newval)) {
//          	this.commenFlag = true;
//          	if(this.al){
//          		this.dis = true;
//          	}else {
//          	this.dis = false;
//          }
//          }else {
//          	this.commenFlag = false;
//          }
//		},
	}
}	
</script>

<style scoped>
.dis {
	opacity: 0.5;
}
.count {
	width: 100%;
	min-height: 825px;
	background: #fafafa;
}
.count .count-form {
	width: 726px;
	height: 349px;
	margin-top:60px;
	margin-left: auto;
	margin-right: auto;
	background: #ffffff;
	border: 1px solid #e3e3e3;
}
.count .title-count {
	position: relative;
	top: -19px;
	left:-17px;
	width:205px;
	height:41px;
	font-size: 16px;
	font-weight: 400;
	line-height:41px;
	color: #ffffff;
	border: 1px solid #1faebb;
	background: #00d7b6;
	border-radius: 50px;
}
.count .title-count #icon {
	display: inline-block;
	width:50px;
	height:51px;
	margin-top: -7.5px;
	margin-left: -9px;
	margin-right: 5px;
	background: url(../assets/icon/b-2.png);
	background-size:110% 110% ;
	vertical-align: middle;
}
.count ul {
	width: 100%;
	height: 112px;
	margin-top: 67px;
}
.count ul li {
	float: left;
}
.count ul li:nth-child(1) img {
	width: 100px;
	height:79px;
	margin-left: 46px;
}
.count ul li:nth-child(2) p {
	color: #4800b1;
}
 .chineseMono,.mount {
	font-size: 12px;
}
.count ul li:nth-child(2) .price {
	font-size:19px;
}
.count ul li:nth-child(2) {
	margin-left: 46px;
}
.agreement {
	width: 72px;
	height: 16px;
	text-align: center;
	line-height: 16px;
	font-size: 12px;
	border: 1px solid #cbd2f4;
	background: #f0f2fe;
	border-radius: 50px 50px 50px 50px;
	margin: 25px 0 0 13px;
}
.reduce,.add{
	display: inline-block;
	width: 34px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid #9525ed;
	background: #ffffff;
	border-radius: 2.5px;
}
.add {
	margin-left: -6px;
	font-size:16px;
}
.active-buy {
	background: #9525ed;
	color: #ffffff;
}
.number {
	width:55px;
	height: 27.5px;
	margin-left: -6px;
	text-align: center;
	line-height: 27px;
	border: 1px solid #9525ed;
}
.preferential {
	display: block;
	width: 121px;
	height: 27.5px;
	margin-top: 25px;
	text-align: center;
	border: 1px solid #e9e9e9;
	background: #fafafa;
	border-radius: 2.5px;
}
.count ul li:nth-child(3) {
	margin-left: 257px;
} 
.count .count-all {
	width: 300px;
	height: 35px;
	margin-left: 433px;
	margin-top: 41px;
	
}
.pricr-count,.price-nmber,.price-icon {
	font-size: 12px;
	color: #8c55cc;
}
.price-nmber {
	display: inline-block;
	width: 15px;
}
.price-icon {
	font-weight: 600;
}
.price-all {
	display: inline-block;
	width: 46px;
	color: #6000bb;
	font-size: 17px;
	font-weight:500;
}
.count-all .now-buy {
	display: inline-block;
 	width: 86px;
 	height: 34px;
 	margin-left: 25px;
 	vertical-align:baseline;
 	font-size: 14px;
 	color: #fff;				
 	background:#D230DF;
   border-radius: 5px;
}
.common-img {
	display: block;
	margin-top: 60px;
	margin-bottom: 60px;
	margin-left: auto;
	margin-right: auto;
}
.user-form {
	width: 723px;
	height: 361px;
	margin-top: 23px;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid #e4e4e4;
	overflow: hidden;
}
.user-form .form-title {
	width:721px;
	height: 46px;
	padding-left:45px;
	line-height: 46px;
	font-size: 14px;
	background: #ffffff;
}
.user-form .star {
	font-size: 12px;
	color: #a752f0;
}
.user-form .cue {
	font-size:12px ;
}
.user-name,.user-email,.user-phone,.pay-way {
	height:34px;
	margin-top: 23px;
}
.user-name input,.user-email input,.pay-way input {
	width: 316px;
	height: 32px;
	border: 1px solid #f0f0f0;
	border-radius: 2.5px;
}
.user-form label {
	display: inline-block;
	width:157px;
	height: 34px;
	text-align: right;
	color: #7c7c7c;
	line-height: 34px;
	font-size: 12px;
	margin-right: 25px;
}
.user-form .user-phone select {
	width: 89px;
	height: 32px;
	border: 1px solid #f0f0f0;
}
.user-form .user-phone input {
	width: 221px;
	height: 32px;
	border: 1px solid #f0f0f0;
	border-radius: 2.5px;
}
input {
	text-indent:10px;
}
.agree{
	margin-left: 186px;
	margin-top: 30px;
	font-size: 12px;
}
.form-submit {
	margin-top: 37px;
	margin-left: 679px;
	margin: 37px 0 101px 690px;
}
.form-submit button{
	width: 104px;
	height: 34px;
	font-size: 15px;
	border: 1px solid #e2e2e2;
	border-radius:5px;
	background: #fafafa;
}
.form-submit .submmit {
	margin-left:37px;
}
.active-sub {
	background: #7d6eff!important;
	color: #ffffff;
}

</style>