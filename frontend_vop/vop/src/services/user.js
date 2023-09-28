import axios from "axios"


export const login = async(email,password)=>{
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{email,password})
   return response 
}

export const register = async()=>{
    axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`)
}

