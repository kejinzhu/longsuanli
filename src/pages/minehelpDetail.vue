<template>
	<div class="outer">
		<div class="a">
		<ul class="mine-ul">
			<li v-if="commenFlag" v-for="(item,index) in data" :class="{actback:backFlag === index && backFlag0 === index}" @mouseleave="backFlag = backFlag0 = -1" @mouseenter="backFlag = backFlag0 = index" @click="contentShow(index)">
				
					<span :class="{act:backFlag === index}">0{{index+1}}</span>
					<span :class="{act2:backFlag === index}">{{item.title}}</span>
				
					
				<p v-if="flagNum === index">
					{{item.content}}
				</p>
				
				
			</li>
			<li v-if="!commenFlag" style="text-align: center;height:222px;line-height: 37px;">没有信息喽~</li>
		</ul>
		
		
	</div>
	<div class="list-back">
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
		</div>
	</div>
	
</template>

<script>
import Utils from '../model/teach.js'
export default {
	data(){
		return {
			data:[],
			 data1: [],
			 data2:[],
			 data3:[],
			 flagNum:-1,
			 backFlag:-1,
			 backFlag0:-1,
			 flag:false,
			index2:1,
			
			 commenFlag:true,
		      pay: '',
		      goods_name: '',
		      canale: false,
		      showDialog: false,
		      code: '',
		      commenIndex:0,
		      findIndex:'',
		}
	},
	methods:{
		contentShow(data){
			this.backFlag0 = -1;
			if (this.flagNum === -1) {
				this.flagNum = data;
			} else{
				this.flagNum = -1
			}
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
	created(){
			this.data1 = Utils.arr.slice(0,6);
	        this.data2 = Utils.arr.slice(6,11);
	        this.data3 = Utils.arr.slice(11,16);
	        this.data = this.data1;
	}
}
</script>

<style scoped>
.outer {
	height:auto;
	
}
.mine-ul {
	width: 679px;
	height:auto;
	margin-left: auto;
	margin-right: auto;
	padding-top: 25px;
}
.mine-ul li {
	cursor: pointer;
	height:auto;
	border-bottom: 1px dashed #f2f2f2;
	font-size:12px;
	color: #5d5d5d;
}
.mine-ul li span{
	margin: 10px 0 10px 0;
	font-weight: 600px;
}
.mine-ul li span:nth-child(1){
	display:inline-block;
	width: 16px;
	height: 16px;
	margin-right: 5px;
	text-align: center;
	line-height: 16px;
	border-radius: 50%;
	background: #e2caf2;
}
.mine-ul li p {
	width: 634px;
	padding: 13px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 5px;
	line-height: 25px;
	background: #fbfbfb;
}
.act {
	background: #6a01c0!important;
	color: #ffffff;
}
.act2 {
	color: #6900bd;
}
.actback {
	background: #f9f3ff;
}
.list-back {
	background:#fafafa;
	
}
.list-butn {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width:729px;
	height:25px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 49px;
	line-height: 25px;
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

</style>