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
            <img className="c-nav-bar-burger" src={Hambuger} alt="" onClick={activateNavBar}/>
            {navbarMobile && (
                <div className="c-navbar-body-mobile">
                    <Link to={"/home"}><h1>Home</h1></Link>
                    <Link to={"/plan"}><h1>Plan</h1></Link>
                    <Link to={"/my-groups"}><h1>My Groups</h1></Link>
                    <Link to={"/account"}><h1>Account</h1></Link>
                </div>
            )}
            
        </>
    )
}

export default Navbar