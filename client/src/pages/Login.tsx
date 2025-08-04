import { Link } from 'react-router-dom'

import '../styles/pages/Login.css'
import SubmitButton from '../components/SubmitButton'


const Login = () => {
    return (
        <div className='login-body'>
            <h1 className='login-name lato-bold'>Who's Free?</h1>
            <h1 className='login-title lato-bold'>Let's get back to planning!</h1>
            <div className="login-credentials">
                <div className="login-username-field lato-regular">
                    <p>Email</p>
                    <input className='lato-regular' type="email" name="" id="" placeholder='email'/>
                </div>
                <div className="login-password-field lato-regular">
                    <p>Password</p>
                    <input className='lato-regular' type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="login-button">
                    <SubmitButton text={"Login"}/>
                </div>
                <div className="login-signup lato-light">
                    <p>Don't have an account? <Link to={"/signup"}>Register!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login