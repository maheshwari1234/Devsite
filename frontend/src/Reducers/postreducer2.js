import Axios from "axios"


var posts=[]
Axios.get("http://localhost:2000/getData").then((res)=>{
posts=res.data
})
.catch((err)=>{
    console.log("error",err)
})



const inistate={
posts
}



    

const postReducer2=(state=inistate,action)=>{
    return state

}
export default postReducer2;