<template>
  <div class="Invitation">
    		<common-baner></common-baner>
    		<div class="Invitation-list">
    				<div class="list-title"  :style="{backgroundImage:'url('+imgSr+')'}">
    					您已邀请 {{inviteData.count}} 位好友
    					<span class="list-frid">{{inviteData.count}} </span>
    				</div>
    				
    				<img v-if="showIs" class="Invitation-img" :src="imgSrc"/>
    				<ul v-if="!showIs">
    					<li>
    						<p>邀请账号</p>
    						<p>我的奖励</p>
    					</li>
    					<li v-for="(item, index) in data" :key="index">
    						<p>{{item.tel||item.email}}</p>
    						<p>1000T</p>
    					</li>
    					</ul>
    		</div>
    		<div class="list-butn" v-if="!showIs">
					<button class="butn-long" @click="reduce()">上一页</button>
					<button :class="{'btun-num':true,active:index2 === 1}" @click="changeIndex(1)">1</button>
					<button :class="{'btun-num':true,active:index2 === 2}" @click="changeIndex(2)">2</button>
					<button :class="{'btun-num':true,active:index2 === 3}" @click="changeIndex(3)">3</button>
					<button class="butn-long" @click="add()">下一页</button>
					<span class="pages-all">共<span pages-num>3</span>页</span>
					<span>到第</span>
					
					<input class="input-num" type="text" v-model="findIndex"/>
					页
					<button class="confirm" @click="findIndexFn()">确定</button>
		</div>
    		<div class="Invitation-ercode">
    			<div class="recode-lian">
    				 <p>复制链接，邀请好友同享好礼</p>
    				 <p>{{text}}</p>
    			</div>
    			<div class="ercode-tip" v-if="true">
    				分享即可生成个人二维码【可下载】
    			</div>
    			<div class="" v-else>
    				<span class="ercode-tip">我的邀请二维码，点击可查看大图</span>
    				<span class="ercode-I"></span>
    			</div>
    		</div>
  </div>
</template>
<script>
import { inviteEncrypt, inviteUserData} from '@/api';
import commonBaner from './commonBaner'	
import imgSrc from '../assets/images/inva00.png'	
import imgSrcF from '../assets/images/invation-02.png'	
import imgSrcT from '../assets/images/inva00.png'	
export default {

  data() {
    return {
      showIs:true,
      invite_code: '',
      inviteData: {},
      text: '',
      showImg: false, // 显示大图
      imgSrc,
      imgSrcF,
      imgSrcT,
      imgSr:'',
     flag:false,
			index2:1,
			data:[],
			 data1: [],
			 data2:[],
			 data3:[],
			 commenFlag:true,
		      pay: '',
		      goods_name: '',
		      canale: false,
		      showDialog: false,
		      code: '',
		      commenIndex:0,
		      findIndex:'',
      
    };
  },
  components:{
  		commonBaner
 },
  created() {
  	this.imgSr = this.imgSrcF;
    // 获取邀请链接
    this.text = location.origin;
    // alert(location.origin);
    inviteEncrypt().then((res) => {
      if (res.data.status === '1') {
        this.invite_code = res.data.data.invite_code;
        this.text += `/registerPhone?from=${this.invite_code}`;
      }
    })
      .catch();
      
    inviteUserData().then((res) => {
      if (res.data.status === 1) {
      	this.inviteData = res.data.data;
        let arr = res.data.data.list;
       
        this.data1 = arr.slice(0,5);
	      this.data2 = arr.slice(5,10);
	      this.data3 = arr.slice(10,15);
	      this.data = this.data1;     
        if (res.data.data.count === 0) {
          this.showIs = true;
        } else {
          this.showIs = false;
        }
      } else {
        this.$toast(res.data.msg);
      }
    })
      .catch();
  },
  methods: {
    // copyLink() {
    //   this.$refs.tex.select();// 选择对象
    //   document.execCommand('Copy');
    //   // clip(`http://localhost:8080/?${this.invite_code}`, $event);
    //   this.$toast('复制成功');现在邀请好友，就可独享10000T免费BTC云挖矿算力合约。猛戳网址：http://localhost:8080/registerPhone?from=KQprRA==，
    // },
    copyLink($event) {
      clip(`现在邀请好友，就可独享10000T免费BTC云挖矿算力合约。猛戳网址：${this.text}， 立即变现。`, $event);
    
    },
    clickImg(e) {
　　  this.showImg = true;
　　　  // 获取当前图片地址
　　　  this.imgSrc = e.currentTarget.src;
　　　},
　　　viewImg(){
　　　  this.showImg = false;
　　　},
    downimg() {
      var alink = document.createElement("a");
      alink.href = this.imgSrc;
      alink.download = 'qrcode';
      alink.click();
    },
    add (){
			var addNum = this.commenIndex;
			if (addNum<3) {
				addNum++;
			}else{
				addNum = 3;
			}
			
			this.changeIndex(addNum)
		},
		reduce(){
			var reduNum = this.commenIndex;
			if (reduNum>1) {
				reduNum--;
			}else{
				reduNum = 1;
			}
			
			this.changeIndex(reduNum)
		},
		findIndexFn(){
			if(!this.findIndex){
				return;
			}
			
			let inf = this.findIndex*1;
			
			this.changeIndex(inf)
		},
		changeIndex(num){
			
			this.commenIndex = num;
			this.index2 = num;
			
			if (num === 1) {
				if (this.data1.length === 0) {
					this.commenFlag = false;
				} else{
					this.data = this.data1;
					this.commenFlag = true;
				}
				
			} else if(num === 2){
				if (this.data2.length === 0) {
					this.commenFlag = false;
				} else{
					this.data = this.data2;
					this.commenFlag = true;
				}
				
			}else if(num === 3){
				if (this.data3.length === 0) {
					this.commenFlag = false;
				} else{
					this.data = this.data3;
					this.commenFlag = true;
				}
				
			}
		},
  },
};
</script>
<style scoped>
.Invitation {
	background: #fafafa;
	padding-bottom: 186px;
}
.Invitation-list {
	width:725px;
	height: 425px;
	padding-top: 1px;
	margin-top:83px;
	margin-left: auto;
	margin-right: auto;
	background-image: url(../assets/images/invation-bg.png);
	background-size: 100% 100%;
}
.list-title {
	position: relative;
	width:351px;
	height: 75px;
	margin-left: auto;
	margin-right: auto;
	margin-top: -34.5px;
	line-height: 75px;
	text-align: center;
	font-size: 23px;
	color: #4e3fe1;
	/*background-image: url(../assets/images/invation-02.png);*/
	background-size: 100% 100%;
}
.list-frid {
	position: absolute;
	top: 0px;
	right: 25px;
	font-size: 27px;
	font-weight: 600;
	color: #fff3c8;
}
.Invitation-img {
	display: block;
	width: 390px;
	height: 124px;
	margin: 97px auto;
}
/*账号邀请*/
.Invitation-list ul {
	width: 357px;
	height:342px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	}
