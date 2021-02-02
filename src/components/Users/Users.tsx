import React from "react";
import {UserType} from "../../redux/Users_reducer";


type UserPropsType = {
    users:UserType[]
    followAC:(idUser:number)=>void
    unfollowAC:(idUser:number)=>void
    setUsers:(users: UserType[]) => void
}

export const Users = (props:UserPropsType) => {
    if (props.users.length  === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Dumych K.',
                country: 'Belarus',
                city: 'Minsk',
                title: 'The Samurai has no goal there is a path',
                follow: false,
                img: 'https://st4.depositphotos.com/9449108/25247/i/1600/depositphotos_252470774-stock-photo-samurai-stands-circled-ink-circle.jpg',
            },
            {
                id: 2,
                name: 'Valera',
                country: 'Belarus',
                city: 'Minsk',
                title: 'The Samurai',
                follow: false,
                img: 'https://pp.userapi.com/c418823/v418823912/30c1/5WjMn6yXHPI.jpg',
            },
            {
                id: 3,
                name: 'Viktor',
                country: 'Belarus',
                city: 'Minsk',
                title: 'The Samurai',
                follow: true,
                img: 'https://pp.userapi.com/c418823/v418823912/30d1/x-pyNDOF50U.jpg',
            },
            {
                id: 4,
                name: 'Stena',
                country: 'UK',
                city: 'England',
                title: 'padawan Samurai ',
                follow: true,
                img: 'https://pp.userapi.com/c418823/v418823912/30c1/5WjMn6yXHPI.jpg',
            },
            {
                id: 5,
                name: 'Net9',
                country: 'Polsha',
                city: 'Brest',
                title: 'junior Samurai ',
                follow: false,
                img: 'https://pp.userapi.com/c418823/v418823912/30c1/5WjMn6yXHPI.jpg',
            },
            {
                id: 6,
                name: 'Johni',
                country: 'USA',
                city: 'L.A.',
                title: 'junior Samurai',
                follow: false,
                img: 'https://pp.userapi.com/c418823/v418823912/30c1/5WjMn6yXHPI.jpg',
            }
            ])
    }
    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <div>
                                <img src={u.img} alt={u.name} width='50px'/>
                                {u.follow
                                    ? <button onClick={()=>{props.unfollowAC(u.id)}}>follow</button>
                                    : <button onClick={()=>{props.followAC(u.id)}}>unfollow</button>
                                }
                            </div>
                            <div>
                                {u.name}
                                <br/>
                                {u.title}
                            </div>
                            <div>
                                {u.country}
                                <br/>
                                {u.city}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}