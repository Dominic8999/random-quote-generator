const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn-el')

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    }
]

btn.addEventListener("click",  () => {
    const random_quote = Math.floor(Math.random() * quotes.length)
    const generated_quote = quotes[random_quote]
    quote.textContent = generated_quote.text
    author.textContent = `${generated_quote.author}`
})