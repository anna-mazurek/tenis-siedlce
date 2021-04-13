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
    <img className="treningi-icon" src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618312499/tennis-racket_ztb9x3.png"/>
    <h4 className="treningi-header">Trening indywidualny</h4>
    <ul>
    <li>Program dobierany do indywidualnych potrzeb zawodnika</li>
    <li>Zajęcia 1h/1,5h</li>
    </ul>
    <div className="moreinfo">
    <Example/>
    </div>
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
    </section>
    </div>
  }

export default About;