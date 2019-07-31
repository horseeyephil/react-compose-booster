### wrapWith
> wrapWith(Wrapper: function, OptionalPropsKey: string)(...Targets: functions)

###### See readme for nestWith

WrapWith is like the nestWith function with the parameters reversed. It can "decorate" its target with a wrapper Component, and also take multiple Component targets to place inside the wrapper. It also has an optional string argument in the second position, a key to specify which props to pass into the wrapper. This can be used as an "escape hatch" in case the wrapper Component needs distinct props.

`wrapWith` is intended to make code more concise and can be used as a nice utility to simply couple two different React Components.
- Examples:

```
const NavigationBar = wrapWith(NavigationPanel)(LinkA, LinkB, LinkC)
const GrowableTiles = wrapWith(FlexContainer, 'containerSize')(Caption, Photo) // The flex container element will receive the containerSize props.
const SearchAndScroll = wrapWith(React.Fragment)(Spotlight, ScrollMenu)
```

```

const Slide = props => <div><Img/><p/></div>
const EditPanel = props => <div><h1/>{props.children}<Dashboard/></div>

const EditModeSlide = wrapWith(EditPanel, 'editSliders')(Slide)

const SlideView = props => {
	props.className = "fullSize" ? return <Slide {...props} />  :
	return <EditModeSlide {...props} />
}
<>)
```
