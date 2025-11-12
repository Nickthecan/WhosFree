import '../styles/components/SubmitButton.css'

const SubmitButton = ({text} : {text : string}) => {
    return (
        <div className="c-submit-button-container">
            <input className='c-submit-button' type="submit" value={text}/>
        </div>
    )
}

export default SubmitButton;