.Invitation-list ul li {
	display: flex;
	justify-content: center;
}
.Invitation-list ul li p {
	width: 50%;
	text-align: center;
}
.Invitation-ercode {
	width: 726px;
	height: 240px;
	margin-top:61px;
	margin-bottom:186px;
	padding-top:56px;
	margin-left: auto;
	margin-right: auto;
	background-image: url(../assets/images/invation-bg.png);
	background-size: 100% 100%;
}
.recode-lian {
	width: 354px;
	height: 76px;
	margin-left: auto;
	margin-right: auto;
	background-image: url(../assets/backimg/ercode04.png);
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.recode-lian p{
	text-align: center;
	font-size: 12px;
}
.recode-lian p:nth-child(1){
	font-weight:600;
	margin-bottom:9px;
}
.ercode-tip {
	display: block;
	margin-top: 34px;
	text-align: center;
	color: #a74fee;
	font-weight: 600px;
}
.ercode-I {
	display: block;
	width: 54px;
	height: 54px;
	margin-top: 15px;
	
	margin-left: auto;
	margin-right: auto;
	background-image: url(../assets/backimg/ercodeI.png);
	background-size: 100% 100%;
}
/*分页器按钮组*/
.list-butn {
	width:725px;
	margin: 0 auto;
	margin-top: 46px;
	display: flex;
	justify-content: flex-end;
}
.list-butn button {
	background: #fefefe;
	margin-left: 6px;
	border: 1px solid #eaeaea;
	border-radius: 2.5px;
}
.butn-long {
	display: inline-block;
	width:57px;
	height:22px;
}
.btun-num,.input-num {
	width:27px;
	height:22px;
	text-align: center;
	line-height:22px;
}
.confirm {
	width: 46px;
	height:22px;
}
.pages-all {
	margin: 0 5px 0 5px;
}
.input-num {
	margin: 0 4px 0 4px;
	border: 1px solid #eaeaea;
}
.active {
	background: #9525ed!important;
	color: #ffffff!important;
}
button {
	cursor: pointer;
}

</style>
