import axios from "axios";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const istance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'b3721dee-f7d9-448c-a293-e8087db0634c'
    }
})


export const getUsers = (currentPage = 1,pageSize = 25) =>{
    return istance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials:true
        })
        .then( response => {
            return response.data
        })
}


export const getLogin = () =>{
    return istance.get(`auth/me`,
        {
            withCredentials:true
        })
        .then( response => {
            return response.data
        })
}
export const getFollow = (id= 2) =>{
    return istance.post(`follow/${id}`,
        {
            withCredentials:true,
            headers:{
                'API-KEY':'b3721dee-f7d9-448c-a293-e8087db0634c'
            }
        })
        .then( response => {
            return response.data
        })
}
export const getUnFollow = (id= 2) =>{
    return istance.post(`follow/${id}`,
        {
            withCredentials:true,
            headers:{
                'API-KEY':'b3721dee-f7d9-448c-a293-e8087db0634c'
            }
        })
        .then( response => {
            return response.data
        })
}