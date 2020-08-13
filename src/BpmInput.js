import React from 'react';
import * as Tone from 'tone';

class BpmInput extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
         
    return(
    <div className="optionContainer">
        <span>BPM</span>
        <button className="subButton" onClick={() => this.incrementBPM(-5)}>-</button>
        <span id="bpmValueDisplay">120</span>    
        <button className="subButton" onClick={() => this.incrementBPM(5)}>+</button> 
    </div>
    )
  }

  incrementBPM(n){
    const bpm = parseInt(Tone.Transport.bpm.value + n);

    if(bpm >= 0 && bpm <= 300){
        document.getElementById("bpmValueDisplay").innerText = bpm;
        Tone.Transport.bpm.value = bpm;
    }
  }

  
}
  

export default BpmInput;