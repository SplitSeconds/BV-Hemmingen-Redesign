import React, { Component } from 'react';

class RoterFaden extends Component {
  render() {                
    return (
      <div className="roterfaden">
        <h2>Der roter Faden</h2>
        <div className="roterFaden-imgs">
          <img src="http://www.buergerverein-hemmingen.de/Titelseite%20RF.jpg" alt="Roter Faden Titelseite" className="rf-titel rf-img"></img>
          <img src="http://www.buergerverein-hemmingen.de/fadenkarte.jpg" alt="Karte Hemmingen" className="rf-karte rf-img"></img>
        </div>
        <div className="faden-txt">
          <p>Der rote Faden ist eine Beschreibung von Wander- und Radfahrstrecken durch alle Hemminger Ortteile mit 
            Übersichtskarten und über 60 Abbildungen überwiegend historischer Bauten und landschaftlicher Kostbarkeiten.
            Herausgeber ist der Bürgerverein Hemmingen in Zusammenarbeit mit der Region Hannover.
            Der Verkaufspreis beträgt 2€. Zu beziehen ist der Rote Faden u.a. beim Bürgerverein Hemmingen, Klewertweg 64, 30966 Hemmingen und bei der Stadtverwaltung Hemmingen, Rathausplatz.
          </p>
        </div>
      </div>
    );
  }
}

export default RoterFaden;