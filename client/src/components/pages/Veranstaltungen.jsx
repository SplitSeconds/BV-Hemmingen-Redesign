import React, { Component } from 'react';

class Veranstaltungen extends Component {
  render() {                
    return (
      <div className="veranstaltungen">
        <h2>Aktuelle Veranstaltungen des Bürgervereins</h2>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Veranstaltung</th>
              <th>Details</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Einbeck</b><br></br>
                Tagesfahrt mit dem Bus mit Stadtführung und Besuch der Senfmühle<br></br>
              </td> 
              <td>
                <b>Mittwoch, 24. April 2019</b><br></br>
                Abfahrt:    08:30 Uhr Rathausplatz, Hemmingen<br></br>
                            <div className="indent">08:45 Uhr Arnum, bei Drogerie Rossmann</div>
                Rückkehr:  gegen 18:00 Uhr<br></br>
                Kosten für Fahrt u. Führungen: Mitglieder 24€; Gäste 28€<br></br>
                Anmeldung: Frau H. Hapke, Tel.: 0511/42224<br></br>
              </td>
            </tr>
            <tr>
              <td>
                <b>„Kunst unter freiem Himmel“</b><br></br>
                Stadtspaziergang zum Thema Kunst im öffentlichem Raum
              </td>
              <td>Details...</td> 
            </tr>
            <tr>
              <td>
                <b>KZ-Außenstelle Mittelbau-Dora europäischer Lern- und Gedächtnisort</b><br></br>
                Tagesfahrt mit dem Bus in die Nähe von Nordhausen zum Besuch und Führung (ca. 3 Std.)<br></br> 
                Zwangsarbeitslager zur Raketenproduktion in einer unterirdischen Rüstungsfabrik 1943 - 1945<br></br>
                Danach Essen u. Freizeit in Bad Sachsa
              </td>
              <td>Details...</td> 
            </tr>
            <tr>
              <td>
                <b>Görlitz und Bautzen</b><br></br>
                Dreitagefahrt sowie Besuch von Bad Muskau mit Fürst-Pückler-Landschaftspark
              </td>
              <td>Details...</td> 
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Veranstaltungen;