import axios from "axios"


export const getHotels = async()=>{
    const reponse  = await axios.get(`${process.env.REACT_APP_BASE_URL}/voyage/hotel`)
    return reponse
}

