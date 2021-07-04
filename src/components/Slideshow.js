import Carousel from "react-bootstrap/Carousel";
import "./Slideshow.css";

function Slideshow() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625317615/set-tenis-siedlce_pmmlpf.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Siedlecka Edukacja Tenisowa W. Jobczyk - szkoła tenisa ziemnego w Siedlcach
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625319234/IMG_0942_ehwgrb_lqd9mk.jpg"
            alt="Treningi tenisa w Siedlcach"
          />

          <Carousel.Caption>
            <h3>
              Zajęcia indywidualne i grupowe od poziomu początkującego po poziom
              zawodniczy
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625254533/thumbnail_IMG_9695_a5s1rh.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Nauka gry w tenisa ziemnego dla osób dorosłych oraz dzieci</h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default Slideshow;
