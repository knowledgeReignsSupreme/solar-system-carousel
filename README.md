# Solar System Carousel
### A unique and easy to use carousel.
#### Made by Hadar Harush & David Sharki.

```bash
  npm i solar-system-carousel
```

![Alt Text](https://media.giphy.com/media/RZ8uzCFbGKy82ESqlh/giphy.gif)

<br />

CodeSandbox playground: 
<br />
https://codesandbox.io/s/solar-system-carousel-yuy1l


## Usage:
```js
import { SolarSystemCarousel } from "solar-system-carousel";

function Foo() {
  return (
    <div>
    <SolarSystemCarousel images={images} centeredImage={centeredImage} />
    </div>)
}
```

## Props:
<br />

| prop    | value  | Description         | default | required? |
| ------- | ------ | ------------------- | ------- | --------- |
| images    | array of string | The images that should revolve in the carousel. must have 1-12 images! | an example array of 4 images | yes                                                      
| centeredImage    | an image string | The images that should be in the middle of the carousel | head image | yes                                                      
| centerWidth    | string | width of the centered image. works with any unit. e.g: centerWidth='20rem' or centerWidth='80%'. | '400px' | no                                                      

<br />

#### Hadar's email: hadarushha@gmail.com

#### David's email: david17895@gmail.com

<br />

<a href='https://www.linkedin.com/in/david-sharki-925892204/'> David's LinkedIn </a>
<br />
<a href='https://www.linkedin.com/in/hadar-harush-a08b04210/'> Hadars's LinkedIn </a>

