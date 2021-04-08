import {
    addPostProfile,
    getStatus,
    InitialProfileStateType,
    PostsProfileType,
    profile_Reducer,
    ProfilePropsType, setUserProf,
    UpdateStatus
} from "./Profile_Reducer";

let initialState:InitialProfileStateType

beforeEach(()=>{
    initialState = {
        postsProfile: [
            {id: 1, message: 'Hello men!', likecount: 11},
            {id: 2, message: "It's time?", likecount: 5},
            {id: 3, message: 'Go to learn!', likecount: 12},
            {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
            {id: 5, message: "Sharpen the saw before working", likecount: 7},
            {id: 6, message: "Make your life a dream", likecount: 4},
            {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
        ] as Array<PostsProfileType>,
        chatProfile: 'Hello',
        profile: null as null | ProfilePropsType,
        userId: 1,
        status:''
    }
})

test ( 'test profile_Reducer getStatus ', ()=>{
    let status = profile_Reducer(initialState,getStatus('Bjyx'))
    expect(status.status).toBe('Bjyx')
})

test ( 'test profile_Reducer UpdateStatus ', ()=>{
    let status = profile_Reducer(initialState,UpdateStatus('Bjyx-Bjyx'))
    expect(status.status).toBe('Bjyx-Bjyx')
})

test ( 'test profile_Reducer addPostProfile', ()=>{
    let status = profile_Reducer(initialState,addPostProfile('Samurai-Bjyx'))
    expect(status.postsProfile.find(t=>t.id===25)).toEqual({id: 25, message:'Samurai-Bjyx', likecount: 0})
})

test ( 'test profile_Reducer setUserProf', ()=>{
    let ProfileTest = {

        "aboutMe": "Yo",
        "contacts": {
            "facebook": "aboutMe",
            "website": null,
            "vk": "aboutMe",
            "twitter": "none",
            "instagram": "aboutMe",
            "youtube": null,
            "github": "aboutMe",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "aboutMe",
        "fullName": "aboutMe",
        "userId": 777,
        "photos": {
            "small": "aboutMe",
            "large": "aboutMe"
        }

    }
    let status = profile_Reducer(initialState,setUserProf(ProfileTest))
    expect(status.profile?.userId).toBe(777)
    expect(status.profile?.aboutMe).toBe("Yo")
    expect(status.profile?.contacts.twitter).toBe("none")
})

