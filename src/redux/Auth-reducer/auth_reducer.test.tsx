import {auth_Reducer, InitialAuthStateType, setAuthUserD, setAuthUserIsFetching} from "./auth_reducer"


let initialAuthState: InitialAuthStateType

beforeEach(()=>{
    initialAuthState = {
        userId: -1,
        email: '',
        login: '',
        isAuth: false
    }
})


test('Auth Reducer Test - setAuthUserIsFetching', ()=>{
    let AuthTrue=auth_Reducer(initialAuthState,setAuthUserIsFetching(true))
    expect(AuthTrue.isAuth).toBe(true)

})

test('Auth Reducer Test - setAuthUserD', ()=>{
    let AuthTrue=auth_Reducer(initialAuthState,setAuthUserD(13510,'test@mail.ru','power',true))
    expect(AuthTrue.isAuth).toBe(true)
    expect(AuthTrue.userId).toBe(13510)
    expect(AuthTrue.email).toBe('test@mail.ru')
    expect(AuthTrue.login).toBe('power')

})



