export const itemPosition = (images: string[], i: number) => {
  let degrees = (360 / images.length) * i - 1;
  return `
  &:nth-child(${i}) {
    transform: rotateY(${degrees}deg) translateZ(150px);
  }
  `;
};


export const getItemsPosition = (images: string[]) => {
  let str = '';

  for (let i = 1; i <= images.length; i++) {
    str += itemPosition(images, i);
  }

  return str;
};



export const carouselRotation = (images: string[], radius: string) => {
  let frames = '';

  for (let i = 1; i <= images.length; i++) {
    let firstFrame = (100 / (images.length * 2)) * (2 * i - 2);
    let secondFrame = (100 / (images.length * 2)) * (2 * i - 1);

    let degrees = (360 / images.length) * (i - 1);

    frames += `
    ${firstFrame}% ,${secondFrame}% {
    transform: translateZ(-${radius}) rotateY(-${degrees}deg);
  }
    `;
  }

  frames += `
  100% {
    transform: translateZ(-${radius}) rotateY(-360deg);
  }`;

  return frames;
};

export const negativeRotation = (images: string[]) => {
  let frames = '';

  for (let i = 1; i <= images.length; i++) {
    let firstFrame = (100 / (images.length * 2)) * (2 * i - 2);
    let secondFrame = (100 / (images.length * 2)) * (2 * i - 1);

    let degrees = (360 / images.length) * (i - 1);
    frames += `
    ${firstFrame}% ,${secondFrame}% {
    transform: rotateY(${degrees}deg);
    }
    `;
  }

  frames += `
  100% {
    transform:rotateY(360deg);

  }`;

  return frames;
};