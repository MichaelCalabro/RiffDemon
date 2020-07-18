import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

import RiffBot  from './Riffbot';

function App() {
  return (
    <div className="App">

      <RiffBot></RiffBot>

      {/* <SoundTester></SoundTester> */}

    </div>
  );
}


class SoundTester extends React.Component {

  constructor(props){
    super(props);

    this.state = {
       synth: new Tone.PolySynth(Tone.Synth, {
        oscillator : {
          type : "pwm",
          modulationFrequency : 0.2
        },
        envelope : {
          attack : 0.01,
          decay : 0.1,
          sustain : 0.05,
          release : 0.1,
        }
      }).toDestination()
      ,
      distortion: new Tone.Distortion(0.8).toMaster()
    }
  }


  render() {
    return(
      <div>
        <button onClick={() => this.playSound()}>test</button>
        <button onClick={() => this.stopSound()}>stoptest</button>
      </div>
    );
  }


  playSound(){

    //this.state.synth.connect(this.state.distortion);

    //this.state.synth.triggerAttackRelease("B2", "4n");

    var pluck = new Tone.PluckSynth().toMaster();

    Tone.Transport.scheduleRepeat(function(time){
      pluck.triggerAttackRelease("E2", "16n", time);
      


    }, "16n");

    Tone.Transport.start();   
  }

  stopSound(){
    Tone.Transport.stop();
  }

}




export default App;
