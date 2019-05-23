<template>
	<div id="wrap">
			
		    <div id="main">
		        <div id="page1" class="page" style="height: 100vh;">
		        	
		        	<div class="shutter" style="padding: 0;margin: 0;">
					    <div class="shutter-img" style="">
   <a  data-shutter-title="Iron Man"><img src="../assets/images/banner.png" alt="#"></a>
   <a data-shutter-title="Super Man"><img src="../assets/images/link.jpg" alt="#"></a>
					      <a  data-shutter-title="The Hulk"><img src="../assets/images/link0.jpg" alt="#"></a>
					       
					    </div>
					    <ul class="shutter-btn">
					      <li class="prev"></li>
					      <li class="next"></li>
					    </ul>
				    
				  </div>
		        </div>
		        <div  id="page2" class="page" style="background:#fff;margin-" >
		        	<div class="w">
		        		 <div class="title">
		        		 		我们的优势
		        		 </div>
		        		 <ul class="ourPhoto">
		        		 	<li></li>
		        		 	<li></li>
		        		 	<li></li>
		        		 	<li></li>
		        		 </ul>
								 <ul class="prerance">
									 <li>
										  <p>即买即挖</p>
										 	<p>立享收益</p>
									 </li>
									 <li>

										 <p>一次性支付</p>
										 <p>无额外费用</p>
									 </li>
									 <li>
										 <p>专业运维</p>
										 <p>一站式服务</p>
									 </li>
									 <li>
										 <p>稳定可靠</p>
										 <p>安全省心</p>
									 </li>
								 </ul>
								 <button class="butn">立即体验</button>
		        	</div>

		        </div>
		        <div id="page3" class="page">
							<div class="w">
								<div class="title">
		        		 		我们的优势
		        		 </div>
				<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide v-for="(item,index) in data1" :key="index">
				    	<div class="swiper-div">
				    		<img :src="item.images"" class="swiper-img"/>
				    		<p class="swiper-p">
				    			{{item.text}}
				    		</p>
				    	</div>
				    </swiper-slide>
				   
					
				   
				    
				    <div class="swiper-button-prev" slot="button-prev"><</div>
				    <div class="swiper-button-next" slot="button-next">></div>
				   
				  </swiper>

							</div>
						</div>
		        <div id="page4" class="page">
							 <button>查看我们的定价</button>
							 <div class="photo_foot"><img src="../assets/images/2-benner.png" alt=""></div>
							
				</div>
		    </div>
		    
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import images1 from '../assets/images/swiper-image1.png';
import images2 from '../assets/images/swiper-image2.png';
import images3 from '../assets/images/swiper-image3.png';
import images4 from '../assets/images/swiper-image4.png';
import images5 from '../assets/images/swiper-image5.png';
export default {
	name:'indexFirst',
	 components:{
	  	
    swiper,
    swiperSlide
  	},
	data (){ 
		return {
			images1,
			arr:[],
			   data1: [
        {
          images: images1,
          text:
            '龙算力专业级算力提供商，致力于为用户打造新型区块链技术生态；在北美、北欧中亚及东南亚等地区均设有云算力中心，不仅拥有超强算力服务器研发能力，更有全球排名前十矿场做后备支持。秉承“超算时代，唾手可得”的服务理念，自2018年5月上线以来，龙算力始终以简单便捷的功能、安全稳定的产品以及高效贴心的服务征服用户。在算力持有方面，龙算力长期稳居世界前列，而多币种的云算力挖矿合约服务，也为用户提供了更多投资可能。“链上科技，共享为先”龙算力以自身优势驱动“共享经济与区块链技术”有机融合，开创区块链技术共享新时代。',
        },
        {
          images: images2,
          text:
            '雪豹 A1，真正的工业级BTC矿机，拥有史诗级超强核心算力，与全球知名的专业矿机芯片生产商Bitfury联合生产，算力高达49T；采用全球专业顶级芯片生产商生产的16纳米FinFET制程芯片，单颗芯片算力达到惊人的84.1 GH/s，在创造了单位时间挖矿数量新纪录的同时，其2.8度的每T日均耗电量，也占据行业先锋地位。',
        },
        {
          images: images3,
          text:
            '雪豹E3，高性能工业级矿机，内置特殊软件，可根据需求选择“ETH、ETC、ZEC、XMR”等不同币种进行挖矿。做工精良、8卡直插，不仅有效地保证了算力稳定在230M±5%，更通过独创的通风道设计，将功耗控制在1160W±10%；再加之，可立可卧的专业机箱，直击市场痛点，引领了全球矿机制造的革新之路。',
        },
        {
          images: images4,
          text:
            '矿场：根据不同地区、不同国家用户需求，目前已在美国、加拿大、欧洲、乌克兰、吉尔吉吉斯坦、中国以及东南亚等地区，分别部署了矿场资源；200万有效机位，在规避政策风险的同时，也以其超低电费、超贴心服务，赢得了众多用户的青睐。',
        },
        {
          images: images5,
          text:
            '龙池:龙池Dpool全球算力排名前7，不仅首推FPPS全收益模式，更以高于行业2%的收益，回馈矿工；再加之，0费率、全球多节点部署，使得龙池Dpool算力不断高速飙升。',
        },
      ],
			swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
//        speed:30000,
		  autoplay : {
//		    delay:1000
		  },
          direction : 'horizontal',
          loop:true,	
          
          
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
//        effect : 'fade',
         
        }
		}
	},
	methods:{
		init:function (){
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
		})        

		},
		
	},
	created (){
		this.arr = [require('../assets/images/banner.png'),
				require('../assets/images/link.jpg'),
				require('../assets/images/link0.jpg')]
		
		
	}
}
</script>

