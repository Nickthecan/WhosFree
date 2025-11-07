import "../styles/pages/Events.css"

import Navbar from "../components/Navbar"
import EventTile from "../components/EventTile"

const Events = () => {
    return (
        <>
            <Navbar />
            <h1>Events</h1>
            <div className="e-event-list">
                <EventTile eventName="Nick's Party" />
            </div>
        </>
    )
}

export default Events