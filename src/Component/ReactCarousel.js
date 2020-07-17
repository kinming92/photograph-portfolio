import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ReactCarousel extends React.Component {
  state = {
    showItems: 5
  }
  handleWindowResize = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // console.log("width---->", width);
    // console.log("height---->", height);
    // console.log("hello")
    if (window) {
      let showItems = 8
      if (width < 760) {
        showItems = 3
      } else if (width < 800) {
        showItems = 4
      } else if (width < 1050) {
        showItems = 5
      } else if (width < 1440) {
        showItems = 6
      } else if (width < 1980) {
        showItems = 7
      }
      this.setState({
        showItems: showItems
      })
    }
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleWindowResize.bind(this))
      this.handleWindowResize()
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleWindowResize.bind(this))
    }
  }

  render() {
    const { showItems } = this.state
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={10}
        orientation={"vertical"}
        visibleSlides={showItems}
        className="carousel-container"
      >
        <ButtonBack className="carousel-button">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </ButtonBack>
        <Slider>
            <Slide index={0}>
              <Image className="slide__img" src="/photograph-portfolio/image/be-kind.jpg" alt="none"/>
            </Slide>
            <Slide index={1}>
                <Image className="slide__img" src={window.location.origin + '/image/blue-and-brown-glass-rectangles.jpg'} alt="none"/>
            </Slide>
            <Slide index={2}>
                <Image className="slide__img" src="/photograph-portfolio/image/green-plant-on-brown-glass-vase.jpg" alt="none"/>
            </Slide>
            <Slide index={3}>
                <Image className="slide__img" src="/photograph-portfolio/image/highway-covered-in-water.jpg" alt="none"/>
            </Slide>
            <Slide index={4}>
                <Image className="slide__img" src="/photograph-portfolio/image/man-wearing-white-shirt-beside-woman.jpg" alt="none"/>
            </Slide>
            <Slide index={5}>
                <Image className="slide__img" src="/photograph-portfolio/image/pexels.jpg" alt="none"/>
            </Slide>
            <Slide index={6}>
                <Image className="slide__img" src="/photograph-portfolio/image/photo-of-man-leaning-on-wall.jpg" alt="none"/>
            </Slide>
            <Slide index={7}>
                <Image className="slide__img" src="/photograph-portfolio/image/polaroid-photo-of-flowers.jpg" alt="none"/>
            </Slide>
            <Slide index={8}>
                <Image className="slide__img" src="/photograph-portfolio/image/top-view-photo-of-women-with-face-art.jpg" alt="none"/>
            </Slide>
            <Slide index={9}>
                <Image className="slide__img" src="/photograph-portfolio/image/white-jellyfish.jpg" alt="none"/>
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