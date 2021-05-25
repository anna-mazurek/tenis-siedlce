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
