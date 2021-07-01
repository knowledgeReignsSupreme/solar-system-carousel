import React, { useEffect } from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import { defaultCenterImage, defaultImages } from './defaultImages';

interface CarouselProps {
  images: string[];
  centeredImage: string;
}

interface CarouselStyles {
  carouselAnimation?: Keyframes;
  negativeAnimation?: Keyframes;
  itemsAnimation?: () => string;
  centerWidth?: string;
  radius?: string;
  width?: string;
}

type IProps = CarouselProps & CarouselStyles;

const Carousel: React.FC<IProps> = ({
  images = defaultImages,
  centeredImage = defaultCenterImage,
  centerWidth = '100px',
}) => {
  const radius = '150px';

  const itemPosition = (i: number) => {
    let calc = (360 / images.length) * i - 1;
    return `
    &:nth-child(${i}) {
      transform: rotateY(${calc}deg) translateZ(150px);
    }
    `;
  };

  const getItemsPosition = () => {
    let str = '';

    for (let i = 1; i <= images.length; i++) {
      str += itemPosition(i);
    }

    return str;
  };

  const carouselRotation = () => {
    let frames = '';

    for (let i = 1; i <= images.length; i++) {
      let firstFrame = (100 / (images.length * 2)) * (2 * i - 2);
      let secondFrame = (100 / (images.length * 2)) * (2 * i - 1);

      let calc = (360 / images.length) * (i - 1);

      frames += `
      ${firstFrame}% ,${secondFrame}% {
      transform: translateZ(-${radius}) rotateY(-${calc}deg);
    }
      `;
    }

    frames += `
    100% {
      transform: translateZ(-${radius}) rotateY(-360deg);
    }`;

    return frames;
  };

  const carouselAnimation = keyframes`${carouselRotation()}`;

  const negativeRotation = () => {
    let frames = '';

    for (let i = 1; i <= images.length; i++) {
      let firstFrame = (100 / (images.length * 2)) * (2 * i - 2);
      let secondFrame = (100 / (images.length * 2)) * (2 * i - 1);

      let calc = (360 / images.length) * (i - 1);
      frames += `
      ${firstFrame}% ,${secondFrame}% {
      transform: rotateY(${calc}deg);
      }
      `;
    }

    frames += `
    100% {
      transform:rotateY(360deg);

    }`;

    return frames;
  };

  const negativeAnimation = keyframes`${negativeRotation()}`;

  useEffect(() => {
    // solar-system-carouel - images props
    if (!images.length || images.length > 12) {
      throw new Error('Images prop must have between 1 to 12 images.');
    }
  }, [images?.length]);

  return (
    <TechsCarousel>
      <CarouselContent carouselAnimation={carouselAnimation} radius={radius}>
        {images.map((imageSrc, i) => (
          <Item itemsAnimation={getItemsPosition} key={imageSrc + i}>
            <img src={imageSrc} alt="" />
          </Item>
        ))}
        <LastChild
          negativeAnimation={negativeAnimation}
          centerWidth={centerWidth}
        >
          <img src={centeredImage} alt="" />
        </LastChild>
      </CarouselContent>
    </TechsCarousel>
  );
};

const TechsCarousel = styled.div`
  margin: auto;
  margin-bottom: 600px;
  width: 60px;
  height: 60px;
  transform: translateY(50px);
  perspective: 400px;
`;

const CarouselContent = styled.div<CarouselStyles>`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateZ(-${props => props.radius}) rotateY(0);
  transform-style: preserve-3d;
  animation: ${props => props.carouselAnimation} 15s infinite
    cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
`;

const Item = styled.div<CarouselStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 2px 6px 0px #e2e2e2;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
    outline: 1px solid transparent;
  }

  &:hover {
    width: 150% !important;
    height: 150% !important;
  }

  ${props => props.itemsAnimation && props.itemsAnimation()};
`;

const LastChild = styled.div<CarouselStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  animation: ${props => props.negativeAnimation} 15s infinite
    cubic-bezier(1, 0.015, 0.295, 1.225) forwards;

  img {
    width: ${props => props.centerWidth};
    transform: translateY(35px);
  }
`;

export default Carousel;
