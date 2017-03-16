# Dyno Coffee

Even the best developers need to consistently consume coffee in order to keep doing their job well. Your app's dyno is the same way 🐲 ☕

Heroku's free hosting provides 550 dyno hours per month, or ~18.3 hours per day. Dynos go to sleep after 30 minutes of inactivity. Personally, I'd prefer my dyno to be a little less narcoleptic 💤 Follow these instructions to write a script that pings your dyno every 15 minutes to prevent it from falling asleep, with the exception of a specified bedtime, which prevents you from using up all your monthly hours before your time is up.

## Install Node's `http` library

In the Terminal, navigate to your project's directory and install Node's `http` library:
`npm install --save http`

## Add script to entry.jsx

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

As long as you specify a period of at least 6 hours, you should not run the risk of going over your free dyno hour limit. The only exception would be if your your app receives a substantial amount of actual traffic during the designated sleep period. I specified I sleep period of 7 hours to account for this possibility.

## Push to Heroku

That's it! Your dyno should now go to sleep during the interval specified, but will no longer nap during the day :)

If you're interested in how many hours you have remaining, you can always run `heroku ps` in the Terminal:
`>> Free dyno hours quota remaining this month: 545h 24m (99%)`
