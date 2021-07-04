import Carousel from "react-bootstrap/Carousel";

function Slideshow2() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625252253/thumbnail_IMG_9697_o29wen.jpg"
            alt="trening-tenis-siedlce"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625252837/thumbnail_IMG_9702_o2gzqh-c_mpad_h_720_w_960_hlgbyl.jpg"
            alt="lekcje-tenisa-w-siedlcach"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625252391/thumbnail_IMG_9696_xgwx8l.jpg"
            alt="lekcje-tenisa-w-siedlcach"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1625318863/tenis-siedlce_ikkn3b.jpg"
            alt="lekcje-tenisa-w-siedlcach"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slideshow2;
