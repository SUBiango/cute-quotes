import './Button.css'

function GenerateButton({ handleFetch }) {
    return (
        <button 
            className='btn'
            onClick={handleFetch}
        >New Quote</button>
    )
}

export default GenerateButton