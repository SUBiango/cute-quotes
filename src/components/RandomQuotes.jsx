import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import './RandomQuotes.css'

function RandomQuotes({ quoteText, quoteAuthor}) {

    return (
        <>
        <div className='quote-container'>
            <BiSolidQuoteAltLeft  className='quote-icon quote-icon-left'/>
            <div className='quote'>
                <p className='quote-text'>{quoteText}</p>
                <p className='quote-author'>~ {quoteAuthor}</p>
            </div>
            <BiSolidQuoteAltRight className='quote-icon quote-icon-right'/>
        </div>
        </>
    )
}

export default RandomQuotes