export interface AddUserParamsType  {
    value :string
}


export const required = (value:AddUserParamsType) => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength:number)=> (value:any) =>
    value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined

export type FieldValidatorType = (value: string) => string | undefined