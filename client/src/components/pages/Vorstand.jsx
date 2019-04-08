import React, { Component } from 'react';

class Vorstand extends Component {
  render() {                
    return (
      <div>
        <h2>Vorstand</h2>
        <div className="vorstand">
          <div className="vorstand-col1">
            <h5 className="col1-h5">Vorsitzende: </h5>
            <p>Brigitta Schoenke | Tel. 05101 587481</p>
            <h5 className="col1-h5">Stellvertretende Vorsitzende:</h5>
            <p>Hannelore Hapke | Tel. 0511 422241</p>
            <h5 className="col1-h5">Kassenwart:</h5>
            <p>Wiard Lüpkes | Tel. 0511 411530</p>
          </div>
          <div className="vorstand-col2">
            <h5>Beisitzer und Beisitzerinnen:</h5>
            <p>Gabriele Lehmberg | Tel. 0511 231526</p>
            <p>Gisela Hische | Tel. 0511 231622</p>
            <p>Ingeborg Staschen | Tel. 0511 413234</p>
            <p>Helene Meier | Tel. 0511 578334</p>
          </div>
        </div>

<div className="kontakt">
  <h3>So können Sie uns erreichen:</h3>
    <p>Bürgerverein Hemmingen e.V.<br></br>
      Postfach 1141<br></br>
      30953 Hemmingen<br></br>
      <br></br>
      info@buergerverein-hemmingen.de
    </p> 

  <h5>Unsere Bankverbindung</h5>
    <p>
      Konto: Sparkasse Hannover<br></br>  
      BIC: SPKHDE2HXXX<br></br>
      Vereinskonto: IBAN: DE50 2505 0180 0015 0051 01<br></br>
      Reisekonto: IBAN: DE55 2505 0180 0910 2756 29
    </p>
</div>
</div>

    );
  }
}

export default Vorstand;