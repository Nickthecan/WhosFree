import "../styles/pages/Events.css"

import Navbar from "../components/Navbar"
import EventTile from "../components/EventTile"

const Events = () => {
    return (
        <>
            <Navbar />
            <body>
                <h1 className="e-title">Events</h1>
                <div className="e-event-list">
                    <EventTile eventName="Nick's Party" eventLink="placeholderhi"/>
                </div>
            </body>
        </>
    )
}

export default Events