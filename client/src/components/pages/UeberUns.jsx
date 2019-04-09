import React, { Component } from 'react';

class UeberUns extends Component {
  
  render() {                
    return (
      <div className="about">
        <h2>Warum ein Bürgerverein?</h2>
          <div>
            <p className="faden-txt">
              Unsere Zeit ist geprägt durch Politikverdrossenheit, Kleinfamilie und Single-Dasein. 
              Deshalb haben Hemminger Bürgerinnen und Bürger 1985 einen Verein gegründet, um Gemeinsinn und Bürgergeist zu stärken. 
              Unser Ziel ist es, das Bewusstsein dafür zu wecken, dass das Wohnen in einer Stadt auch eine Art Lebensgemeinschaft darstellt, die es mitzugestalten gilt.
              Das geschieht durch unterschiedliche Aktivitäten, die sich aus den Interessen und dem Engagement der Mitglieder ergeben:
            </p>
            <ul className="front-list">
              <li>Forum zum Austausch von Informationen und Gedanken zu örtlichen Problemen</li>
              <li>Stellungnahme und Podiumsdiskussionen zu kommunalpolitischen Themen</li>
              <li>Arbeitskreise mit unterschiedlichen Aufgabenstellungen</li>
              <li>Beteiligungen und Mitgestaltung von Aktionen und Festen in der Stadt</li>
              <li>Gemeinsame Exkursionen und Besichtigungen mit Kulturprogramm</li>
            </ul>
            <p className="faden-txt">Der Verein arbeitet überparteilich und demokratisch. Der Jahresbeitrag für die Mitgliedschaft beträgt 15 Euro. Spenden sind steuerlich absetzbar, da der Verein als gemeinnützig anerkannt ist. Er lebt von den Ideen und dem Engagement der Mitglieder, daher sind Anregungen immer willkommen.</p>
          </div>
       </div>
    );
  }
}

export default UeberUns;
