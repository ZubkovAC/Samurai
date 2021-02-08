import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/Users_reducer";


let mapStateToProps = (state:any ) => {
    return{
        users:state.users.users
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        followAC:(userID:number)=>{
            dispatch(followAC(userID))
        },
        unfollowAC:(userID:number)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)








