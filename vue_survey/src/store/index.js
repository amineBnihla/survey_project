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
      api.post("/register",user)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      // fetch("http://127.0.0.1:8000/api/register",
      // {
      //   headers:{
      //     "Content-Type":"application/json",
      //     "Accept":"application/json",
      //   },
      //   method:"POST",
      //   body:JSON.stringify(user)
      // }
      // )
      // .then((res)=> res.json())
      // .then((data)=>{
      //  console.log("hello")
      //  console.log(data.status)
      //   //commit('setUser',res)
      //   return res
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    }
  },
  modules:{}
})

export default store



