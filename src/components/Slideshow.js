import Carousel from "react-bootstrap/Carousel";
import "./Slideshow.css";

function Slideshow() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1621786620/set_dwwt4h.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Siedlecka Edukacja Tenisowa - szkoła tenisa ziemnego w Siedlcach
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1621786831/wojtek1_zu6pes.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              Zajęcia indywidualne i grupowe od poziomu początkującego po poziom
              zawodniczy
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1621786620/set_dwwt4h.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Nauka gry w tenisa ziemnego dla osób dorosłych oraz dzieci</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
