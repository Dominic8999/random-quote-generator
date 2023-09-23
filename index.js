const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn-el')

let quotes = [
    {
        "text": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "text": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
    },
    {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
    },
    {
        "text": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "author": "Buddha"
    },
    {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll"
    },
    {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "text": "If you want to lift yourself up, lift up someone else.",
        "author": "Booker T. Washington"
    },
    {
        "text": "Life is either a daring adventure or nothing at all.",
        "author": "Helen Keller"
    },
    {
        "text": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston S. Churchill"
    },
    {
        "text": "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        "author": "Mark Zuckerberg"
    },
    {
        "text": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King, Jr."
    },
    {
        "text": "Life's most persistent and urgent question is, 'What are you doing for others?'",
        "author": "Martin Luther King, Jr."
    },
    {
        "text": "To succeed in life, you need two things: ignorance and confidence.",
        "author": "Mark Twain"
    },
    {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
    },
    {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra"
    },
    {
        "text": "Don't count the days, make the days count.",
        "author": "Muhammad Ali"
    }
];


function randomQuote() {
    const random_quote = Math.floor(Math.random() * quotes.length)
    const generated_quote = quotes[random_quote]
    quote.textContent = generated_quote.text
    author.textContent = `${generated_quote.author}`
    return random_quote && generated_quote
}

randomQuote()

btn.addEventListener("click", randomQuote)