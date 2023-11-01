const quote = document.querySelector('#quote');
const author = document.querySelector('p:nth-of-type(2)'); // selects the second paragraph element
const btn = document.querySelector('button');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentQuoteIndex = 0; // Initialize the index

async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        const data = await response.json();
        return data.quotes;
    } catch (error) {
        console.error('The quotes are unavailable due to an error:', error);
    }
}

async function displayQuote(quotes, index) {
    const generatedQuote = quotes[index];
    quote.textContent = generatedQuote.text;
    author.textContent = generatedQuote.author;
}

async function randomQuote() {
    const quotes = await fetchQuotes();
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    displayQuote(quotes, currentQuoteIndex);
}

randomQuote();

btn.addEventListener("click", randomQuote);

prevButton.addEventListener("click", async () => {
    const quotes = await fetchQuotes();
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    displayQuote(quotes, currentQuoteIndex);
});

nextButton.addEventListener("click", async () => {
    const quotes = await fetchQuotes();
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote(quotes, currentQuoteIndex);
});
