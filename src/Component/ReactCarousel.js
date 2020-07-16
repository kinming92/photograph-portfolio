import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ReactCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={10}
        orientation={"vertical"}
        visibleSlides={5}
        className="carousel-container"
      >
        <ButtonBack className="carousel-button">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </ButtonBack>
        <Slider>
            <Slide index={0}>
              <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={1}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={2}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={3}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={4}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={5}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={6}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={7}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={8}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
            <Slide index={9}>
                <Image className="slide__img" src="https://via.placeholder.com/100x120" alt="none"/>
            </Slide>
        </Slider>
        <ButtonNext className="carousel-button">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </ButtonNext>
      </CarouselProvider>
    );
  }
}

export default ReactCarousel