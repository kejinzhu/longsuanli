<template>
	<div class="setting">
		<ul class="set-content">
			<li class="set-content-header">
				<span class="set-content-icon">
					<span id="set-content-icon">
						
					</span>
					基本信息
				</span>
			</li>
			<li class="reset-li">
				<label for="name">姓名</label>
				<input type="text" id="name" v-model="userName"/>
				<button :class="{'binding':true,'binding-act':flagBind}" @click="showMask('name')">修改</button>
			
			<li class="reset-li" style="padding-left: 133px;">
				<label for="name">手机号码</label>
				<input type="text" id="name" v-model="userPhone"/>
				<button v-if="!telBill" :class="{'binding':true,'binding-act':flagBind}" @click="goResetPhone('phone')">未绑定</button>
				<span v-else>
					<button :class="{'binding':true}">已绑定</button>
					<button :class="{'binding':true,'binding-act':flagBind}" @click="goResetPhone('phone')">重新绑定</button>
				</span>
				
			</li>
			<li class="reset-li">
				<label for="name">邮箱</label>
				<input type="text" id="name" v-model="userEmail"/>
				<button v-if="!mailBill" :class="{'binding':true,'binding-act':flagBind}" @click="goResetPhone('email')">未绑定</button>
				<span v-else>
					<button :class="{'binding':true}">已绑定</button>
					<button :class="{'binding':true,'binding-act':flagBind}"  @click="goResetPhone('email')">重新绑定</button>
				</span>
			</li>
			<li class="reset-li">
				国籍
				
				<select name="public-choice" v-model="adressCode" @change="getCouponSelected">                                        
    				<option :value="item.id" v-for="item in contryArr" >{{item.country}}</option>                                    
				</select>
			</li>
			<li class="reset-li" style="padding-left: 133px;">
				<label for="name">身份证号</label>
				<input type="text" id="name" v-model="certificate"/>
				<button v-if="!binding" :class="{'binding':true,'binding-act':flagBind}" @click="showMask">未绑定</button>
				<span v-else>
					<button :class="{'binding':true}">已绑定</button>
					<button :class="{'binding':true,'binding-act':flagBind}" @click="showMask('idCard')">重新绑定</button>
				</span>
			</li>
			<li style="text-align: center;"><button class="c" @click="updateUser">保存</button></li>
		</ul>
		<div class="mask-all" v-show="maskFlag">
			<ul class="mask-content">
				<li v-if="nameOrNum">
					<label for="">身份证号码</label>
					<input v-model="certificate" type="text" id="" placeholder="请输入您的身份证号"/>
				</li>
				<li v-else>
					<label for="">姓名</label>
					<input v-model="userName" type="text" id="" placeholder="请输入您的姓名"/>
				</li>
				<li>
					<button @click="closeMask()">取消</button>
					<span style="display: inline-block;width: 15px;">
						
					</span>
					<button class="confrim" @click="updateUser">确认</button>
				</li>
				
				
			</ul>
		</div>
	</div>
</template>

