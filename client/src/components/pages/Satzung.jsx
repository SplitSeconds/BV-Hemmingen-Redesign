import React, { Component } from 'react';

class Satzung extends Component {
  render() {                
    return (
      <div className="satzung">
        <h2>Satzung</h2>
        
        <p>Hier können Sie unsere aktuelle Satzung herunterladen:</p>
      
        <a href="http://www.buergerverein-hemmingen.de/Satzung-2014.pdf" target="_blank" rel="noopener noreferrer">Download</a>
      </div>
    );
  }
}

export default Satzung;