import {UserType} from "../../redux/Users-reducer/Users_reducer";


export const updateObjectInArray = (items:UserType[], itemId:any, objPropName:any, newObjProps:any) => {
    return items.map((u:any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}