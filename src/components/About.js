import React from 'react';
import Example from './Example';
import './About.css';

function About() {
    return <div>
    <section id="o-mnie">
    <h2 className="about-header">O mnie</h2>
    <p className="about">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend vehicula purus, sed vestibulum mi dictum in. Maecenas suscipit sodales pulvinar. Morbi consequat, lorem posuere interdum tempus, nunc lacus aliquam ante, in aliquam sem dui at sem. Vivamus a vehicula ante, ac aliquet nibh. 
    </p>
    </section>
    <section id="treningi">
    <h2 className="about-header">Treningi</h2>
    <div className="treningi">
    <div>
    <img className="treningi-icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618312499/tennis-racket_ztb9x3.png"/>
    <h4 className="treningi-header">Trening indywidualny</h4>
    <ul>
    <li>Program dobierany do indywidualnych potrzeb zawodnika</li>
    <li>Zajęcia 1h/1,5h</li>
    </ul>
    <div className="moreinfo">
    <Example/>
    </div>
    </div>
    <div>
    <img className="treningi-icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618314386/tennis_eozkp9.png"/>
    <h4 className="treningi-header">Treningi grupowe</h4>
    <ul>
    <li>Program dobierany do indywidualnych potrzeb zawodnika</li>
    <li>Zajęcia 1h/1,5h</li>
    </ul>
    <div className="moreinfo">
    <Example/>
    </div>
    </div>
    </div>
    </section>
    <section id="kontakt">
    <h2 className="about-header">Kontakt</h2>
    <div className="contact-info">
    <p><img className="icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618402208/placeholder_h0fr83.png"/> Ogrodowa 18, Chodów, Siedlce</p>
    <p><img className="icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401933/phone-call_ggshnt.png"/> +48 728484794</p>
    <p><img className="icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401969/envelope_zqaoz7.png"/> tenis-siedlce@gmail.com</p>
    <h3>Jak dojechać?</h3>
    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.74974257583!2d22.24034095093602!3d52.21159516669255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f5b4fc01aa429%3A0x9e3518bbb124e563!2sOgrodowa%2018%2C%2008-119%20Chod%C3%B3w!5e0!3m2!1spl!2spl!4v1618405588097!5m2!1spl!2spl" width="350" height="200" allowfullscreen="" loading="lazy"></iframe>
    </div> 
    </section>
    <div className="footer">
        <p>Zaprojektowała <a href="https://www.linkedin.com/in/anna-maria-mazurek">Anna</a></p>
      </div>
    </div>
  }

export default About;