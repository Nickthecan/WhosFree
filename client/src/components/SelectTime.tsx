import '../styles/components/SelectTime.css'

const SelectTime = () => {
    return (
        <>
            <select className='c-select-time' name="time" id="times">
                <option value="12am">12 AM</option>
                <option value="1am">1 AM</option>
                <option value="2am">2 AM</option>
                <option value="3am">3 AM</option>
                <option value="4am">4 AM</option>
                <option value="5am">5 AM</option>
                <option value="6am">6 AM</option>
                <option value="7am">7 AM</option>
                <option value="8am">8 AM</option>
                <option value="9am">9 AM</option>
                <option value="10am">10 AM</option>
                <option value="11am">11 AM</option>

                <option value="12pm">12 PM</option>
                <option value="1pm">1 PM</option>
                <option value="2pm">2 PM</option>
                <option value="3pm">3 PM</option>
                <option value="4pm">4 PM</option>
                <option value="5pm">5 PM</option>
                <option value="6pm">6 PM</option>
                <option value="7pm">7 PM</option>
                <option value="8pm">8 PM</option>
                <option value="9pm">9 PM</option>
                <option value="10pm">10 PM</option>
                <option value="11pm">11 PM</option>
            </select>
        </>
    )
}
/* test */
export default SelectTime