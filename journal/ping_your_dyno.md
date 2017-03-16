In the Terminal, navigate to your project's directory and install Node's `http` library:
`npm install --save http`


```javascript
var http = require("http");
setInterval(function() {
  const currentdate = new Date();
  const hours = currentdate.getHours();
  if (hours > 5 && hours < 22) {
    http.get("https://codebrain.herokuapp.com");
  }
}, 900000); // every 15 minutes
```

Bedtime before midnight:
`(hours > 5 && hours < 22) // ping between 5am and 10pm`

Bedtime after midnight:
`(hours < 1 || hours > 8) // don't ping between 1am and 8am`
