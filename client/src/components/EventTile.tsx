import "../styles/components/EventTile.css"

const EventTile = ({ eventName, eventLink } : { eventName : string; eventLink : string}) => {
    console.log(eventLink)
    return (
        <a href={`/events/${eventLink}`} className="e-outertile">
            <h2>{eventName}</h2>
            <button>Copy Link</button>
        </a>
    )
}

export default EventTile