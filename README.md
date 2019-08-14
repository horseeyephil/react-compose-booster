# Compose Booster
A set of helpful, minimal HOFs to help manage function/Component composition and control flow. 
Imagined as a helpful extension to acdlite's highly recommended Recompose library - Like a "booster" pack. 
Can be used with React or vanilla JS.
```
import React from 'react'
import { branch } from 'recompose'
import { ifProp, nestWith } from 'compose-boost'
import { Movie, Subtitles } from './myComponents

const MovieWithSubtitles = nestWith(Subtitles)(Movie)

const MovieMightHaveSubtitles branch(props=> props.hasSubtitles, nestWith(Subtitles))(Movie)

const MovieWithFrenchSubtitles = nestWith({frenchSubtitles: Subtitles})(Movie)

const OnlyFrenchCinema = ifProp('isFrench)(MovieWithFrenchSubtitles)
```

This library's aim is to introduce helpful functions for decorating React components - to leverage functional, declarative writing style that makes code more concise and legible.

As stated above, it was largely inspired by working with Recompose. It doesn't do anything that Recompose couldn't handle - but tweaks a few things and removes some HOC wrappers to make a few cases more streamlined.
Furthermore, I wanted a library that included a simple, definitive "maybe" render function for React, which is included here as `either`.
---
### either
The "maybe" render or "null" render is one of the most in-demand patterns/utilities when writing React Components. It protects from empty displays or breaking code. A quick search will show that there are many packages published for this utility. I wanted to include a minimal one as a core function of `compose-boost` -one that is simply a higher order function, that does not require JSX syntax or influence from props.

`either` simply runs a test function, and then will render "left" or "right" hand arguments depending on success. If no optional argument is provided, `either` defaults to a null return -making it **super concise**. It is a light syntax that can be used as a branch or a maybe.
```
const GreenOrRedLight = either(props => props.batteryCharge === 100, RedComponent)(GreenComponent)

<GreenOrRedLight batteryCharge={88} />
// branch renders the RedComponent

const OnlyNotifyWhenBatteryIsLow = either(props => props.batteryCharge < 5)(GreenOrRedLight)

<OnlyNotifyWhenBatteryIsLow batteryCharge={25} />
// renders nothing
```
---
## Methods
##### Compose Functions
- **[either](src/either)**: branch or maybe
- **[ifProp](src/ifProp)**: lazy syntax either, checks for truthy prop key
- **[nestWith](src/nestWith)**: give children to a Component!
- **[wrapWith](src/wrapWith)**: wrap one or more Components with an outer shell!
- **[takeProp](src/takeProp)**: create a component that picks and flattens one of its passed props
- **[quickText](src/quickText)**: declare an html element as a string, tests for a prop key and propagates that prop as innerText children

##### Utilities
- **[updateDeep](src/updateDeep)**: Immutably deep clone an object with an updated value at a "path" - Common pattern for setting state in React
- **[getNull](src/getNull)**: no-op feeding a Null
- **[plog](src/plog)**: "Tap" style log, that can wait for resolved async expression

#### More to come!


