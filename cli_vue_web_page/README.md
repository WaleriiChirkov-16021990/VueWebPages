# cli_vue_web_page

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### credit rate
monthlyPayment: function() {
const rate = this.interestRate / 100 / 12;
const term = this.loanTerm;
const principal = this.loanAmount;
const numerator = rate * Math.pow(1 + rate, term);
const denominator = Math.pow(1 + rate, term) - 1;
const payment = principal * (numerator / denominator);
return payment.toFixed(2);
}

totalPayment: function() {
const term = this.loanTerm;
const payment = parseFloat(this.monthlyPayment);
return (term * payment).toFixed(2);
}
