<template>
	<div class="register-usr">
		<div class="base-infor">
			<span class="icon-base-infor">
				<span class="icon-inner"></span>
				龙算力
			</span>
			<input v-model="mail" class="count" type="text" placeholder="请输入您的手机号码"/>
			<input v-model="pwd" class="pass-word" type="password" placeholder="请设置6-20位字母和数字组合密码"/>
			<input v-model="repwd" class="pass-word" type="password" placeholder="请再次输入登陆密码"/>
			<input v-model="identCode" class="pass-word" type="text" placeholder="短信验证码"/>
			<span :class="{line:true,'line-act':!flagCode}">
			</span>
			<span class="identifying-code" v-if="flagCode" @click="sendCode()">获取验证码</span>
			<span class="seconds" v-else>{{seconds}}s <span class="time-icon"></span></span>
			<button :class="{'login-btun':true,'login-disab':flagBtun}"  @click="doReg" >注册</button>
			<span :class="{'count-none':true}">没有账号？</span>
			<span :class="{'regist-now-login':true}"  @click="toLogin()">直接登陆</span>
			
		</div>
	</div>
</template>

<script>
import { doReg, sendCode, inviteDecrypt } from '@/api';	
export default {
  	data (){
		return {
			flagBtun:false,
			flagCode:true,
			seconds:60,
			count:'',
			pwd:'',
			repwd:'',
			identCode:'',
			mail:'',
			timer:null,
			
		}	
	},
	methods:{
		toLogin:function (){
			this.$router.push({path:'/login'})
		},
		sendCode() {
		      if (!this.mail) {
		        
		         this.$message({
		          showClose: true,
		          message: '请输入手机号码',
		          type: 'success',
		          duration:1000
		        });
		        return;
		      }
		      var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		      if (!myreg.test(this.mail)) {
		        
		         this.$message({
		          showClose: true,
		          message: '请输入正确格式的手机号码',
		          type: 'success',
		          duration:1000
		        });
		        return;
		      }
		      var that = this;
			  that.flagCode = false;
		      sendCode({ tel: this.mail.replace(/\s*/g, ''), type: 'doreg' })
		        .then((res) => {
		          if (res.data.status === 1) {
		            
		           	this.$message({
		          showClose: true,
		          message: '发送成功',
		          type: 'success',
		          duration:1000
		        });
		             that.timer = setInterval(function (){
				if (that.seconds > 0) {
                that.seconds--;
                console.log(that.seconds)
              } else {
                clearInterval(that.timer);
				that.flagCode = true;
				that.seconds = 60;
              }
				
				
			},1000)
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
        doReg() {
     
	      if (!this.mail) {
	       
	        this.$message({
		          showClose: true,
		          message:'请输入手机号码',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	      if (!this.pwd) {
	       
	        this.$message({
		          showClose: true,
		          message: '请输入密码',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	      if (!this.repwd) {
	        
	        this.$message({
		          showClose: true,
		          message: '请再输入密码',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	      if (this.repwd !== this.pwd) {
	        
	        this.$message({
		          showClose: true,
		          message: '两次密码不一致',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	      if (this.code.length !== 4) {
	      	
	      	this.$message({
		          showClose: true,
		          message:'请输入正确的短信验证码',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	      if (!this.code) {
	       
	        this.$message({
		          showClose: true,
		          message:'请输入短信验证码',
		          type: 'success',
		          duration:1000
		        });
		           
	        return;
	      }
	    
	      doReg({
	        tel: this.mail.replace(/\s*/g,''),
	        pwd: this.pwd,
	        repwd: this.repwd,
	        code: this.code,
	        nationality: 37,
	        version_type: 'zh-cn',
	        invite_user_id: 0,
	      }).then((res) => {
	        if (res.data.status === 1) {
	         
	           this.$message({
		          showClose: true,
		          message:'注册成功',
		          type: 'success',
		          duration:1000
		        });
	         
	        } else {
	         
	        }
	       
	      }).catch(() => {
	        
	      });
    },
	},
	mounted(){
		
	},
	watch:{
		name(newval,oldval){
			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (myreg.test(newval) && this.pwd.replace(/^\s*/, "") !== '') {
            	this.bollean = false;
            	this.flag2 = true;
            }else {
            	this.bollean = true;
            	this.flag2 = false;
            }
		},
		$route(to,from){
	     clearInterval(this.timer);        
	     this.timer = null;
	     this.flagCode = true;
		 this.seconds = 60;
		 this.mail = ''
		 this.code = ''
	  }
	},
	
		
}	
</script>

<style scoped>
.register-usr {
	width: 100%;
	height:600px;
	background: url(../assets/images/base-infor.jpg);
	overflow: hidden;
}

.base-infor {
	position: relative;
	width:430px;
	height:469px;
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
	margin:19px 0 0 55px;
	color:#c6c1ca;
}

.regist-now-login {
	display: inline-block;
	font-size: 12px;
	cursor: pointer;
	margin:19px 0 0 5px;
	color: #c89cf7;
}
.identifying-code {
	position:absolute;
	top:285px;
	left:308px;
	cursor: pointer;
	font-size:13px ;
	color: #c797f4;
}
.line {
	display: inline-block;
	position:absolute;
	top:290px;
	left:300px;
	height: 10px;
	border-left: 2px solid #d1e9d9;
}
.line-act {
	border-left: 2px solid #a756f0;
}
.seconds {
	position:absolute;
	top:283px;
	left:308px;
	padding-left:15px;
	cursor: pointer;
	font-size:16px ;
	color: #b375f2;
}
.time-icon {
	display: inline-block;
	width: 19px;
	height: 19px;
	vertical-align:top;
	background: url(../assets/icon/seconds-icon.png);
	background-size: 100% 100%;
}

</style>