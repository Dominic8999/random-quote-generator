const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn-el')

let JSON_quotes = 
`[
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "text": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
    }
]`
btn.addEventListener("click", () =>{
    let quoteGeneration = () => {
        let random = Math.floor(Math.random() * 3) + 1
        quote.textContent += `${this.text}`
        author.textContent += `${this.author}`
    }
    return quoteGeneration
})