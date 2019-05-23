<template>
	<div class="public-announcement">
		<div class="announce-list">
			<ul v-if="commenFlag">
				<li @mouseenter="changeFalse()" @mouseleave="changeTrue()" v-for="(item,index) in data">
					<div class="top-title">
						<div>
							<span :class="{icon:flag1,'mouse-icon':!flag2}">0{{index+1}}.</span>
							<span :class="{problem:flag1,'problem-mouse':!flag2}">如何挖矿？</span>
						</div>
						<div>
							<span :class="{date:flag1,'date-mouse':!flag2}">
								2018-07-17
							</span>
						</div>
					</div>
					
					
					
				<transition name='article-show'>
				<div class="article" v-show="!flag2">
						每批产品都会在产品详情中注明产品挖矿收益起算时间，请查阅产品详情说明。收益查看：在平台开放注册后，您只需要登录用户中心
						点击“我的资产”即可看到您所拥有的BTC数量<br />
						每批产品都会在产品详情中注明产品挖矿收益起算时间，请查阅产品详情说明。收益查看：在平台开放注册后，您只需要登录用户中心
						点击“我的资产”即可看到您所拥有的BTC数量。每批产品都会在产品详情中注明产品挖矿收益起算时间，请查阅产品详情说明。收益查
						看：在平台开放注册后，您只需要登录用户中心点击“我的资产”即可看到您所拥有的BTC数量
				 	<img @click="show()" src="../assets/images/product-img.png"/>
				</div>
				</transition>
				
				</li>
				<div v-show="flagImg" class="mask-all">
					<div class="show-pho">
						<div class="butn-close" @click="close()">
							×
						</div>
						<img width="100%" height="100%" src="../assets/images/product-img.png"/>
					</div>
					
				</div>
				
				


			</ul>
			<ul v-if="true" style="text-align: center;line-height: 237px;height: 237px;">暂无更多信息~</ul>
		</div>
		<div class="list-butn">
			<button class="butn-long" @click="reduce()">上一页</button>
			<button :class="{'btun-num':true,active:index2 === 1}" @click="changeIndex(1)">1</button>
			<button :class="{'btun-num':true,active:index2 === 2}" @click="changeIndex(2)">2</button>
			<button :class="{'btun-num':true,active:index2 === 3}" @click="changeIndex(3)">3</button>
			<button class="butn-long"  @click="add()">下一页</button>
			<span class="pages-all">共<span pages-num>3</span>页</span>
			<span>到第</span>
			
			<input class="input-num" type="text" v-model="findIndex"/>
			页
			<button class="confirm" @click="findIndexFn()">确定</button>
		</div>
		<img class="img-bottom" src="../assets/images/2-benner.png"/>
		<ul>
				<li v-for='(val,index) in contryArr'>{{index}}{{val}}00</li>
			</ul>
	</div>
</template>

<script>
import Utils from '../model/teach.js'
export default {
	name:'indexFirst',
	components:{
	  	
	  
  	},
	data (){
		return {
			flag1:true,
			flag2:true,
			flagImg:false,
			contryArr:[],
			index2:0,
			data:[],
			 data1: [],
			 data2:[],
			 data3:[],
			 commenFlag:true,
			 commenIndex:0,
		     findIndex:'',
			
			
		}
	},
	methods:{
		changeTrue:function (){
			this.flag2 = true;
		},
		changeFalse:function (){
			this.flag2 = false;
		},
		
		show:function (){
			this.flagImg = true;
		},
		close:function (){
			this.flagImg = false;
		},
		changeIndex(num){
			this.index2 = num;
		},
		util:function (){
			this.data1 = Utils.arr.slice(0,5);
	        this.data2 = Utils.arr.slice(5,10);
	        this.data3 = Utils.arr.slice(10,15);
	        this.data = Utils.arr.data1;
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
	mounted (){
		
		console.log(Utils.arr)
	}
}	

</script>

<style scoped>
button{
	cursor: pointer;
}
.public-announcement {
	width: 100%;
	min-height:1000px;
	padding-top:130px;
	background:#fafafa;
	padding-bottom: 101px;
}

.announce-list {
	width: 729px;
	height:auto;
	margin:0 auto;
	background: #ffffff;
	border: 1px solid #f0f0f0;
}
.announce-list ul {
	width: 682px;
	margin: 0 auto;
	
}
.announce-list ul li {
	min-height: 49px;
	line-height: 49px;
	border-bottom: 2px dotted #f2f2f2;
	
}
.top-title {
	height: 49px;
	display: flex;
	flex-direction:row;
	justify-content: space-between;
}
.announce-list ul li:hover {
	cursor: pointer;
}
.announce-list ul>li .icon {
	display: inline-block;
	width:21px;
	height:21px;
	text-align: center;
	line-height:21px;
	border-radius: 50%;
	font-size: 12px;
	background: #e4cef4;
}
.announce-list ul>li .problem {
	display: datenline-block;
	padding-left: 6px;
	font-size: 14px;
}
.announce-list .date {
	font-size: 14px;
	color: #777777;
}
.border-none {
	border-bottom: 2px dotted transparent!important;
}
.list-butn {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width:729px;
	height:25px;
	margin-top:49px;
	margin-left: auto;
	margin-right: auto;
	line-height: 25px;
	margin-top: 49px;
	font-size: 12px;
}
.list-butn button {
	background: #fefefe;
	margin-left: 6px;
	border: 1px solid #eaeaea;
	border-radius: 2.5px;
}
.butn-long {
	display: inline-block;
	width: 59px;
	height: 25px;
	
}
.btun-num,.input-num {
	width: 34px;
	height: 25px;
	text-align: center;
	line-height: 25px;
}
.confirm {
	width: 46px;
	height: 25px;
}
.pages-all {
	margin: 0 10px 0 10px;
}
.input-num {
	margin: 0 4px 0 4px;
}
.active {
	background: #9525ed!important;
	color: #ffffff!important;
}
.img-bottom {
	display: block;
	width: 976px;
	height: 237px;
	margin:101px auto;
	margin-bottom: 100px;
}
.article {
	width: 631px;
	height: 227px;
	background: #fbfbfb;
	margin: 0px auto;
	border-radius: 5px;
}
.mouse-icon {
	background:#6000bb!important;
	color: #ffffff;
}
.problem-mouse {
	color:#a651f0;
}
.date-mouse {
	color:#aa5cf1!important;
}
.article {
	padding: 23px 23px 0 23px;
	font-size: 12px;
	line-height: 19px;
	color: #ababab;
	background: #fbfbfb;
	border-radius: 5px;
}
.article img {
	display: block;
	margin-top:15px;
	margin-left: auto;
	margin-right: auto;
}

.mask-all {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	width:100vw;
	height:100vh;
	background: rgba(0,0,0,.4);
}
.mask-all .show-pho {
	position: relative;
	display: block;
	width: 372px;
	height: 372px;
	margin: 132px auto;
}
.mask-all .butn-close {
	position: absolute;
	top:-60px;
	left:90%;
	width: 34px;
	height: 34px;
	text-align: center;
	line-height: 34px;
	font-size: 25px;
	color: #ffffff;
	cursor: pointer;
	border-radius: 50%;
	background: #696969;
}

</style>