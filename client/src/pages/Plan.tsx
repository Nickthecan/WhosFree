import "../styles/pages/plan.css"
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker'
import Navbar from "../components/Navbar"
import SubmitButton from "../components/SubmitButton"
import SelectTime from "../components/SelectTime"
import 'react-calendar/dist/Calendar.css';
import '../styles/components/Calendar.css'

import { useState } from "react"

const Plan = () => {
    const [range, setRange] = useState<[Date | null, Date | null] | null>(null)

    


    return (
        <>
            <Navbar />
            <h1 className="title">Plan</h1>
            <h2 className="plan-name">Name</h2><input className="plan-input-name" type="text" placeholder="Hangout"/>
            <h2 className="plan-calendar-title">Days Available to Meet</h2>
            {/* <DatePicker /> */}
            <Calendar className={"c-calendar"} selectRange={true} onChange={setRange} value={range}/>
            <h2 className="plan-calendar-title">Times</h2>
            <div className="plan-time-selection">
                <p className="plan-calendar-subtitle">No earlier than</p>
               <SelectTime />
            </div>
            <div className="plan-time-selection">
                <p className="plan-calendar-subtitle">No later than</p>
               <SelectTime />
            </div>
            <div className="plan-button">
                <SubmitButton text="Plan"/>
            </div>
        </>
    )
}

export default Plan