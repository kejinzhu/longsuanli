<template>
	<div class="login">
		<div class="base-infor">
			<span class="icon-base-infor">
				<span class="icon-inner"></span>
				龙算力
			</span>
			<input v-model="name" class="count" type="text" placeholder="请输入您的手机号码"/>
			<input v-model="pwd" class="pass-word" type="password" placeholder="密码"/>
			<button :class="{'login-btun':true,'login-disab':bollean}"  @click="login()">登陆</button>
			<span :class="{'count-none':true}">没有账号</span>
			<span :class="{'regist-now':!flag2,'regist-now-login':flag2}" @click="$router.push({path:'/register'})">立即注册</span>
			<span class="forget-pwd" v-if="flag2" @click="$router.push({path:'/forget'})">忘记密码</span>
		</div>
	</div>
</template>

<script>
	import {doLogin} from '@/api';
export default {
	name:'indexFirst',
	components:{
	},
	data (){
		return {
			name:'',
			pwd:'',
			bollean:'',
			flag2:false,
			commenFlag:false
		}
	},
	methods:{	
		checkInput:function (){
			if(this.name.replace(/^\s*/, "") === '' && this.pwd.replace(/^\s*/, "") === '') {
				this.bollean = true;
			}
		},
		login(){
			var that = this;	
			   doLogin({
        mail:this.name,
        pwd: this.pwd,
      })
        .then((res) => {
        		
          if (res.data.status === 1) {
          	this.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success',
          duration:1000
        });
           	this.$store.state.isLogin = true;
           	sessionStorage.flag = false;
           	sessionStorage.flag2  = true;
           	sessionStorage.uerCont = that.name;
           	sessionStorage.uesPwd = that.pwd;
           
           	window.history.back();
           	
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
         	
        });
			
			
		}
		
	},
	mounted (){
		this.checkInput();
		
			this.name = sessionStorage.uerCont;
           	this.pwd = sessionStorage.uesPwd;
	},
	watch:{

		name(newval,oldval){
		
			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
			
            if (myreg.test(newval)) {
            	
            	this.commenFlag = true;
            }else {
            	this.commenFlag = false;
            }
		},
		pwd(newval,oldval){
			
			if (newval.replace(/^\s*/, "") !== '' && this.commenFlag === true) {
				
				this.bollean = false;
            	this.flag2 = true;
				
				
			} else{
				this.bollean = true;
				
            	this.flag2 = false;
			}
		}
	}
}
</script>

<style scoped>
.login {
	overflow: hidden;
	width: 100%;
	height:600px;
	background:url(../assets/images/base-infor.jpg);
}
.base-infor {
	width:430px;
	height: 400px;
	margin-top:100px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 5px;
	background: #ffffff;
}
.icon-base-infor {
	display:block;
	width: 175px;
	height: 33px;
	margin: 0 auto;
	text-align: center;
	line-height: 33px;
	color: #7b99d4;
	font-size: 12px;
	font-weight: 600;
	background: url(../assets/icon/icon-base-infor.png);
	background-size: 100% 100%;
}	
.icon-inner {
	display: inline-block;
	width:19px;
	height:17px;
	vertical-align:-4.5px;
	background: url(../assets/icon/logo-base-infor.png);
	background-size: 100% 100%;
}
input::-webkit-input-safebox-button{
display: none;
}
.count,.pass-word {
	display: block;
	width: 319px;
	height: 25px;
	border-bottom: 2px solid #ececec;
	margin: 0 auto;
}
.count {
	margin-top:79px;
}
.pass-word {
	margin-top:30px;
}
.login-btun {
	display: block;
	width:319px;
	height: 39px;
	margin-top:56px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	line-height: 39px;
	font-size: 16px;
	font-weight: 600px;
	color: #ffffff;
	background:#7d6eff;
	border-radius: 5px;
}
.login-disab {
	opacity: 0.5;
}
.count-none,.regist-now{
	display: inline-block;
	font-size: 12px;
	cursor: pointer;
}

.count-none {
	margin:19px 0 0 59px;
	color:#c6c1ca;
}
.regist-now {
	margin:19px 0 0 196px;
	color: #c89cf7;
}
.regist-now-login {
	display: inline-block;
	font-size: 12px;
	cursor: pointer;
	margin:19px 0 0 5px;
	color: #c89cf7;
}
.forget-pwd {
	display: inline-block;
	font-size: 12px;
	cursor: pointer;
	margin:19px 0 0 155px;
	color:#c6c1ca;
}

</style>