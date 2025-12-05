import '../styles/components/SubmitButton.css'

const SubmitButton = ({text, width} : {text : string; width : string}) => {
    return (
        <input className='c-submit-button' type="submit" value={text} width={width}/>
        /* <div className="c-submit-button-container"> */
        /* </div> */
    )
}

export default SubmitButton;