import React from 'react';
import adressImg from '../images/adresse.svg';

export default function Terms() {
  return (
    <div className="impressum navChange" id="top">
      <h1>Impressum</h1>
      <div className="impressumMain">
        <h2>Betreiber der Webseite und inhaltlich verantwortlich: </h2>
        <img src={adressImg} alt="adress" />
      </div>

      <div className="impressumMain regText">
        <h2>Haftungsausschluss:</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle kann keine Haftung für die Inhalte externer Links übernommen werden.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p>
          Die Betreibung der Webseite sowie weitere damit ggf. verbundener Web-Applikationen/ Webseiten erfolgt
          ausschließlich privat ohne gewerblichen Nutzen oder Gewinnerziehlungsabsicht. Angebotene Leistungen oder
          Projekte in der Webentwicklung entstehen als Hobby in meiner verfügbaren Freizeit, sind unentgeltlich und
          ebenfalls ohne gewerblichen Nutzen oder Gewinnerziehlungsabsicht. Hieraus entstehen keinerlei
          Haftungsansprüche.
        </p>
        <p>
          Für die Erstellung von Web-Applikationen oder Webseiten wird 'Open Source'-Software (z.B. jQuery oder Node.js)
          verwendet, deren Verwendung im Rahmen einer 'Open-Source'-Lizenz frei ist und keiner gesonderten Erwähnung
          bedarf (z.B. im Rahmen einer&nbsp;
          <a href="https://de.wikipedia.org/wiki/MIT-Lizenz" target="_blank" rel="noopener noreferrer">
            'MIT-Lizenz'
          </a>
          ). Des Weiteren wird Bildmaterial verwendet welches ebenfalls unter einer freien Lizenz beliebig verwendet
          werden darf, auch ohne gesonderte Nennung der Urheber (z.B.&nbsp;
          <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
            Unsplash.com
          </a>
          ). Auch hieraus entsteht keinerlei Haftungsanspruch.
        </p>
      </div>
    </div>
  );
}
