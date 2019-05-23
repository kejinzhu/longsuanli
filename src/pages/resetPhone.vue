<template>
	<div class="reset-phone">
		<div class="reset-phone-info">
			<img class="rest-icon" :src="$store.state.srcIcon" @click="login()"/>
			<div class="reset-info">
				<div class="reset-title"> 
					<span>{{$store.state.inforName}}</span><span style="padding-left: 15px;">{{$store.state.inforNum}}</span>
				</div>
				<ul class="reset-form">
					<!--<li class="reset-pwd">
						<label>密码</label>
						<input type="text" id="pwd" placeholder="去输入原账号登陆密码"/>
					</li>-->
					<li class="reset-new-info" v-if="$store.state.changeState" style="padding-left:172px;">
						<label for="newUseInfor">新手机号码</label>
						<input v-model="mail" type="text" id="newUseInfor" placeholder="请输入您的新手机号码"/>
					</li>
					<li class="reset-new-info" v-else>
						<label for="newUseInfor">新邮箱</label>
						<input v-model="mail" type="text" id="newUseInfor" placeholder="请输入您的新邮箱"/>
					</li>
					<li class="rset-code">
						<label for="codeI">验证码</label>
						<input v-model="code" type="text" id="codeI" placeholder="邮箱验证码"/>
						<span class="reset-line"></span>
						<span class="get-codes" v-if="flagCode"  @click="sendCode()">获取验证码</span>
						<span class="seconds" v-else>{{seconds}}s <span class="time-icon"></span></span>
						<!--<span class="identifying-code" v-if="flagCode" @click="changeFlag()">获取验证码</span>
						<span class="seconds" v-else>{{seconds}}s <span class="time-icon"></span></span>-->
					</li>
				</ul>
				<button :class="{'confirm-btun':true,act:confrimFlag}" @click="bindUserInfo()">确认</button>
				
			</div>
		</div>
	</div>
</template>

<script>
import { bindUserInfo, sendCode } from '@/api';	
export default {
	data(){
		return {
			flagCode:true,
			seconds:60,
			confrimFlag:false,
			timer:null,
			mail:'',
			regEmial:/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
			regPhone:/^1\d{10}$/,
			code:'',
		}
	
	},
	methods:{
		changeFlag:function (){
			
		},
		goSetting: function (data){
			this.$router.push({path:'/setting'})
		},
		sendCode() {
			var that = this;
			
	      if (!this.mail) {
	        alert(this.$store.state.userpiil);
	        return;
	      }
//	      if (!this.v_code_btn) {
//	        return;
//	      }

	      var obj;
	      if (this.$store.state.changeState === false) {
	      	if(this.regEmial.test(this.mail)){
	      		 obj = { mail: this.mail.replace(/\s*/g, ''), type: 'bind' };
	      	}else{
	      		alert('请输入正确的邮箱地址')
	      		return;
	      	}
	      } 
	      if (this.$store.state.changeState === true) {
	      	if (this.regPhone.test(this.mail)) {
	      		obj = { tel: this.mail.replace(/\s*/g, ''), type: 'bind' };
	      	} else{
	      		alert('请输入正确手机号码')
	      		return;
	      	}
	      }
	     
      sendCode(obj)
        .then((res) => {
          if (res.data.status === 1) {
            alert('发送成功');
            that.flagCode = false;
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
            alert(res.data.msg);
          }
        })
        .catch(() => {
          this.$toast(this.$t('error.catch'));
        });
   },
       bindUserInfo() {
      if (!this.code) {
      	alert("请输入验证码");
        return;
      }
       	var obj;
	     if (this.$store.state.changeState === false) {
	      	if(this.code){
	      		 obj = {
		          mail: this.mail.replace(/\s*/g, ''),
		          code: this.code,
		        };
	      	}else{
	      		alert('请输入验证码')
	      	}
	      } 
	      if (this.$store.state.changeState === true) {
	      	if (this.code) {
	      		obj = {
		          tel: this.mail.replace(/\s*/g, ''),
		          code: this.code,
		        };
	      	} else{
	      		alert('请输入验证码')
	      	}
	      }
     
     
      bindUserInfo(obj)
        .then((res) => {
          if (res.data.status === 1) {
            alert(res.data.msg);
            setTimeout(() => {
              this.$router.push('/setting');
            }, 1000);

            // this.$store.commit('user/LOGIN_OUT', '/login');
          } else {
            alert(res.data.msg);
          }
          
        })
        .catch(() => {
          alert('网络不好');
         
        });
    }
	   
		},
	mounted(){
		
 	},
 	watch:{
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
.reset-phone {
	width: 100%;
	height: 646px;
	background: #fafafa;
	overflow: hidden;
}
.reset-phone-info {
	width: 725px;
	height: 534px;
	margin: 75px auto;
	border: 1px solid #f0f0f0;
	background-color:#ffffff ;
}
.reset-info {
	height: 190px;
	background-image:url(../assets/backimg/reset-pnhoe-back.png);
	background-size: 100% 100%;
}
.rest-icon {
	display: block;
	width: 37px;
	height: 37px;
	margin-top: 21px;
	margin-left: auto;
	margin-right: auto;
}
.reset-title {
	height: 50px;
	margin-top:5px;
	color:#8c8c8c;
	font-size: 12px;
	text-align: center;
	line-height: 50px;
}
.reset-form {
	height:246px;
	margin-top: 31px;
}
.reset-pwd,.reset-new-info,.rset-code{
	height: 30px;
	margin-top: 60px;
	font-size: 15px;
	color: #9e9e9e;
}
.reset-pwd {
	padding-left: 219px;
}
.reset-new-info,.rset-code{
	padding-left: 205px;
}
.reset-form li input {
	width: 279px;
	background: #ffffff;
	margin-left: 23px;
	margin-top: 5px;
	border-bottom: 2px solid #f2f2f2;
}
.confirm-btun {
	display: block;
	width: 101px;
	height: 33px;
	margin:25px auto;
	font-size: 16px;
	color: #ffffff;
	border-radius: 5px;
	background: #7d6eff;
}
.act {
	opacity: 0.5;
}
 .rset-code .reset-line{
 	display: inline-block;
 	width: 2px;
 	height: 11px;
 	margin-left:-79px;
 	background: #efefef;
 }
.rset-code .get-codes {
	margin-left:5px;
	color: #a76fda;
	font-size: 13px;
	cursor: pointer;
}
.seconds {
	cursor: pointer;
	font-size:16px ;
	color: #b375f2;
	padding-left: 15px;
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