### plog
> message: string => expression => expression

A simple logging utility that can console.log the result of a Promise if supplied. It also acts as a functional "tap", as it returns its argument.
First, `plog` takes a string and returns a function to use on the expression. `plog` will log the resolved value of the expression and interpolate it with the first string.
Example: 

```
const notify = plog('We received this:')
const tapPromise = notify(myAPI.get('/endpoint')) // We received this: {result of API call}
tapPromise.then(updateState)

const tapRegularValue = notify(2*4) // We received this: 8
// tapRegularValue === 8 
```