import "../styles/components/Navbar.css"
import { Link } from "react-router-dom"
import Hambuger from "../assets/hamburger.png"
import close from "../assets/close.png"
import planImage from "../assets/planImage.svg"
import profileImage from "../assets/profileImage.svg"
import eventsImage from "../assets/eventsImage.svg"
import { useState } from "react"

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] =  useState(false)
    const [navbarMobilePreview, setNavbarMobilePreview] = useState(true)

    const activateNavBar = () => {
        setNavbarMobile(!navbarMobile)
        setNavbarMobilePreview(!navbarMobilePreview)
    }

    return (
        <>
            {navbarMobilePreview && (<div className="c-navbar-row">
                <img className="c-nav-bar-burger" src={Hambuger} alt="" onClick={activateNavBar}/>
                <h1 className="c-website-name">Who's Free</h1>
            </div>)}
            
            {navbarMobile && (
                <div className="c-navbar-body-mobile">
                    <div className="c-navbar-row">
                        <img className="c-nav-bar-close" src={close} alt="" onClick={activateNavBar}/>
                        <h1 className="c-website-name-navbar-open">Who's Free</h1>
                    </div>
                    <div className="c-navbar-body-mobile-links">
                        <div className="c-navbar-body-mobile-links-pair">
                            <Link to={"/home"}><h1>Home</h1></Link>
                        </div>
                        <div className="c-navbar-body-mobile-links-pair">
                            <img src={planImage} alt="" height="32px"/>
                            <Link to={"/plan"}><h1>Plan</h1></Link>
                        </div>
                        <div className="c-navbar-body-mobile-links-pair">
                            <img src={eventsImage} alt="" height="32px"/>
                            <Link to={"/events"}><h1>Events</h1></Link>
                        </div>
                        <div className="c-navbar-body-mobile-links-pair">
                            <img src={profileImage} alt="" height="32px"/>
                            <Link to={"/account"}><h1>Account</h1></Link>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Navbar