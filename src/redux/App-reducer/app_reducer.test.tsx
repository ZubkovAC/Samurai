import {AppReducer, initialazedStateType, setInitialazed} from "./app_reducer";


let initialState:initialazedStateType

beforeEach( ()=>{
    initialState = {
        initialazed: false

    }
})

test ( 'test for initalazed', ()=>{
    let NoInitialazed = AppReducer(initialState,setInitialazed())
    expect(NoInitialazed.initialazed).toBe(true)

})
