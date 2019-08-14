### updateDeep
>updateDeep(root: object, path: string, data: any, merge: (optional) Boolean) => object

updateDeep takes a root object, a path of '.' dot separated keys, and a payload to place at the destination path. 

Immutably copying objects is a high-demand pattern when having to set state in React. Updating deeply nested keys can be cumbersome in a multiply nested structure - often requiring several `Object.assign` statements or `...` spread operators. This utility provides a clean way to produce an immutably cloned object with the payload placed at the end of the path. If the optional "merge" (fourth) parameter is truthy - the final key will merge in the new data rather than wholesale replace its value.

- Generally, it looks like this:

```
const update = updateDeep(state.city, 'zipcode.street.mailbox', MessagePayload)

```

- Here's how you might use it in a React context:

```
const Page extends React.component {
	state = {
	  isLoading: false,
    data: {
			animals: {
				dogs: [],
				cats: [...]
			}
		},
    display: {
			button: true, 
			nav: { 
				links: [...],
				attributes: { mini: false, showAllLinks: true, toggleSearch: false }
			}, 
			slider: true
		}
	}

	fetchDogs() {
		const incomingDogs = api()
		const updatedData = updateDeep(this.state.data, 'data.animals.dogs', incomingDogs)
		this.setState({ data: updatedData })
	}
	
	// "merge" option set to true
	shrinkNav() {
		const updateDisplay = updateDeep(
			this.state.display, 'nav.attributes', { mini: true, showAllLinks: false }, merge = true
		)
		this.setState({ display: updateDisplay})
		// this.state.display.nav.attributes will equal { mini: true, showAllLinks: false, toggleSearch: false}
	}
}
```
