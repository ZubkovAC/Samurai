import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/Users_reducer";


let mapStateToProps = (state:any ) => {
    return{
        users:state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
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
        },
        setCurrentPageAC:(pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCountAC:(totalCount:number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)








