
import css from './FormsControls.module.css'
import React from "react"
import  {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validator/validors";
import  {WrappedFieldMetaProps} from 'redux-form/lib/Field'


type TextAreaProps ={
    input:string
    meta:any
    child:any
}
type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}
export const FormControl:React.FC<FormControlPropsType> = ({meta: {touched, error}, children})=>{
    const hasError = touched && error
    return (
        <div className={css.formControl + '' + ( hasError ? css.error : '' ) }>
            {children}
            <div>
                { hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
   return <div>
       <Field placeholder={placeholder} name={name}
              validate={validators}
              component={component}
              {...props}
       /> {text}
    </div>
}