import React, { Component } from 'react';

class Home extends Component {
  
  render() {                
    return (
      <div className="home-wrapper">
        <div className="image">
        </div>
        <div className="text">
          <h2>Bürgerverein Hemmingen</h2>
          <h3>Herzlich Willkommen!</h3>
          <h4>Warum ein Bürgerverein?</h4>
          <p>Unsere Zeit ist geprägt durch Politikverdrossenheit, Kleinfamilie und Single-Dasein. 
             Deshalb haben Hemminger Bürgerinnen und Bürger 1985 einen Verein gegründet, um Gemeinsinn und Bürgergeist zu stärken. 
             Ziel ist, das Bewußtsein dafür zu wecken, daß das Wohnen in einer Stadt auch eine Art Lebensgemeinschaft darstellt, 
             die es mitzugestalten gilt.
             Das geschieht durch unterschiedliche Aktivitäten, die sich aus den Interessen und dem Engagement der Mitglieder ergeben:</p>
          <ul>
            <li>Forum zum Austausch von Informationen und Gedanken zu örtlichen Problemen,</li>
            <li>Stellungnahme und Podiumsdiskussionen zu kommunalpolitischen Themen,</li>
            <li>Arbeitskreise mit unterschiedlichen Aufgabenstellungen</li>
            <li>Beteiligungen und Mitgestaltung von Aktionen und Festen in der Stadt</li>
            <li>Gemeinsame Exkursionen und Besichtigungen mit Kulturprogramm</li>
          </ul>
          <p>Der Verein arbeitet überparteilich  und  demokratisch. Der Jahresbeitrag beträgt  15 Euro. Spenden  sind     steuerlich  absetzbar, da der Verein als gemeinnützig  anerkannt   ist. Er lebt von  den Ideen und dem Engagement der Mitglieder, daher  sind Anregungen    immer  willkommen.</p>
          <hr></hr>
          <h3>So können Sie uns erreichen:</h3>
          <p>per Post:     Bürgerverein Hemmingen e. V., Postfach 1141, 30953 Hemmingen
per Mail:     info@buergerverein-hemmingen.de 
Konto:  Sparkasse Hannover

BIC: SPKHDE2HXXX
Vereinskonto: IBAN: DE50 2505 0180 0015 0051 01
Reisekonto    : IBAN: DE55 2505 0180 0910 2756 29</p>
        </div>
      </div>
    );
  }
}

export default Home;
