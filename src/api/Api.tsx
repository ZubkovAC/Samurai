import axios from "axios";
import {ProfilePropsType} from "../redux/Profile-reducer/Profile_Reducer";


const istance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'b3721dee-f7d9-448c-a293-e8087db0634c'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 25) {
        return istance.get<UsersApiType>(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data )
    },
    getLogin  () {
        return istance.get<GetLoginType<DataUserAPItype>>(`auth/me`)
            .then( response =>  response.data )
    },
    getFollow (id:number) {

        return istance.post(`follow/${id}`)
            .then( response =>  response.data )
    },
    getUnFollow  (id :number) {
        return istance.delete(`follow/${id}`)
            .then( response =>  response.data )
    },
    getProfile(userId:number){
        return usersProfileAPI.getProfile(userId)
    },
    login(email:string, password:string, rememberMe:boolean = false,captcha :string = ''){
        return istance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logOut(){
        return istance.delete(`auth/login`)
    },
}

export const usersProfileAPI = {

    getProfile(userId:number){
        return istance.get('profile/'+userId)
    },
    getProfilePhotoStatus(){
        return istance.put('profile/photo')
    },

    getStatus(userId:number){
        return istance.get('profile/status/'+userId)
    },

    UpdateStatus(status:string){
        return istance.put('profile/status/',{status})
    },
    savePhoto(image:string){
        const formData = new FormData()
        formData.append('image',image)
        return istance.put ('profile/photo',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    profileSave(profileData:ProfilePropsType){
        return istance.put('profile',profileData)
    }
}

export const securityAPI = {
    getCaptcha(){
        return istance.get(`security/get-captcha-url`)
    }
}


export type UsersApiType = {
    error:null
    items:UserType[]
    totalCount:number
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: null
    followed: boolean

}

type GetLoginType<D={}> = {
    data: D
    fieldsErrors: []
    messages: []
    resultCode: number
}

type DataUserAPItype={
    email: string
    id: number
    login: string
}

