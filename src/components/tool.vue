<template>
	<div class="tool">
		<div class="tool-content">
			<div class="title">
				
			</div>
			<ul>
				<li class="code-two">
					<dl>
						<dt>
							<img src="../assets/images/erweima.png"/>
						</dt>
						<dd style="text-align: center;font-size: 13px;margin-top: 5px;">扫一扫去龙算力</dd>
					</dl>
				</li>
				<li class="iphone">
					<dl>
						<dt>
							<img src="../assets/images/iOS.png"/>
						</dt>
						<dd style="font-size:13px ;color: #5954bb;margin-top:5px;">(ios端下载)</dd>
					</dl>
				</li>
				<li class="androd">
					<dl>
						<dt>
							<img src="../assets/images/android.png"/>
						</dt>
						<dd style="width: 160px ;font-size:13px ;color: #5954bb;margin-top:5px;">(Android下载)</dd>
					</dl>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.tool {
	width: 100%;
	height:614px;
	background-image: url(../assets/images/bj.jpg);
}
.tool-content {
	width: 564px;
	height: auto;
	margin: 0 auto;
	overflow: hidden;
}
.tool ul {
	margin-top: 100px;
}
.tool ul li{
	float: left;
}
.iphone{
	margin-left: 176px;
}
.androd{
	margin-left:79px;
}
.tool .title {
	width: 534px;
	height: 105px;
	margin-top:119px;
	background-image: url(../assets/images/wenan.png);
	background-size: 100% 100%;
}
.tool-content .code-two dt {
	width: 155px;
	height: 155px;
	border: 1px dashed #83604d;
	
}
.tool-content .code-two dt img {
	width:150px;
	height:150px;
	margin-top: 2.5px;
	margin-left:2.5px;
}
.iphone{
	width: 69px;
	height: 154px;
}
.androd {
	width: 76px;
	height: 161px;
}
.iphone img{
	width: 100%;
	height: 100%;
}
.androd img {
	width: 100%;
	height: 100%;
}
dd{
	color: #ffffff;
}

</style>