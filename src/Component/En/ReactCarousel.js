import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ReactCarousel extends React.Component {
  
  state = {
    showItems: 7
  }
  handleWindowResize = () => {
    // const width = Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
    const height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    // console.log("width---->", width);
    console.log("height---->", height);

    if (window) {
      let showItems = 5
      // if (width < 760) {
      //   showItems = 3
      // } else if (width < 800) {
      //   showItems = 4
      // } else if (width < 1050) {
      //   showItems = 5
      // } else if (width < 1440) {
      //   showItems = 6
      // } else if (width < 1980) {
      //   showItems = 7
      // }

      if(height <= 500){
        showItems = 6
      }else if (height > 500 && height <= 900){
        showItems = 7
      }else if ( height > 900){
        showItems = 9 //suppose to be max
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
    console.log(showItems)
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
                <Image className="slide__img" src="https://images.pexels.com/photos/4843330/pexels-photo-4843330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="none"/>
            </Slide>
            <Slide index={2}>
                <Image className="slide__img" src="/photograph-portfolio/image/green-plant-on-brown-glass-vase.jpg" alt="none"/> 
            </Slide>
            <Slide index={3}>
                <Image className="slide__img" src="/photograph-portfolio/image/highway-covered-in-water.jpg" alt="none"/>
            </Slide>
            <Slide index={4}>
                <Image className="slide__img" src="https://images.pexels.com/photos/4584968/pexels-photo-4584968.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="none"/>
            </Slide>
            <Slide index={5}>
                <Image className="slide__img" src="https://images.pexels.com/photos/4816503/pexels-photo-4816503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="none"/>
            </Slide>
            <Slide index={6}>
                <Image className="slide__img" src="https://images.pexels.com/photos/3706642/pexels-photo-3706642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="none"/>
            </Slide>
            <Slide index={7}>
                <Image className="slide__img" src="/photograph-portfolio/image/polaroid-photo-of-flowers.jpg" alt="none"/>
            </Slide>
            <Slide index={8}>
                <Image className="slide__img" src="https://images.pexels.com/photos/3328240/pexels-photo-3328240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="none"/>
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