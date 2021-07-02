import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import React from "react";
import "./MainText.css";

function MainText() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="jumbo-header">O mnie</h1>
          <img className="wojtek-foto" src="https://res.cloudinary.com/dnk61xxgl/image/upload/ar_1:1,b_rgb:007663,bo_5px_solid_rgb:ffffff,c_fill,co_rgb:007663,g_auto,r_max,w_1000/v1625256146/thumbnail_IMG_9694_p62o6m.jpg"/>
          <p className="jumbo-container">
            Cześć! Nazywam się Wojtek Jobczyk i z tenisem związany jestem od 6
            roku życia. W ciągu 10 lat gry zawodniczej wielokrotnie z sukcesami
            rywalizowałem w turniejach organizowanych przez Polski Związek
            Tenisowy (turnieje wojewódzkie, ogólnopolskie, Mistrzostwa Polski)
            reprezentując w tym czasie między innymi klub MKS Pogoń Siedlce.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default MainText;
