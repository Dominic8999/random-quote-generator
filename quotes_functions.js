const quote = document.querySelector('#quote');
const author = document.querySelector('p:nth-of-type(2)'); // selects the second paragraph element
const btn = document.querySelector('button');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentQuoteIndex = 0; // Initialize the index
let generatedQuote = null; // Declare the generatedQuote variable outside the randomQuote function

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
    generatedQuote = quotes[index]; // Assign the generated quote to the variable
    quote.textContent = generatedQuote.text;
    author.textContent = generatedQuote.author;
}

async function randomQuote() {
    const quotes = await fetchQuotes();
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    displayQuote(quotes, currentQuoteIndex);
}

randomQuote();

btn.addEventListener("click", () => {
    if (generatedQuote) {         // Copy quote to clipboard
        const quoteText = `${generatedQuote.text} - ${generatedQuote.author}`;
        navigator.clipboard.writeText(quoteText)
            .then(function () {
                console.log('Quote copied to clipboard: ' + quoteText);
                alert('Success! Quote copied to clipboard: ' + quoteText);
            })
            .catch(function (err) {
                console.error('Failed to copy quote: ', err);
            });
    }
});

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