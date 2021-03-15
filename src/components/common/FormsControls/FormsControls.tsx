
import css from './FormsControls.module.css'
import React from "react"
type TextAreaProps ={
    input:string
    meta:any
    child:any
}

export const FormControl:React.FC<TextAreaProps> = ({input, meta,...restProps})=>{
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + '' + ( hasError ? css.error : '' ) }>
            {restProps.children}
            <div>
                { hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
}


export const Textarea:React.FC<TextAreaProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input:React.FC<TextAreaProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}