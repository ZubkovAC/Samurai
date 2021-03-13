export interface AddUserParamsType  {
    value :string
}

/*export const required = (value:AddUserParamsType) => {
    if (value) {
       // return "undefined";
    }

    return "Field is required2";
}*/
export const required = (value:AddUserParamsType) => {
    if (value) return undefined;

    return "Field is required";
}
//export const required = (value:AddUserParamsType) => (value  ? undefined : 'Required')

export const maxLengthCreator = (maxLength:number)=> (value:any) =>
    value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined



/*const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined*/
