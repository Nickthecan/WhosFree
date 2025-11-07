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
            <h1 className="plan-title lato-bold">Plan</h1>
            <h1 className="plan-name lato-regular">name</h1><input type="text" placeholder="Hangout"/>
            <h1 className="plan-calendar-title lato-regular">Days available to meet</h1>
            {/* <DatePicker /> */}
            <Calendar  />
            <h1 className="plan-calendar-title lato-regular">Times</h1>
            <p>No earlier than</p>
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
            <p>No later than</p>
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
            <SubmitButton text="Plan"/>
        </>
    )
}

export default Plan