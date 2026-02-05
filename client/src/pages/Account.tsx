import '../styles/pages/Account.css'
import Navbar from '../components/Navbar'
import SubmitButton from '../components/SubmitButton'

const Account = () => {
    return (
        <>
            <Navbar />
            <h1 className="title">Account</h1>
            <div className="a-profile-info">
                <div className="a-list">
                    <div className='a-edit-account'>
                        <div className='a-edits'>
                            <h2>Name</h2>
                            <button>edit</button>
                        </div>
                        <h2 className='a-template'>template name</h2>
                    </div>
                    <div className='a-edit-account'>
                        <div className='a-edits'>
                            <h2>Email</h2>
                            <button>edit</button>
                        </div>
                        <h2 className='a-template'>template email</h2>
                    </div>
                    <div className='a-edit-account'>
                        <div className='a-edits'>
                            <h2>Password</h2>
                            <button className='a-small-text-button'>Change Password</button>
                        </div>
                    </div>
                    <div className='a-edit-account'>
                        <div className='a-edits'>
                            <h2>Theme</h2>
                            <button>Light</button>
                        </div>
                    </div>
                </div>
                <div className="a-profile-footer">
                    <div className='a-edit-account-button'>
                        <SubmitButton text='Log out' width='95%'/>
                    </div>
                    <div className='a-edit-account-button'>
                        <SubmitButton text='Delete Account' width='95%'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account