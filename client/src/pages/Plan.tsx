import "../styles/pages/plan.css"

import Navbar from "../components/Navbar"
import CalendarTile from "../components/CalendarTile"

const Plan = () => {
    return (
        <>
            <Navbar />
            <h1 className="plan-title lato-bold">Plan</h1>
            <h1 className="plan-name lato-regular">name</h1><input type="text" placeholder="Hangout"/>
            <h1 className="plan-calendar-title lato-regular">Days available to meet</h1>
            <CalendarTile />
        </>
    )
}

export default Plan