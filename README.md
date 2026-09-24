Currency Converter (CAD, USD, EUR)

A simple, functional, and interactive web application to convert amounts between three currencies. This project was built exclusively with pure HTML and JavaScript, without external frameworks or external CSS.

**Features**
- **Dynamic conversion** between three currencies: Canadian Dollar (CAD), US Dollar (USD), and Euro (EUR).
- **Data validation**: Input checks to prevent negative, zero, or invalid amounts (`isNaN`).
- **Event handling**: Form submission managed via JavaScript without page reloads (`preventDefault`).
- **Clean layout**: Structured using a table and native HTML attributes (`align`, `cellpadding`, `bgcolor`) for a tidy interface.

** Technologies Used**
-**HTML5**: Form structure, currency selectors, layout table, and native presentation attributes.
- **JavaScript (ES6)**: Calculation logic, DOM manipulation (`document.getElementById`), `submit` event handling, and dynamic output using template literals.

**Project Structure**
The code is neatly split into two separate files in the same directory:
├── index.html   <-- HTML structure and link to the JS file
└── script.js    <-- Conversion logic and submit event handling
