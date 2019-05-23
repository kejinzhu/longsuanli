<template>
	<div class="outFoot">
		<div class="footer">
		<span class="arrow">
			<img src="../assets/icon/arrow-bo.png" style="display: inline-block;position: relative;left:19px;top: 6px;"/>
		</span>
		<ul>
			<li>
				<div class="icon">
						
				</div>	
				<img src="../assets/images/two-code.png"/>		
				<p>龙算力公众号</p>	
					
			</li>
			<li>
				<p class="title">了解关注我们</p>
				<router-link to="/" class= "a">
					主页
				</router-link>
				<router-link to="/" class= "a">
					价格信息
				</router-link>
				<router-link :to="{path:'/inforAboutUs/aboutUs',query:{name: 'aboute'}}" class= "a">
					关于我们
				</router-link>
			</li>
			<li>
				<p class="title">帮助</p>
				<router-link to="/" class= "a">
					常见问题
				</router-link>
				<router-link :to="{path:'/inforAboutUs/privacyTreaty',query: {name:'privaty'}}" class= "a">
					隐藏条约
				</router-link>
				
			</li>
			<li>
				<p class="title">
				<router-link :to="{path:'/inforAboutUs/contactUs',query: {name: 'contact'}}" class= "a">
					联系我们
				</router-link>
				</p>
				<p class="a">北京市朝阳区平安国际大厦A座2103</p>
				<p class="a">客服电话：400-201-302</p>
				<p class="a">客服邮箱：jiahe@jiahe.com</p>
			</li>		
		</ul>
	</div>
	</div>
	
</template>

<script>
</script>

<style scoped>
	.outFoot {
	background: #2b272f;
}
.footer {
	position: relative;
	width:790px;
	height:250px;
	margin: 0 auto;
}
.footer li {
	float: left;
	width:25%;
	height: 100%;
	margin-top: 30px;
}
.arrow {
	display: inline-block;
	position: absolute;
	left: 50%;
	top: -15px;
	transform: translateX(-50%);
	width: 51px;
	height: 15px;
	background-image: url(../assets/icon/foot-arrow.png);
	background-size:100% 100%;
}

.footer li:nth-child(1) .icon {
	display: inline-block;
	width: 122px;
	height: 30px;
	background: url(../assets/images/logo2.png);
	background-size: 100% 100%;
}
.footer li:nth-child(1) img {
	width: 71px;
	height: 71px;
	margin-top: 22px;
	margin-left: 44px;
}
.footer li:nth-child(1) p {
	padding-left: 44px;
	padding-top: 10px;
	font-size: 12px;
	color: #7a797b;	
}
.footer li .title {
	color:#3a363d;
	font-size: 21px;
	font-weight:400;
}
.footer li .a {
	display: block;
	margin-top: 27px;
	font-size: 12px;
	color: #7a797b;	
}

</style>