import React from "react";
import Example from "./Example";
import MainText from "./MainText";
import Slideshow2 from "./Slideshow2";
import Achievements from "./Achievements";
import "./About.css";

function About() {
  return (
    <div>
      {/* <section id="o-mnie">
        <h2 className="about-header">O mnie</h2>
        <p className="about">
          Cześć!
          <br />
          <br />
          Nazywam się Wojtek Jobczyk i z tenisem związany jestem od 6 roku
          życia. W ciągu 10 lat gry zawodniczej wielokrotnie z sukcesami
          rywalizowałem w turniejach organizowanych przez Polski Związek
          Tenisowy (turnieje wojewódzkie, ogólnopolskie, Mistrzostwa Polski)
          reprezentując w tym czasie między innymi klub MKS Pogoń Siedlce.
          <br />
          <br />
          <img
            className="wojtek"
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618310214/thumbnail_image2_kg04sz.jpg"
            alt="First slide"
          />
          <br />
          Urodziłem się w 1992 roku i jestem licencjonowanym trenerem ITF oraz
          PZT, w 2017 roku ukończyłem Produkcje Filmową i Telewizyjną w łódzkiej
          Szkole Filmowej. Posiadam również uprawnienia wychowawcy wypoczynku. W
          ciągu swojej pracy wielokrotnie uczestniczyłem w obozach i
          półkoloniach tenisowych.
          <br />
          <br />
          Od 2011 roku, studiując na AWF w Warszawie zacząłem swoją przygodę z
          pracą trenerską. Przez lata, pracując na kortach w Warszawie, Łodzi
          oraz Siedlcach miałem okazje szkolić dorosłych, młodzież oraz dzieci
          współpracując przy tym ze świetnymi trenerami zawodników WTA oraz ITF.
        </p>
      </section> */}
      <section id="o-mnie">
        <MainText />
      </section>
      <section id="treningi">
        <h2 className="about-header">Treningi</h2>
        <div className="treningi">
          <div>
            <img
              className="treningi-icon"
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618312499/tennis-racket_ztb9x3.png"
            />
            <h4 className="treningi-header">Trening indywidualny</h4>
            <ul>
              <li>Program dobierany do indywidualnych potrzeb zawodnika</li>
              <li>Zajęcia 1h/1,5h</li>
            </ul>
            <div className="moreinfo">
              <Example description="tekst nr 1" />
            </div>
          </div>
          <div>
            <img
              className="treningi-icon"
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618314386/tennis_eozkp9.png"
            />
            <h4 className="treningi-header">Treningi grupowe</h4>
            <ul>
              <li>
                Treningi w grupach 4-osobowych na każdym poziomie zaawansowania
              </li>
              <li>Zajęcia 1h/1,5h</li>
            </ul>
            <div className="moreinfo">
              <Example description="tekst nr 2" />
            </div>
          </div>
        </div>
      </section>
      <Slideshow2 />
      <section id="osiagniecia">
        <h3 className="about-header">Osiągnięcia</h3>
        <img
          className="trophy"
          src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1620664520/trophy_1_lj3zkc.png"
        />
        <br />
        <p className="achievements">
          Od kilku lat lwią część mojej pracy zajmuje szkolenie młodych
          zawodników będących ścisłą czołówką w Polsce a niekiedy na świecie
          m.in. sdkfjnkfbhwhkbfw
          <br />
          <br />
          <Achievements />
        </p>
      </section>
      <section id="kontakt">
        <h2 className="about-header">Kontakt</h2>
        <div className="contact-info">
          <div className="contact-details">
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618402208/placeholder_h0fr83.png"
              />{" "}
              Ogrodowa 18, Chodów, Siedlce
            </p>
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401933/phone-call_ggshnt.png"
              />{" "}
              +48 728484794
            </p>
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401969/envelope_zqaoz7.png"
              />{" "}
              wojciech.jobczyk@gmail.com
            </p>
          </div>
          <div className="mapa">
            <h3>Jak dojechać?</h3>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.74974257583!2d22.24034095093602!3d52.21159516669255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f5b4fc01aa429%3A0x9e3518bbb124e563!2sOgrodowa%2018%2C%2008-119%20Chod%C3%B3w!5e0!3m2!1spl!2spl!4v1618405588097!5m2!1spl!2spl"
              width="350"
              height="200"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="footer">
        <p>
          Zaprojektowała{" "}
          <a href="https://www.linkedin.com/in/anna-maria-mazurek">Anna</a>
        </p>
      </div>
    </div>
  );
}

export default About;
