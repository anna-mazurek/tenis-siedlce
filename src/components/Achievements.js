import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./Achievements.css";

function Achievements() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        style={{ backgroundColor: "#cb9737", borderStyle: "none" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        czytaj więcej
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="achievements-more">
            Od 2011 roku, studiując na AWF w Warszawie zacząłem swoją przygodę z
            pracą trenerską. Przez lata, pracując na kortach w Warszawie, Łodzi
            oraz Siedlcach miałem okazje szkolić dorosłych, młodzież oraz dzieci
            współpracując przy tym ze świetnymi trenerami zawodników WTA oraz
            ITF.
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Achievements;
