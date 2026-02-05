import '../styles/components/SubmitButton.css'

const SubmitButton = ({text, width} : {text : string; width : string}) => {
    return (
        <div className="c-submit-button-container">
            <input className='c-submit-button' type="submit" value={text} style={{width: width}}/>
        </div>
    )
}

export default SubmitButton;