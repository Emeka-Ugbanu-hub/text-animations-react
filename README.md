# Text Animations React

A React.js and typescript package that lets you animates text and add text effects with ease with ease

## Installation
  With Yarn: 
  ```bash
Yarn add text-animations-react
```
With npm:
  ```bash
npm install --save text-animations-react
```
## Usage

The text animations are divided into two,the special animations which is imported as Special and the regular animation with is imported as TextAnim
see an example below:
 ```bash
 //import as special animation
import {Special} from "text-animations-react"

//import as regular animation
import {TextAnim} from "text-animations-react"
```
The difference between the two is that the TextAnim animations is more configurable than Special animations

### Example

```bash
import {TextAnim} from "text-animations-react"

 function App() {
   return (
     <TextAnim name="Cool Animation Libary" 
     size={6} type="bounceone"
      color="orange"
      count="infinite"
       duration={1}/>
   )
 }
```

## regular animation i.e TextAnim

| types  |                                                 Implementation                                   | 
| -------|:------------------------------------------------------------------------------------------------:| 
| bounceone| `<TextAnim name="Cool" type="bounceone" color="orange" size={3} count="infinite" duration={2}/>` |
| reveal   | `<TextAnim name="Cool" type="reveal" color="orange" size={3} count="infinite" duration={4}/>`  |
| pulse   | `<TextAnim name="Cool" type="pulse" color="orange" size={3} count="infinite" duration={1}/>`   |
| rubberband| `<TextAnim name="Cool" type="rubberband" color="orange" size={3} count="infinite" duration={2}/>` |
| shake   | `<TextAnim name="Cool" type="shake" color="orange" size={3} count="infinite" duration={2}/>`   |
| wobble   | `<TextAnim name="Cool" type="wobble" color="orange" size={3} count="infinite" duration={2}/>`  |
| flip   | `<TextAnim name="Cool" type="flip" color="orange" size={3} count="infinite" duration={2}/>`   |
| lightspeed | `<TextAnim name="Cool" type="lightspeed" color="orange" size={3} count="infinite" duration={2}/>` |
| rollin   | `<TextAnim name="Cool" type="rollin" color="orange" size={3} count="infinite" duration={2} />`   |
| rotatein | `<TextAnim name="Cool" type="rotatein" color="orange" size={3} count="infinite" duration={2} />`   |
| hinge   | `<TextAnim name="Cool" type="hinge" color="orange" size={3} count="infinite" duration={2} />`   |
| gradientone | `<TextAnim name="Cool" type="gradientone" grad1="red" grad2="blue" grad3="green" grad4="yellow" size={3} count="infinite" duration={2} />` |
| flipvertical | `<TextAnim name="Cool" type="flipvertical" color="orange" size={3} count="infinite" duration={2} >`|
| goup | `<TextAnim name="Cool" type="goup" color="orange" size={3} count="infinite" duration={2} />`  |
| fromtop   | `<TextAnim name="Cool" type="fromtop" color="orange" size={3} count="infinite" duration={2} >` |
| popoutin   | `<TextAnim name="Cool" type="popoutin" color="orange" size={3} count="infinite" duration={2} />` |
| glitchhop  | `<TextAnim name="Cool" type="glitchhop" color="orange" size={3} count="infinite" duration={2} />` |
| swing | `<TextAnim name="Cool" type="swing" color="orange" size={3} count="infinite" duration={2} /> `  |
| shadows |` <TextAnim name="Cool" type="shadows"  color="orange" size={3} count="infinite" duration={2} />`  |


![text-animations-react](https://j.gifs.com/Z8XolE.gif)


## special animation i.e Special

| types  |                                                 Implementation                                    | 
| -------|:-------------------------------------------------------------------------------------------------:| 
| specialone| `<Special name="Nice" type="specialone" color="white" size={4} count="infinite" duration={2}/>`  |
| specialtwo | `<Special name="Cool" type="specialtwo" color="orange" size={3} count="infinite" duration={4}/>`  |
| specialthree | `<Special name="Cool" type="specialthree" color="orange" size={3} count="infinite" duration={2}/>` |
| specialfour|` <Special name="Cool" type="specialfour" color="orange" size={3} count="infinite" duration={2}/>` |
| one |` <Special name="Cool" type="one" color="orange" size={3} count="infinite" duration={2}/> `  |
| three |` <Special name="Cool" type="three" color="orange" size={3} count="infinite" duration={2}/> ` |
| four | `<Special name="Cool" type="four" color="orange" size={3} count="infinite" duration={2}/>`   |

>>Notice: The Specialone and Specialthree type can only animate five(5) characters 

![text-animations-react](https://j.gifs.com/r27vQk.gif)

## All Properties

| Property | Type       |                          Description                             |
|------- |:------------:| :--------------------------------------------------------------: |
|types   | `string`     | `Sets the size of the text`                                      |
|color   |  `string`    |`Sets the color of the text (color name , hexadecimal)`           |
|name    |   `string`   | `Sets the value of the text`                                     |
|top     |  `number`    |`Lets you move the text like a margin-top CSS property would`     |
|right   |  `number`    |`Lets you move the text like a margin-right CSS property would`   |
|bottom  |  `number`    |`Lets you move the text like a margin-bottom CSS property would`  |
|left    |  `number`    |`Lets you move the text like a margin-left CSS property would`    |
|duration| `number`   |`Sets the animation duration`                                       |
|delay   |   `number`   |`Sets a delay for the animation`                                  |
|count   |   `string`   |`Sets how many times you want the animatiuon to run`              |
|size    |  `number`    |`Sets the size of the text`                                       |
|grad1   |  `string`    |`This property can only with the "gradientone" type sets the color to be animated (color name,hex)` |
|grad2   |  `string`    |`This property can only with the "gradientone" type sets the color to be animated (color name,hex)`
|grad3   |  `string`    |`This property can only with the "gradientone" type sets the color to be animated (color name,hex)`
|grad4   |  `string`    |`This property can only with the "gradientone" type sets the color to be animated (color name,hex)`

## Issues and Bugs

Let us know if you [found a bug ](https://github.com/Emeka-Ugbanu-hub/text-animations-react/issues)

