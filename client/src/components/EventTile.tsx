import "../styles/components/EventTile.css"

const EventTile = ({ eventName } : { eventName : string }) => {
    return (
        <div className="e-outertile">
            <h2>{eventName}</h2>
            <button>Copy link</button>
        </div>
    )
}

export default EventTile