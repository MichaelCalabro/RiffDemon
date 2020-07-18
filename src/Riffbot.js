import * as Tone from 'tone';
import React from 'react';
import NotePicker from './NotePicker';
import NoteTypePicker from './NoteTypePicker';
import * as BarComposition from './BarComposition';
import * as GuitarNotes from './notes';

class RiffBot extends React.Component {
    constructor(props){
      super(props);
  
      this.selectNotePitch = this.selectNotePitch.bind(this);
      this.deselectNotePitch = this.deselectNotePitch.bind(this);
      this.setRythmWeight = this.setRythmWeight.bind(this);
      this.triggerNote = this.triggerNote.bind(this);

      const initRythmWeights = {};
      GuitarNotes.noteTypes.forEach(rythm => {
        initRythmWeights[rythm] = 100 / GuitarNotes.noteTypes.length;
      });
  
      this.state = {
      
        synth: new Tone.PolySynth(Tone.Synth, {
          oscillator : {
            type : "pwm",
            modulationFrequency : 0.8
          },
          envelope : {
            attack : 0.05,
            decay : 0.8,
            sustain : 0.25,
            release : 0.1,
          }
        }).toDestination(),

        selectedNotes: [],
        selectedNoteTypes: [],
        selectedRythmWeights: initRythmWeights,
        chords: false

      }   

    }
  
    render(){
  
      return(
        <div>
          <NotePicker synth={this.state.synth} selectNote={this.selectNotePitch} deselectNote={this.deselectNotePitch}></NotePicker>
          <NoteTypePicker defaultWeights={this.state.selectedRythmWeights} setRythmWeight={this.setRythmWeight} ></NoteTypePicker> 

          <label>
            <input type="checkbox" onChange={this.toggleChords.bind(this)}/>
            <span>Allow Chords</span>
          </label>
  
          <button onClick={() => this.playSelectedNotes()}>PLAY</button>
          <button onClick={() => this.deselectAllNotePitches()}>DESELECT ALL</button>
          <button onClick={() => this.makeRiff()}>Make Riff</button>
          <button onClick={() => this.startRiff()}>Start Riff</button>
          <button onClick={() => this.stopRiff()}>Stop Riff</button>
        </div>
      )
    }
  
    selectNotePitch(note){
      this.setState({
        selectedNotes : this.state.selectedNotes.concat(note)
      });
    }
  
    deselectNotePitch(note){
      const newNotes = this.state.selectedNotes;
      const index = newNotes.indexOf(note);
      if(index > -1){
        newNotes.splice(index, 1);
      }
  
      this.setState({
        selectedNotes: newNotes
      });
    }
  
    deselectAllNotePitches(){
      var cbs = document.querySelectorAll('td.fret input');
  
      for(var i = 0; i < cbs.length; i++){
        if(cbs[i].type === 'checkbox'){
          cbs[i].checked = false;
        }
      }
  
      this.setState({
        selectedNotes: []
      });
      
    }

    setRythmWeight(rythm, weight){
      this.setState(prevState => ({
        selectedRythmWeights:{
          ...prevState.selectedRythmWeights,
          [rythm]: weight,
        }
      }));
    }

    toggleChords(e){
      if(e.target.checked){
        this.setState({chords: true });
      }else{
        this.setState({chords: false});
      }
      console.log(this.state.selectedRythmWeights);
    }
  
    playSelectedNotes(){
      this.state.synth.triggerAttackRelease(this.state.selectedNotes, "2n");
    }

    startRiff(){
      Tone.Transport.start();
    }

    stopRiff(){
      Tone.Transport.stop();
    }

    triggerNote(time, note, duration){
        this.state.synth.triggerAttackRelease(note, duration, time);
    }

    randomNote(){
      return this.state.selectedNotes[Math.floor(Math.random() * this.state.selectedNotes.length)];
    }

    randomNoteOrChord(){

      if(!this.state.chords){
        return this.state.selectedNotes[Math.floor(Math.random() * this.state.selectedNotes.length)];
      }
      else{
        var notesToPlay = [];
        var numNotes = 1 + Math.floor(Math.random() * this.state.selectedNotes.length);
        for(var i = 0; i < numNotes; i++){
          notesToPlay.push(this.randomNote());
        }

        return notesToPlay;
      }
    }

    randomNoteType(remainingBeats){

      let reweightedRythms = {...this.state.selectedRythmWeights};
      let weightToDistribute = 0;
      let nPossibleRythms = 0;

      //Elminate rythms that dont fit in remaining beats
      for(var key in reweightedRythms){
        let beats = 1 / BarComposition.notesPerBeat[key];

        if(beats > remainingBeats){
          weightToDistribute += reweightedRythms[key];
          reweightedRythms[key] = 0;
        }else{
          nPossibleRythms++;
        }
      }

      //Redistribute weight from rythms that dont fit in remaining beats
      for(var key in reweightedRythms){
        if(reweightedRythms[key] != 0){
          reweightedRythms[key] += weightToDistribute / nPossibleRythms;
        }
      }

      //Random weighted selection
      var chances = Object.keys(reweightedRythms).map(function(key){
        return reweightedRythms[key];
      });

      var sum = chances.reduce((acc, el) => acc + el, 0);
      var acc = 0;
      chances = chances.map(el => (acc = el + acc));
      var rand = Math.random() * sum;

      return Object.keys(reweightedRythms)[chances.filter(el => el <= rand).length];

    }

    makeRiff(){
      
      //Clear transport for new riff
      Tone.Transport.cancel();
      
      const bars = 4;
      
      for(let bar = 0; bar < bars; bar++){

        let beatsRemaining = 4; //4 Beats per bar. TODO: add configurable time signatures
        let currentBeat = 0;

        while(beatsRemaining > 0){
          let noteDuration = this.randomNoteType(beatsRemaining);
          let beats = 1 / BarComposition.notesPerBeat[noteDuration];

          //Whole, half, quarter notes
          if(beats >= 1){
            let randomNote = this.randomNoteOrChord();
            Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteDuration), bar + ':' + currentBeat  + ':0');
          }
          else{
            let numNotes = BarComposition.notesPerBeat[noteDuration];

            //Fill 1 beat with eigth, eighth triplet, sixteenth, or sixteenth triplet notes
            for(let notePos = 0; notePos <= numNotes; notePos += (4 / numNotes)){
              let randomNote = this.randomNoteOrChord();
              Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteDuration), bar + ':' + currentBeat  + ':' + notePos);
            }
            beats = 1;

          }   

          beatsRemaining -= beats;
          currentBeat = 4 - beatsRemaining;

        }
  
      }

      Tone.Transport.loopEnd = bars + 'm';
      Tone.Transport.loop = true;

  }
  
  
  }

  export default RiffBot;