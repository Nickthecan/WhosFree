import '../styles/pages/Account.css'
import Navbar from '../components/Navbar'
import SubmitButton from '../components/SubmitButton'

const Account = () => {
    return (
        <>
            <Navbar />
            <h1 className="title">Account</h1>
            <div className="a-list">
                <div className='a-edit-account'>
                    <div>
                        <h2>Name</h2>
                        <button>edit</button>
                    </div>
                    <h2 className='a-template'>template name</h2>
                </div>
                <div className='a-edit-account'>
                    <div>
                        <h2>Email</h2>
                        <button>edit</button>
                    </div>
                    <h2 className='a-template'>template email</h2>
                </div>
                <div className='a-edit-account'>
                    <div>
                        <h2>Password</h2>
                        <button className='a-small-text-button'>Change Password</button>
                    </div>
                </div>
                <div className='a-edit-account'>
                    <div>
                        <h2>Theme</h2>
                        <button>Light</button>
                    </div>
                </div>
            </div>
            <div className='a-edit-account-button'>
                <SubmitButton text='Log out'/>
            </div>
            <div className='a-edit-account-button'>
                <SubmitButton text='Delete Account'/>
            </div>
        </>
    )
}

export default Account