<style scoped>
html,body{
  height:100%;
}
.shutter-img {
width: 100vw!important;
height: 100vh!important;
border-radius: 0%!important;
}
#wrap{
  overflow: hidden;
  width:100%;
}
#main{
position: relative;
}
.page{
  width:100%;
  margin:0;
  height: 100vh;
}

#page3 {
  background-image:url(../../src/assets/images/beijing.png);
  background-size: 100% 100%;
}

* { margin: 0; padding: 0; }
body { background-color: #333333; }
img { border: 0; vertical-align: top; }
ul, li { list-style: none; }

.shutter {
overflow: hidden;
width: 100vw;
height:100vh;
position: relative;
margin: 50px auto;
border-radius: 0%!important;

}
.shutter-img {
z-index: 1;
}
.shutter-img,
.shutter-img a {
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
}
.shutter-img a {
cursor: default;
}
.shutter-img a > img {
width: 100%;
height: 100%;
}
.shutter-img .created {
overflow: hidden;
position: absolute;
z-index: 20;
}

.shutter-btn li {
position: absolute;
z-index: 2;
top: 50%;
width: 49px;
height: 49px;
margin-top: -25px;
cursor: pointer;
}
.shutter-btn li.prev {
left: 20px;
background: url(../../src/assets/images/shutter_prevBtn.png) no-repeat 0 -49px;
}
.shutter-btn li.next {
right: 20px;
background: url(../../src/assets/images/shutter_nextBtn.png) no-repeat 0 -49px;
}
.shutter-desc p {
padding-left: 20px;
line-height: 36px;
color: #fff;
font-size: 14px;
}
.w {
width: 860px;
height: 100%;
margin-left: auto;
margin-right: auto;
overflow: hidden;
}
.w .title {
width: 669px;
height: 67px;
margin: 100px auto;
background-image: url(../../src/assets/images/shili.png);
background-size: 100% 100%;
text-align: center;
line-height: 67px;
font-size: 23px;
color: #1d013d;
font-weight: 500;
}
.w .ourPhoto {
height: 110px;

}
.w .ourPhoto li{
height: 129px;
float: left;

}
.w .ourPhoto li:nth-child(1){
width: 215px;
background:url(../../src/assets/images/1.png);
background-size: 100% 100%;

}
.w .ourPhoto li:nth-child(2){
width:121px;
margin-left: 50px;
background: url(../../src/assets/images/2.png);
background-size: 100% 100%;
}
.w .ourPhoto li:nth-child(3){
width: 145px;
margin-left: 50px;
background: url(../../src/assets/images/3.png);
background-size: 100% 100%;
}
.w .ourPhoto li:nth-child(4){
width: 201px;
height: 115px;
margin-left: 50px;
background: url(../../src/assets/images/4.png);
background-size: 100% 100%;
}
.w .prerance {
  width: 100%;
  height: 50px;
  margin-top: 55px;
  display: flex;
 }
.w .prerance li {
   flex: 1;
}

.w .prerance li:nth-child(1){
  margin-left:25px;
}
.w .prerance li:nth-child(4){
  padding-left: 25px;
} 
.w .prerance li p {
 margin-top:9px;
 font-size: 16px;
 color: #1d013d;
 font-weight:600;
 text-align: center;
}
.w .butn {
  display: block;
  width: 142px;
  height: 42px;
  margin-top:50px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border: .5px solid #5b2895;
  border-top: 1.5px solid #5b2895;
  border-bottom: 2px solid #5b2895;
  border-radius: 5%;
  font-size: 19px;
  color:#5b2895;
  font-weight: 600;
}
.swiper-container {
  width:732px;
  height:300px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background:rgba(250,250,250,0.2); 
  margin-top: -50px;
} 

.swiper-button-prev,.swiper-button-next {
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: #cec1df;
  text-align: center;
  line-height: 39px;
  font-size: 19px;
  color:#323232;
  font-weight: 600;
}
#page4 {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  text-align: center;
}
#page4 button{
  width: 195px;
  height: 43px;
  margin:77px auto; 
  background: #ffffff;
  border: 1px solid #5b2895;
  border-bottom: 2px solid #5b2895;
  border-radius: 6%;
  box-shadow: 0px 5px 2px 3px #efebf4 ;
}
#page4 .photo_foot {
  width: 900px;
  height: 210px;
  margin-top: -25px;
  margin-bottom: 113px;
  margin-left: auto;
  margin-right: auto
}
#page4 .photo_foot img {
  width: 100%;
  height: 100%;
}
.swiper-p{
	display: inline-block ;
	width: 386px;
	height: 161px;
	margin:39px 0 0 46px;
	font-size: 12px;
	font-weight: 600;
	color: #867797;
	word-wrap: break-word;
 	 word-break: break-all;
  overflow: hidden;
}
.swiper-div {
	width:607px;
	height:225px;
	background:#ffffff;
	margin:39px auto;
	
}
.swiper-img {
	width:86px;
	height:86px;
	margin: 41px 0 0 46px;
}


</style>