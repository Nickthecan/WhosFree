import '../styles/components/SubmitButton.css'

const SubmitButton = ({text} : {text : string}) => {
    return (
        <input className='lato-regular c-submit-button' type="submit" value={text}/>
    )
}

export default SubmitButton;