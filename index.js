const quote = document.querySelector('#quote');
const author = document.querySelector('p:nth-of-type(2)'); // selects the second paragraph element
const btn = document.querySelector('button');

async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        const data = await response.json();
        return data.quotes;
    } catch (error) {
        console.error('The quotes are unavailiable due to errror:', error);
    }
}

async function randomQuote() {
    const quotes = await fetchQuotes();
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const generatedQuote = quotes[randomQuoteIndex];
    quote.textContent = generatedQuote.text;
    author.textContent = generatedQuote.author;
}

randomQuote();

btn.addEventListener("click", randomQuote);