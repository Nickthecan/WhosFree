import { Link } from "react-router-dom";
import calendarPicture from "../assets/CalendarPicture.png"
import "../styles/pages/Landing.css"

const Landing = () => {
    return (
        <>
            <div className="landing-body">
                <h1 className="landing-title lato-bold">Who's Free</h1>
                <p className="landing-subtitle lato-bold">Smooth Planning for Everyone!</p>
                <button  className="landing-button"><p className="lato-bold">Start Planning</p></button>
                <img className="landing-calendar-picture" src={calendarPicture} alt="" />
            </div>
        </>
    )
}

export default Landing

