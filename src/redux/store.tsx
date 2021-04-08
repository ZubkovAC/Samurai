import {bonusReducer} from "./Bonus-reducer/Bonus_reducer";
import {SPB_Reducer} from "./SPB-reducer/SPB_Reducer";

export const ADD_POST='ADD-POST'
export const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
export const ADD_POST_CHAT='ADD-POST-CHAT'
export const UPDATE_NEW_POST_CHAT='UPDATE-NEW-POST-CHAT'



// @ts-ignore
export let store:StoreType={
    _state: {
        profilePage: {
            dialogsData: [
                {id: 1, name: 'Dimych', img:'https://citaty.info/files/characters/44677.png'},
                {id: 2, name: 'Andrey', img:'data:image/jpeg;base64,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'},
                {id: 3, name: 'Sveta', img:'https://cs13.pikabu.ru/post_img/big/2019/10/24/4/1571891021185632383.jpg'},
                {id: 4, name: 'Valera', img:'https://ru.wikifur.com/w/images/4/4d/29._Camera_Bugged.avi_000011.800.png'},
                {id: 5, name: 'Sasha', img:'https://cs13.pikabu.ru/post_img/big/2019/10/24/4/1571891021185632383.jpg'},
                {id: 6, name: 'Viktor', img:'https://upload.wikimedia.org/wikipedia/ru/2/23/Red_Raphael.jpg'},
                {id: 7, name: 'Ac', img:'https://www.ninjaturtles.ru/wp-content/uploads/2012/04/%D0%9C%D0%B8%D0%BA%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%BE-%D0%B8%D0%B7-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B0-15.jpg'}
            ],
            messagesData: [
                {id: 1, message: 'Good morning'},
                {id: 2, message: 'Good after'},
                {id: 3, message: 'Good nigth'},
                {id: 4, message: "The future is created in your Head"},
                {id: 5, message: "You can't easily pull a fish out of a pond"},
                {id: 6, message: "Patience and hard work will wear everything out"},
                {id: 7, message: "morning in the evening is more complicated"},
            ],
            newPostText:'id New id'
        },
        messagesPage: {
            postsData: [
                {id: 1, message: 'Hello men!', likecount: 11},
                {id: 2, message: "It's time?", likecount: 5},
                {id: 3, message: 'Go to learn!', likecount: 12},
                {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
                {id: 5, message: "Sharpen the saw before working", likecount: 7},
                {id: 6, message: "Make your life a dream", likecount: 4},
                {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
            ],
            chat:'Hello'
        },
        sidebar:{
            friends: [
                {id: 1, name: 'Dimych', img:'https://citaty.info/files/characters/44677.png'},
                {id: 2, name: 'Andrey', img:'data:image/jpeg;base64,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'},
                {id: 3, name: 'Sveta', img:'https://cs13.pikabu.ru/post_img/big/2019/10/24/4/1571891021185632383.jpg'},
                {id: 4, name: 'Valera', img:'https://ru.wikifur.com/w/images/4/4d/29._Camera_Bugged.avi_000011.800.png'},
                {id: 5, name: 'Sasha', img:'https://cs13.pikabu.ru/post_img/big/2019/10/24/4/1571891021185632383.jpg'},
                {id: 6, name: 'Viktor', img:'https://upload.wikimedia.org/wikipedia/ru/2/23/Red_Raphael.jpg'},
                {id: 7, name: 'Ac', img:'https://www.ninjaturtles.ru/wp-content/uploads/2012/04/%D0%9C%D0%B8%D0%BA%D0%B5%D0%BB%D0%B0%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%BE-%D0%B8%D0%B7-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B0-15.jpg'}
            ]}
    },
    _callSubscriber(state) {
        console.log('hello')
    },
    getState(){
        return this._state
    },
    subcribe (observer:(state:StatePropsType)=>void) {
        this._callSubscriber=observer
    },

    /*dispatch(action){
        this._state.profilePage = bonusReducer(this._state.profilePage,action);
        this._state.messagesPage = SPB_Reducer(this._state.messagesPage,action)

        this._callSubscriber(this._state)
    }*/
}

export const addPostActionCreator = () =>{
    return {
        type: 'ADD-POST'
    }as const
}

export const onPostChangeCreator = (text:string) =>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    } as const
}
export type DispatchPropsType = ReturnType<typeof onPostChangeCreator>
export type DispatchAddPropsType = ReturnType<typeof addPostActionCreator>

export const addPostChatActionCreator = () =>{
    debugger
    return {
        type:'ADD-POST-CHAT'
    }as const
}
export const onPostChangeCreatorChat = (text:string) =>{
    return {
        type:'UPDATE-NEW-POST-CHAT',
        newText:text
    } as const
}
export type DispatchAddChatPropsType = ReturnType<typeof addPostChatActionCreator>
export type DispatchPostChangeCreatorChatType = ReturnType<typeof onPostChangeCreatorChat>

type DialogsDataPropsType = {
    id: number
    name: string
    img:string
}
type MessagesDataPropsType = {
    id: number
    message: string
}
type PostsDataPropsType = {
    id: number
    message: string
    likecount: number
}
export type sidebarPropsType ={
    friends:friendsPropsType[]
}
export type friendsPropsType = {
    id: number
    name: string
    img:string
}
export type ProfilePagePropsType = {
    dialogsData:DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
    newPostText:string
}
export type MessagesPagePropsType ={
    postsData:PostsDataPropsType[]
    chat:string
}
export type StatePropsType = {
    profilePage: ProfilePagePropsType
    messagesPage: MessagesPagePropsType
    sidebar:sidebarPropsType
}
export type StoreType={
    _state:StatePropsType
    _callSubscriber:(state:any)=>void
    getState:()=>StatePropsType
    subcribe:(observer:(state:any)=>void)=>void
    dispatch:(action:DispatchAddChatPropsType|DispatchPropsType|DispatchAddPropsType)=>void
}


