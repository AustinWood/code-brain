# Code Brain

Code Brain is a flash card app designed to assist software engineers in developing language fluency by committing bite-sized chunks of information (such as algorithms or language syntaxes) to long-term memory.

* [Code Brain live][live]
[live]: https://codebrain.herokuapp.com

## Features & Implementation

### REPL

The most interesting feature to build was the in-browser REPL. I had originally been planning to user the API provided by repl.it, but sadly, they have recently stopped accepting new clients. At a loss to find any acceptable alternatives, I chose to build my own simplified REPL using JavaScript's `eval` method.

`eval` only returns the last line evaluated, but I wanted to be able to print all `console.log` statements to the in-app console. I was able to achieve this by converting the user's code to one string of plain text, replacing all instances of `console.log` with `resultsArr.push`, prepending `let resultsArr = [];` and appending `return resultsArr;`. `eval()` returns the array of results, and I print each element to a new line in the console.

```javascript
export const runCode = () => (dispatch, getState) => {
  const state = getState();
  const json = state.currentNote.skeleton;
  const content = convertFromRaw(JSON.parse(json));
  let plainText = content.getPlainText();
  plainText = plainText.replace(new RegExp("console.log", 'g'), "resultsArr.push");
  plainText = "let resultsArr = [];\n" + plainText + "\nresultsArr;";
  let result;
  let resultsArr;
  try {
    resultsArr = eval(plainText);
  } catch (e) {
    resultsArr = ["Syntax error"];
  }
  dispatch(logCode(""));

  let logByLine = (i = 0) => {
    setTimeout(() => {
      if (resultsArr.length > i) {
        i++;
        result = resultsArr.slice(0, i).join("\n");
        dispatch(logCode(result));
        logByLine(i);
      }
    }, 100);
  };

  setTimeout(() => {
    logByLine();
  }, 180);
};
```

## Future Directions for the Project

I plan to continue working on Code Brain, as it is an app that I would like to use myself, and I think it will be useful to others.

### Support for more languages

Currently, Code Brain's REPL only supports JavaScript. The first additional language I plan to add is Ruby. I will first attempt to do this by using Opal to transpile ruby code into JavaScript and run the code in the browser. As an alternative, I will look for a way to send the code to the Rails backend and run it safely on my server.

### Smart error messages

Currently, the app either displays all `console.log` statements, or `Syntax error`. It would be nice to provide the user with more intelligent errors, such as what line number is responsible for the error.

### Tags

Users may want to study only notes related to a specific topic (e.g. recursion) or problems in a specific language. I plan to implement a tags feature that allows users to select multiple tags and filter their notes accordingly.
