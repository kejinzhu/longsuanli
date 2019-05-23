import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 const state = {
        isLogin:false,
        uerCont:'',
        uesPwd:'',
        inforName:'',
		inforNum:'',
        changeState:false,
        srcIcon:'',
        userpiil:'',
        flag:true,
        flag2:false,
    }
 const mutations={
        add(state){
           
        },
        reduce(state){
            
        }
    }
export default new Vuex.Store({
        state
    });


