import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.css';

function Slideshow() {
return <div className="carousel">
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618310214/thumbnail_image2_kg04sz.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Treningi tenisa w Siedlcach</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618310207/thumbnail_image1_j4tuvm.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Zajęcia indywidualne i grupowe</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618310214/thumbnail_image2_kg04sz.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Wszystkie poziomy zaawansowania</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
}

export default Slideshow;