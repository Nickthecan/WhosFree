import "../styles/components/Navbar.css"
import { Link } from "react-router-dom"
import Hambuger from "../assets/hamburger.png"
import { useState } from "react"

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] =  useState(false)

    const activateNavBar = () => {
        setNavbarMobile(!navbarMobile)
    }

    return (
        <>
            <div className="c-navbar-row">
                <img className="c-nav-bar-burger" src={Hambuger} alt="" onClick={activateNavBar}/>
                <h1 className="c-website-name">Who's Free</h1>
            </div>
            
            {navbarMobile && (
                <div className="c-navbar-body-mobile">
                    <Link to={"/home"}><h1>Home</h1></Link>
                    <Link to={"/plan"}><h1>Plan</h1></Link>
                    <Link to={"/events"}><h1>Events</h1></Link>
                    <Link to={"/account"}><h1>Account</h1></Link>
                </div>
            )}
            
        </>
    )
}

export default Navbar