<script>
import Utils from '../model/country.js'
import { userInfo, updateUser } from '@/api';
export default {
	name:'indexFirst',
	components:{
	  	
	  
  	},
	data (){
		return {
			
			flagBind:true,
			flagPhone:false,
			flagEmail:false,
			flagIdentity:true,
			contryArr:[],
			maskFlag:false,
			nameOrNum:true,
			showDialog: false,
	      data: {},
	      binding:false,
	      mailBill: false,
	      telBill: false,
	      adressCode: '37',
	      userName: '',
	      userEmail: '',
	      userPhone: '',
	      certificate: '',
	      button: 'button',
			
		}
	},
	methods:{
		dataUtil: function (){
			var oldArr = Utils.state.country;
			
			for (var i = 0;i<oldArr.length;i++) {
				var json = {};
				json.country = oldArr[i].name_cn;
				json.id = oldArr[i].country_id;
				this.contryArr.push(json);
			}
			
		},
		goResetPhone: function (data) {
			
			if(data === 'email'){ 
				this.$store.state.inforName = '原邮箱';
				this.$store.state.inforNum = this.userEmail;
				this.$store.state.changeState = false;
				this.$store.state.userpiil = '请输入邮箱地址';
				this.$store.state.srcIcon = require('../assets/icon/emial-icon.png');
			}else{
				this.$store.state.changeState = true;
				this.$store.state.inforName = '手机号码';
				this.$store.state.inforNum = this.userPhone;
				this.$store.state.userpiil = '请输入手机号码';
				this.$store.state.srcIcon = require('../assets/icon/phone-icon.png')
			}
			
			this.$router.push({path:'/resetPhone'})
		},
		showMask: function (data){
			if(data === 'name'){
				this.nameOrNum = false;
			}else {
				this.nameOrNum = true;
			}
			this.maskFlag = true;
		},
		closeMask: function (){
			this.maskFlag = false;
		},
		userInfo() {
     
      userInfo()
        .then((res) => {
        	
         	if (res.data.status === '1') {
         		console.log(0)
            this.data = res.data.data;
            this.userName = this.data.name;
            this.userEmail = this.data.email;
            this.userPhone = this.data.tel;
            this.certificate = this.data.caac;
            this.adressCode = this.data.nationality;
          
            if (res.data.data.caac === '') {
            	
              this.binding = false;
            } else {
            	this.binding = true;
            }
            if (res.data.data.email === '') {
              this.mailBill = false;
            } else {
            	this.mailBill = true;
            }
            if (res.data.data.tel === '') {
              this.mtelBill = false;
            } else {
              this.telBill = true;
            }
           
          } else {
          	this.$message({
	          showClose: true,
	          message: res.data.msg,
	          type: 'success',
	          duration:1000
	        });
            
          }
        })
        .catch(() => {
         this.$message({
          showClose: true,
          message: '网络不好',
          type: 'success',
          duration:1000
        });
        });
    },
      updateUser() {
      
       var obj;
      if (this.adressCode &&  this.userName) {
        obj = {
          name: this.userName.trim(),
          nationality: this.adressCode,
        };
      } 


      updateUser(obj)
        .then((res) => {
          if (res.data.status === '1') {
            this.data = res.data.data;
            this.binding = true;
            this.userInfo();
           
            this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success',
          duration:1000
        });
            res.data.msg
            this.closeMask()
          } else {
            
            	this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success',
          duration:1000
        });
          }
         
        })
        .catch(() => {
          this.$toast.clear();
          
        });
    },
	},
	created (){
		this.dataUtil();
		this. userInfo();
 },
 	activated(){
 		this. userInfo();
 	}
}	


</script>

<style scoped>
.c{
	display: block;
	width: 101px;
	height: 33px;
	margin:19px auto;
	font-size: 16px;
	color: #ffffff;
	border-radius: 5px;
	background: #7d6eff;
	cursor: pointer;
}
	div,body{
		width: 100%;
		height: 100%;
	}
.setting {
	width: 100%;
	height:655px;
	overflow: hidden;
	background:#fafafa;
}
.set-content {
	width: 725px;
	height: 537px;
	margin: 76px auto;
	border:2px solid #f0f0f0 ;	
}
.set-content-header {
	height:51px;
	line-height: 51px;
	text-align: center;
	
	background: #ffffff;
}
#set-content-icon {
	display: inline-block;
	width: 25px;
	height: 16px;
	vertical-align:-1.9px;
	background:url(../assets/icon/setContent.png);
	background-size: 100% 100%;
}
.reset-li {
	height: 37px;
	margin-top: 46px;
	padding-left: 159px;
	font-size: 14px;
	color: #858585;
}
.reset-li input {
	width: 279px;
	margin-left: 21px;
	border-bottom:1px solid #ededed;
	background: #fbfbfb;
}
.reset-li select{
	width: 279px;
	margin-left: 21px;
	border-bottom:2px solid #ededed;
	background: #fbfbfb;
}
.reset-li .binding {
	position: relative;
	top: -5px;
	display: inline-block;
	width: 69px;
	height:21px;
	text-align: center;
	line-height:21px;
	font-size: 12px;
	border: 1px solid #b998fd;
	border-radius:15px;
	cursor: pointer;
	background: #fbfbfb;
}
.reset-li .binding-act {
	color: #ddd9fe;
	background: #7d6eff!important;
}
.mask-all {
	position: fixed;
	top: 0;
	left: 0;
	
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.5);
}
.mask-content{
	overflow: hidden;
	width: 381px;
	height: 293px;
	margin: 197px auto;
	border-radius: 5px;
	background: #ffffff;
	}
.mask-content li {
	height: 34px;
	margin-top:76px;
	text-align: center;
	font-size: 16px;
}
.mask-content li input {
	background:#ffffff;
	margin-top: 5px;
	margin-left: 9px;
	border-bottom: 2px solid #f3f3f3;
}
.mask-content li button {
	width: 100px;
	height: 34px;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
}
.confrim {
	background: #7d6eff!important;
	color: #ffffff!important;
}
</style>