import {addPostChatSPB, InitialSPBStateType, PostsDataType, SPB_Reducer, updateNewPostChatSPB} from "./SPB_Reducer";

let initialState:InitialSPBStateType

beforeEach(()=>{
    initialState={
        postsData: [
            {id: 1, message: 'Hello men!', likecount: 11},
            {id: 2, message: "It's time?", likecount: 5},
            {id: 3, message: 'Go to learn!', likecount: 12},
            {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
            {id: 5, message: "Sharpen the saw before working", likecount: 7},
            {id: 6, message: "Make your life a dream", likecount: 4},
            {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
        ]as Array<PostsDataType> ,
        chat:'Hello'
    }
})

test('test SPB_Reducer - updateNewPostChatSPB', ()=>{
    let testSPB = SPB_Reducer(initialState,updateNewPostChatSPB('Samurai - hyj'))
    expect(testSPB.chat).toBe('Samurai - hyj')
})
test('test SPB_Reducer - addPostChatSPB', ()=>{
    let testSPB = SPB_Reducer(initialState,addPostChatSPB())

    expect(testSPB.chat).toBe('')
    expect(testSPB.postsData.find(t=>t.id===25)).toEqual({id: 25, message: 'Hello', likecount: 0})
})




