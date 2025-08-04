import { Link } from 'react-router-dom'

import '../styles/pages/SignUp.css'
import SubmitButton from '../components/SubmitButton'


const SignUp = () => {
    return (
        <div className='signup-body'>
            <h1 className='signup-name lato-bold'>Who's Free?</h1>
            <h1 className='signup-title lato-bold'>Let's start planning!</h1>
            <div className="signup-credentials">
                <div className="signup-username-field lato-regular">
                    <p>Email</p>
                    <input className='lato-regular' type="email" name="" id="" placeholder='email'/>
                </div>
                <div className="signup-username-field lato-regular">
                    <p>Name</p>
                    <input className='lato-regular' type="email" name="" id="" placeholder='email'/>
                </div>
                <div className="signup-password-field lato-regular">
                    <p>Password</p>
                    <input className='lato-regular' type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="signup-password-field lato-regular">
                    <p>Confirm Password</p>
                    <input className='lato-regular' type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="signup-button">
                    <SubmitButton text={"Sign Up"}/>
                </div>
                <div className="signup-login lato-light">
                    <p>Have an account? <Link to="/login">Login!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp