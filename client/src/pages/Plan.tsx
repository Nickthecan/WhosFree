import "../styles/pages/plan.css"
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker'
import Navbar from "../components/Navbar"
import CalendarTile from "../components/CalendarTile"
import SubmitButton from "../components/SubmitButton"

const Plan = () => {
    return (
        <>
            <Navbar />
            <h1 className="plan-title">Plan</h1>
            <h2 className="plan-name">Name</h2><input className="plan-input-name" type="text" placeholder="Hangout"/>
            <h2 className="plan-calendar-title">Days Available to Meet</h2>
            {/* <DatePicker /> */}
            <Calendar  />
            <h2 className="plan-calendar-title">Times</h2>
            <div className="plan-time-selection">
                <p className="plan-calendar-subtitle">No earlier than</p>
                <select name="time" id="times">
                    <option value="12am">12am</option>
                    <option value="1am">1am</option>
                    <option value="2am">2am</option>
                    <option value="3am">3am</option>
                    <option value="4am">4am</option>
                    <option value="5am">5am</option>
                    <option value="6am">6am</option>
                    <option value="7am">7am</option>
                    <option value="8am">8am</option>
                    <option value="9am">9am</option>
                    <option value="10am">10am</option>
                    <option value="11am">11am</option>

                    <option value="12pm">12pm</option>
                    <option value="1pm">1pm</option>
                    <option value="2pm">2pm</option>
                    <option value="3pm">3pm</option>
                    <option value="4pm">4pm</option>
                    <option value="5pm">5pm</option>
                    <option value="6pm">6pm</option>
                    <option value="7pm">7pm</option>
                    <option value="8pm">8pm</option>
                    <option value="9pm">9pm</option>
                    <option value="10pm">10pm</option>
                    <option value="11pm">11pm</option>
                </select>
            </div>
            <div className="plan-time-selection">
                <p className="plan-calendar-subtitle">No later than</p>
                <select name="time" id="times">
                    <option value="12am">12am</option>
                    <option value="1am">1am</option>
                    <option value="2am">2am</option>
                    <option value="3am">3am</option>
                    <option value="4am">4am</option>
                    <option value="5am">5am</option>
                    <option value="6am">6am</option>
                    <option value="7am">7am</option>
                    <option value="8am">8am</option>
                    <option value="9am">9am</option>
                    <option value="10am">10am</option>
                    <option value="11am">11am</option>

                    <option value="12pm">12pm</option>
                    <option value="1pm">1pm</option>
                    <option value="2pm">2pm</option>
                    <option value="3pm">3pm</option>
                    <option value="4pm">4pm</option>
                    <option value="5pm">5pm</option>
                    <option value="6pm">6pm</option>
                    <option value="7pm">7pm</option>
                    <option value="8pm">8pm</option>
                    <option value="9pm">9pm</option>
                    <option value="10pm">10pm</option>
                    <option value="11pm">11pm</option>
                </select>
            </div>
            <div >
                <SubmitButton text="Plan"/>
            </div>
        </>
    )
}

export default Plan