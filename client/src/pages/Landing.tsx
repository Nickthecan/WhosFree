import { useNavigate } from "react-router-dom";
import calendarPicture from "../assets/CalendarPicture.png"
import "../styles/pages/Landing.css"

const Landing = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="landing-body">
                <div>
                    <h1 className="landing-title lato-bold">Who's Free</h1>
                    <p className="landing-subtitle lato-bold">Smooth Planning for Everyone!</p>
                </div>
                <button onClick={() => {navigate('/login')}} className="landing-button"><p className="lato-bold">Start Planning</p></button>
                <img className="landing-calendar-picture" src={calendarPicture} alt="" />
            </div>
        </>
    )
}

export default Landing

