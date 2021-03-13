import React from "react"
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import {BonusPropsType} from "../components/Bonus/BonusContainer";
import {BonusType} from "../components/Bonus/Bonus";

type UserInputType= {
    inputLogin:string
    inputPassword:string
    inputCheckbox:boolean
}

const LoginForm:React.FC<InjectedFormProps<UserInputType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={"inputLogin"}  type="text" component={"input"} placeholder={'Login'}/>
            </div>
            <div>
                <Field name={"inputPassword"}  type="text" component={"input"} placeholder={'Password'}/>
            </div>
            <div>
                <Field name={"inputCheckbox"}  type='checkbox' component={"input"} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )}

const LoginReduxForm = reduxForm<UserInputType> ({ form: 'login' })(LoginForm)

export const Login = () => {
    const onSubmit = (formData:UserInputType)=>{
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

/*const BonusReduxForm = reduxForm<UserInputType> ({ form: 'BonusMessage' })(LoginBonusForm)*/

export const BonusForm :React.FC<InjectedFormProps<BonusPropsType & BonusType>> = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="BonusTextarea" type='text' component='textarea' placeholder='Message'/>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}
export const BonusReduxForm = reduxForm<BonusPropsType & BonusType> ({ form: 'BonusMessage' })(BonusForm)


