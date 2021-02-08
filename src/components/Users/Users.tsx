import React from "react";
import {UserType} from "../../redux/Users_reducer";
import  * as axios from "axios";



type UserPropsType = {
    users:UserType[]
    followAC:(idUser:number)=>void
    unfollowAC:(idUser:number)=>void
    setUsers:(users: UserType[]) => void
}

export class Users extends React.Component<UserPropsType>{

    constructor(props:UserPropsType) {
        super(props);
            // @ts-ignore
            axios.get ('https://social-network.samuraijs.com/api/1.0/users')
                // @ts-ignore
                .then(response => {
                    this.props.setUsers(response.data.items)
            })
    }

    render(){
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <div>
                                    <img src={u.img?u.img:'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'} alt={u.name} width='50px'/>
                                    {u.followed
                                        ? <button onClick={()=>{this.props.unfollowAC(u.id)}}>follow</button>
                                        : <button onClick={()=>{this.props.followAC(u.id)}}>unfollow</button>
                                    }
                                </div>
                                <div>
                                    {u.name}
                                    <br/>
                                    {u.title?u.title:''}
                                </div>
                                <div>
                                    {u.country?u.country:''}
                                    <br/>
                                    {u.city?u.city:''}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
