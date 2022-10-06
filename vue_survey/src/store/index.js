import {createStore} from "vuex"
import api from "../axios"


const store = createStore({
  state:()=>({
    user:{
       data:{},
   token:localStorage.getItem('token')
    }


  }),
  getters:{},
  mutations:{
    setUser(state,activeUser){
      state.user.token = activeUser.token
      state.user.data = activeUser.user
      localStorage.setItem('token',activeUser.token)
    }
  },
  actions:{
    register({commit},user){
      console.log(user)
    return  api.post("/register",user)
      .then((res)=>{
        console.log(res)
      })

    }
  },
  modules:{}
})

export default store



