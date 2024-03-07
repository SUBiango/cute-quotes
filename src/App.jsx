import { useState, useEffect } from 'react'
import RandomQuotes from './components/RandomQuotes'
import GenerateButton from './components/Button'

import './App.css'

function App() {

  const [quoteText, setQuoteText] = useState("")
  const [quoteAuthor, setQuoteAuthor] = useState("")

  function fetchQuote() {
    fetch("https://type.fit/api/quotes")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let randomIndex = Math.floor(Math.random() * data.length)
            let randomQuote = data[randomIndex]
            
            let quoteText = randomQuote.text
            let quoteAuthor = randomQuote.author
            setQuoteText(quoteText)
            setQuoteAuthor(quoteAuthor)
        })
}
    
    useEffect(() => {
        fetchQuote()
    }, [])


  return (
    <div className='container'>
      <h1>Cute Quotes</h1>
      <RandomQuotes 
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
      />
      <GenerateButton
        handleFetch={fetchQuote} 
      />
    </div>
  )
}

export default App
