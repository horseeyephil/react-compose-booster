### quickText
>quickText(propKey : string, htmlTag: string, optionalBaseProps: object) => Component

QuickText is like a React.createElement with a built in `.either`. It takes a key for a prop and will render an HTML tag, dependent if that prop is provided. Furthermore, it treats that prop as the "child" and  propagates it as children - setting the html inner text. Base props can be optionally provided before the resultant Component receives declared props.
```
const Subtitles = quickText('subtitles', 'h4')

<Subtitles subtitles="It was the best of times..." />
// renders <h4>It was the best of times...</h4>
<Subtitles subtitles="" />
// renders nothing

const StyledSubtitles = quickText('subtitles', 'span', { className: 'white-subtitles' })

<Subtitles subtitles="Call me Ishmael" /> 
// renders <h4 class="white-subtitles">Call me Ishmael</h4>
```