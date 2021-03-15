import React from "react"
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import {BonusPropsType} from "../components/Bonus/BonusContainer";
import {BonusType} from "../components/Bonus/Bonus";
import { maxLengthCreator, required} from "../utils/validator/validors";
import {Input, Textarea} from "../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../redux/auth_reducer";
import {AppStateType} from "../redux/redux-store";
import { Redirect } from "react-router-dom";

type UserInputType= {
    inputLogin:string
    inputPassword:string
    inputCheckbox:boolean
}



const LoginForm:React.FC<InjectedFormProps<UserInputType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    name={"inputLogin"}  type="text"
                    component={Input} placeholder={'Login'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field name={"inputPassword"}  type={"password"} component={Input} placeholder={'Password'} validate={[required]}/>
            </div>
            <div>
                <Field name={"inputCheckbox"}   type='checkbox' component={'input'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )}

const LoginReduxForm = reduxForm<UserInputType> ({ form: 'login' })(LoginForm)


export const Login = (props:any) => {
    const onSubmit = (formData:UserInputType)=>{
        debugger
        props.login(formData.inputLogin,formData.inputPassword,formData.inputCheckbox)
    }
    if(props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth_user.isAuth,
    userId:state.auth_user.userId
})

export default connect(mapStateToProps ,{login})(Login)
/*const BonusReduxForm = reduxForm<UserInputType> ({ form: 'BonusMessage' })(LoginBonusForm)*/


const maxLength10 = maxLengthCreator(10)
export const BonusForm :React.FC<InjectedFormProps<BonusPropsType & BonusType>> = (props)=>{

    return (
        <form onSubmit={props.handleSubmit}>

            <Field name="BonusTextarea" type='text' component={Textarea}
                   validate={[required, maxLength10]}
                   placeholder='Message'   />
            <div>
                <button>add mes</button>
            </div>
        </form>
    )
}
export const BonusReduxForm = reduxForm<BonusPropsType & BonusType> ({ form: 'BonusMessage' })(BonusForm)


