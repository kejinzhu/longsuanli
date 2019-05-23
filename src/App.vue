<template>
  <div id="app">
   
   <common-nav></common-nav>
   <keep-alive>

    	<router-view/>
    </keep-alive>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonNav from './components/commonNav'
import CommonFooter from './components/commonFooter'
export default {
  name: 'App',
  components:{
  	CommonNav,
  	CommonFooter
  },
  methods:{
		login(){
			this.$router.push({path:'/login'})
		},
		goRegister(){
			this.$router.push({path:'/register'})
		},
		goSetting(){
			this.$router.push({path:'/setting'})
		},
		scrollBack(){
//			this.scroll = document.body.scrollTop;
		
		}
	},
  mounted(){
		window.addEventListener('scroll',this.scrollBack)
	}
}
</script>

<style>

</style>
