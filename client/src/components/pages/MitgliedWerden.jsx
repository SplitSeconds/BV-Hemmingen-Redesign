import React, { Component } from 'react';

class MitgliedWerden extends Component {
  render() {                
    return (
      <div className="mitglied">
      <h2>Mitglied werden</h2>
        <p>
          Wir freuen uns sehr darüber, wenn Sie Interesse an der Arbeit des Bürgervereins haben und Mitglied werden wollen.
          Der Jahresbeitrag für die Mitgliedschaft beträgt 15 Euro. Spenden sind steuerlich absetzbar, da der Verein als gemeinnützig anerkannt ist.
        </p>
        <p>
          Hier können Sie unseren Mitgliedsantrag herunterladen:
          <a href="http://www.buergerverein-hemmingen.de/Satzung-2014.pdf" target="_blank" rel="noopener noreferrer">Download</a>
        </p>
        <p>
          Bitte senden Sie uns den ausgefüllten Antrag per E-Mail oder per Post zu. Unsere Kontaktdaten finden Sie <a href="http://www.buergerverein-hemmingen.de/vorstand/" target="_blank" rel="noopener noreferrer">hier.</a>
        </p>
    </div>

    );
  }
}

export default MitgliedWerden;