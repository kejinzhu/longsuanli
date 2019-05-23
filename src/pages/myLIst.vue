<template>
	<div class="dragon-list">
		<div class="list-title">
			<p class="date">
				<span>2018年4月</span>
				<span>（BTC）</span>
				<span></span>
			</p>
			<p class="coin-receiv">
				<span>提币$0000000</span>
				<span>收入$000000</span>
				
			</p>
		</div>
		<div class="list-data">
			<table style="border-bottom: 2px solid #f2f2f2;">
				<tr :class="{'table-title':true,backColor:true}">
					<td>产品名称</td>
					<td>有效算力</td>
					<td>订单编号</td>
					<td>订单编号</td>
				</tr>
				<tr :class="{backColor:index%2 === 1}" v-for="(item,index) in data" v-if="commenFlag">
					<td>
						<p class="BTC">{{item.goods_name}}</p>
						<p>{{item.created_at_bj}}</p>
					</td>
					<td>{{item.number}}T</td>
					<td>{{item.order_no}}</td>
					<td v-if="item.canale">
						<span class="unpaid">未支付 </span>
							&nbsp;
						<span class="cancel-order" @click="cancle(item.order_no)">取消订单</span>
						  
					</td>
					<td style="color: #988cfd;"  v-else>
						已提交支付凭证
					</td>
				</tr>
				<tr v-if="!commenFlag" style="text-align: center;line-height: 37px;">没有订单喽~</tr>
				
			</table>
			
		<div class="list-butn">
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
		</div>
		<div class="mask" v-show="flag">
			<div class="elastic-frame ">
				<p><span></span></p>
				<p>确认取消订单？</p>
				<p>
					<button @click="closeCancel()" style="margin-right: 37px;background: #ffffff;border: 2px solid #eaeaea;cursor: pointer;">取消</button>
					<button @click="closeConfirm()" style="background:#7d6eff;color: #ffffff;cursor: pointer;">确认</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { orderList, delOrder } from '@/api';
import { Loading } from 'element-ui';
export default {
	data (){
		return {
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
		}
	},
	methods:{
		cancle(data){
			this.flag = true;
			this.code = data;
		},
		closeCancel(){
			this.flag = false;
		},
		closeConfirm(){
			this.flag = false;
			this.delOrders();
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
	    orderList() {
	    	let obj = document.getElementsByClassName('dragon-list')[0]
	    	console.log(obj)
	     let loadingInstance = Loading.service({target:obj,background:"rgba(0, 0, 0, 0)"});
			
	      orderList()
	        .then((res) => {
	          if (res.data.status === '1' || res.data.status === 1) {
	          	this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
			  loadingInstance.close();
			});
	            var arr = []; 
	            arr = res.data.data.map((v) => {
	            	
	              const obj = {
	                pay: 'already_sub',
	                canale: false,
	                
	              };
	              if (v.status === 0) {
	                obj.pay = '';
	                obj.canale = false;
	                
	              } else if (v.status === 1) {
	                obj.pay = 'no_pay';
	                obj.canale = true;
	                // obj.statusStr = this.$t('shares.unpaid');
	              } else if (v.status === 2) {
	                obj.pay = 'already_sub';
	                obj.canale = false;
	               
	              }
	
	              return Object.assign({}, v, obj);
	            });
	            this.data1 = arr.slice(0,5);
	            this.data2 = arr.slice(5,10);
	            this.data3 = arr.slice(10,15);
	            this.data = this.data1;
	          } else {
	            alert(res.data.msg);
	            this.$toast.clear();
	          }
	        })
	        .catch(() => {
	          this.$toast.clear();
	        });
	    },
	    delOrders() {
     
      delOrder({
	        order_id:this.code,
	      })
	        .then((res) => {
	          
	          if (res.data.status === '1') {
	            Toast(this.$t('shares.cancleDingSuccess'));
	            this.orderList();
	          } else {
	            alert(res.data.msg);
	          }
	        })
	        .catch(() => {
	          alert('网络不好');
	        });
    },
		},
		created(){
			 this.orderList();
		},
		actived(){
			 this.orderList();
		}
	}
</script>

<style scoped>
.dragon-list {
	width:567px;
	height: 427px;
	background: #f9f9f9;
	position: relative;
}
.list-title {
	height: 77px;
	border-bottom: 1px solid #f2f2f2;
	background: #ffffff;
	overflow: hidden;
}
.date {
	height: 21px;
	margin-top:21px;
}
.date span:nth-child(1){
	margin-left: 30px;
	font-size: 15px;
	font-weight: 600;
	color: #b164f2;
}
.date span:nth-child(2){
	margin-left:9px;
	font-size: 12px;
	
	color: #b164f2;
}
.date span:nth-child(3){
	display: inline-block;
	width:19px;
	height:19px;
	margin-left: 333px;
	border: 2px solid #f4f3f9;
	border-radius:50%;
	background-image:url(../assets/icon/dreagn.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size:66% 66%;
	vertical-align: bottom;
}
.coin-receiv span:nth-child(1){
	margin-left:30px;
	font-size: 12px;
	color: #b9a3cc;
}
.coin-receiv span:nth-child(2){
	margin-left:9px;
	font-size: 12px;
	color: #b9a3cc;
}
.list-data {
	width: 100%;
	height: 335px;
	margin-top:10.5px;
	border-top: 2px solid #f3f3f3;
	background: #ffffff;
	font-size: 12px;
}
.backColor {
	background:#f9f9f9;
}
.table-title td{
	font-weight: 600;
	color:#5f5f5f!important;
}
.list-data table tr{
	height: 37px;
}
.list-data table td{
	text-align: center;
	font-size: 7px;
	color: #999999;
	border-right: 2px solid #f4f3f9;
}
.list-data table td:nth-child(1) {
	width:154px;
}
.list-data table td:nth-child(2) {
	width:90px;
}
.list-data table td:nth-child(3) {
	width:150px;
}
.list-data table td:nth-child(4) {
	width:167px;
	border-right: 2px solid transparent;
}
.BTC {
	color: #7c7c7c;
 	font-weight:600;
}
.unpaid {
	color:#f2a0b5;
}
.cancel-order {
	color: #cda2f5;
	cursor: pointer;
}
body,html{
	width: 100%;
	height: 100%;
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color:rgba(0,0,0,.5) ;
}
.mask .elastic-frame {
	width: 379px;
	height: 291px;
	border-radius: 5px;
	margin: 195px auto;
	background: #ffffff;
}
.mask .elastic-frame p:nth-child(1) {
	padding-top: 50px;
	text-align: center;
}
.mask .elastic-frame p span {
	display: inline-block;
	width: 30px;
	height: 39px;
	background-image: url(../assets/icon/pink-backbook.png);
	background-size: 100% 100%;
}
.mask .elastic-frame p:nth-child(2) {
	margin-top: 41px;
	font-size: 19px;
	text-align: center;
}
.mask .elastic-frame p:nth-child(3) {
	margin-top:56px;
	text-align: center;
}
.mask .elastic-frame p:nth-child(3) button{
	width: 104px;
	height: 37px;
	border-radius: 5px;
	font-size: 15px;
	text-align: center;
}
.list-butn {
	position: absolute;
	right: 15px;
	bottom: 25px;
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