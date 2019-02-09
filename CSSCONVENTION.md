# CSS naming convention

React Rainbow Components uses the BEM naming convention. The BEM approach ensures that everyone who participates in the development of the project works with a single codebase and speaks the same language. Using proper naming conventions will prepare you for the changes in the design of the project.
BEM (which stands for Block-Element-Modifier) is a naming convention standard for CSS class names. It has fairly wide adoption and is immensely useful in writing CSS that is easier to read, understand, and scale.

## How It Works
A BEM class name includes up to three parts.

- Block: The outermost parent element of the component is defined as the block.
- Element: Inside of the component may be one or more children called elements.
- Modifier: Either a block or element may have a variation signified by a modifier.

If all three are used in a name it would look something like this:

`[block]_[element]--[modifier]`

We modify the BEM convention to add ‘rainbow’ word at the beginning of the block:
`[rainbow]-[component-name]_[element]--[modifier]`

Example: 

`rainbow-button_label--hidden`

If you want to know more about BEM, convention go to 
[https://assortment.io/posts/introducing-bem-css-naming-convention](https://assortment.io/posts/introducing-bem-css-naming-convention)
