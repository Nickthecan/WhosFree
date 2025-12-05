import { Link } from 'react-router-dom'

import '../styles/pages/SignUp.css'
import SubmitButton from '../components/SubmitButton'


const SignUp = () => {
    return (
        <div className='signup-body'>
            <h1 className='signup-name'>Who's Free?</h1>
            <h1 className='signup-title'>Let's start planning!</h1>
            <div className="signup-credentials">
                <div className="signup-username-field">
                    <p>Email</p>
                    <input type="email" name="" id="" placeholder='email'/>
                </div>
                <div className="signup-username-field">
                    <p>Name</p>
                    <input type="name" name="" id="" placeholder='name'/>
                </div>
                <div className="signup-password-field">
                    <p>Password</p>
                    <input type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="signup-password-field">
                    <p>Confirm Password</p>
                    <input type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="signup-button">
                    <SubmitButton text={"Sign Up"} width={"95%"}/>
                </div>
                <div className="signup-login">
                    <p>Have an account? <Link to="/login">Login!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp