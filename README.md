# 📝 Random Quote Generator

A colorful and interactive **Random Quote Generator** web app that delivers inspiration, motivation, and wisdom with each click or key press. Built using **Vanilla JavaScript**, it features over **5000 quotes** stored in a local JSON file, dynamic background theming, keyboard navigation, and a fun UI that makes every quote feel fresh.

> “Click the button, get inspired, and enjoy a new color each time!”

---

### 🌐 Live Demo  
👉 [Try it on Netlify](https://quote-generator-1234.netlify.app/)

---

## ✨ Features

- 🧠 **5000+ Quotes** stored in `quotes.json`
- 🎨 **Dynamic Themes**: Choose from random or predefined background/button colors
- ⌨️ **Keyboard Navigation**:
  - `←` Left Arrow → Show previous quote  
  - `→` Right Arrow → Show next quote  
  - `Space` → Save the current quote
- 🖱️ **Save Button**: Click `save the quote!` to log or save a quote (extensible)
- 🌈 Color Mode Select:
  - `random`, `default`, `red`, `green`, `blue`

---

## 🖥️ UI Overview

The main content of the app is rendered inside a `<main>` tag with the following structure:

### Quote Display:
```html
<p id="quote"></p>
<p id="author"></p>
```

### Navigation + Save:

```html
<div class="button_etc">
  <span id="prev">←</span>
  <button id="btn-el">save the quote!</button>
  <span id="next">→</span>
</div>
```

### Color Selection:

```html
<select id="btn-select">
  <option value="random">random</option>
  <option value="default">default</option>
  <option value="red">red</option>
  <option value="green">green</option>
  <option value="blue">blue</option>
</select>
```
### 📁 File Structure:

```css
random-quote-generator/
│
├── index.html               # Main HTML document
├── index.css                # Main CSS file for styling
├── quotes.json              # 5000+ quotes in JSON format
├── backgroundColor.js       # Handles background and button color changes
├── keyFunctions.js          # Adds keyboard controls (←, →, Space)
├── quotes_functions.js      # Core logic to fetch and display quotes
├── media/
│   └── quote_bubble.svg     # Favicon (quote bubble icon)
└── README.md                # Project documentation
```

## 🔧 JavaScript Modules Explained

### `quotes_functions.js`
- Fetches the quotes from `quotes.json`
- Handles random quote selection and display logic

### `backgroundColor.js`
- Changes background and button colors based on user selection (`select#btn-select`)
- Applies harmonious color themes

### `keyFunctions.js`
- Enables keyboard navigation:
  - `←` Previous quote  
  - `→` Next quote  
  - `Space` Save current quote (could be extended to localStorage)

---

## 🆕 Version 1.3.1 – Updates

### ✅ Added:
- ✨ 2000+ new quotes (total: **5000+**)
- 🧩 Color theme select input
- 🎨 Pre-made color options:
  - Red
  - Green
  - Blue

### 🔄 Changed:
- `Random` color mode now applies to **both background and buttons**, harmonizing the UI
- Enhanced responsiveness and improved styling consistency

---

## 🖼️ Preview (v1.3.1)

![Preview](https://github.com/user-attachments/assets/5653ac62-00b8-418c-9d7c-ddf1fa0bc990)

---

## 💡 Future Plans

- ✅ Mobile responsiveness improvements
- 🔖 Local storage for saved quotes
- 🎨 Custom Themes:

---

## 🧪 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **JSON**
- **Netlify** (for live deployment)

---

## 🙌 Credits

Developed by **Dominic8999**  
Thanks to open-source inspiration and the developers who believe in simple, beautiful tools.
