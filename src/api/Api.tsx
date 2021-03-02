import axios from "axios";
import {sidebarReducer} from "../redux/side_bar-reducer";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const istance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'b3721dee-f7d9-448c-a293-e8087db0634c'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 25) {
        return istance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials:true
            })
            .then( response => {
                return response.data
            })
    },
    getLogin  () {
        return istance.get(`auth/me`,
            {
                withCredentials:true
            })
            .then( response => {
                return response.data
            })
    },
    getFollow (id:number) {

        return istance.post(`follow/${id}`)
            .then( response => {
                return response.data
            })
    },
    getUnFollow  (id :number) {

        return istance.delete(`follow/${id}`)
            .then( response => {
                return response.data
            })
    }
}



