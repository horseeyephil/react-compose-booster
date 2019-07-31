### nestWith
>nestWith(...children : props => value)
(target: props => value) =>  Component: props => value
or
nestWith(mappings: { propsKey: childComponent })
(target: props => value) =>  Component: props => value

NestWith takes child Components to be passed into a target Component. The function first creates an HOC function to decorate its target, and then returns a resultant Component that will propagate its props to the child decorators.
The first function can take one or unlimited arguments to use as children. It can also accept an `object` as its argument with key-value pair mappings of 

  1. A string that specifies which prop on resultant component will be passed 
  2. the child component that will recieve these props. 

This is useful in case the child components need to receive specific shapes that do not match the top level props passed in.

- Examples:

```
const MenuItem = props => (
<div>
	{props.children}
	<span>{props.menuItem}</span>
	<span>{`$ ${props.itemPrice}`}</span>
</div>)

const FavoriteItem = nestWith(StarIcon)(MenuItem);
const FavoriteVeganItem = nestWith(StarIcon, VeganIcon)(MenuItem);
const SpicyItem = nestWith({ spiceLevel: SpicyIcon })(MenuItem);
// Spicy Item will be passed props.SpicyIcon rather than all props
```
`nestWith` is a close spin on Recompose's `nest` function. Instead of requiring all components at once though, `nestWith` creates a decorating function that can be reused across contexts or be useful as an applied HOC wrapper. See this in tandem with the `branch` function from recompose:
```
import { branch } from 'recompose'

const DangerouslySpicy = branch(
	props => props.spiceLevel.level > 5, 
	nestWith(Disclaimer))(SpicyItem)
// If props.spiceLevel.level is greater than 5, the Spicy Menu Item will render with a disclaimer.
```
#### Composition
In `React` we can leverage `props.children` to use composition as a design pattern.
Rather than switching over many inline conditions, we can declare which chidren to insert.
- Before:

```
const DetailedProductView = props => (
	<div>
		<img/>
		<Description/>
		<Price />
		{props.displayExtendedDescription && <SaleFlag/>}
		{props.displayExtendedDescription && <ClearanceFlag />}
		{props.displayExtendedDescription && <ReviewStars />}
		{props.displayExtendedDescription && <ExtendedDescription />}
	</div>
)
```
- After:

```
	const RegularProductView = props => (
	<div>
		<Img/>
		<Description/>
		<Price/>
		{props.children}
	</div>
	)
	
	const ProductView = branch(
	props => props.displayExtendedDescription, 
	nestWith(SaleFlag, ClearanceFlag, ReviewStars, ExtendedDescription)
	)(RegularProductView)
	
```
