import { fetchQuotes } from "./quotes_functions";
import { displayQuote } from "./quotes_functions";
import { randomQuote } from "./quotes_functions";

const btn = document.querySelector('button');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentQuoteIndex = 0; // Initialize the index
let generatedQuote = null; // Declare the generatedQuote variable outside the randomQuote function

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
