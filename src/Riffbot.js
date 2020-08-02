import * as Tone from 'tone';
import React from 'react';
import NotePicker from './NotePicker';
import WeightedSelect from './WeightedSelect';
import * as GuitarNotes from './notes';
import TabDisplay from './TabDisplay';

class RiffBot extends React.Component {
    constructor(props){
      super(props);
  
      this.selectNote = this.selectNote.bind(this);
      this.deselectNote = this.deselectNote.bind(this);
      this.setNoteWeight = this.setNoteWeight.bind(this);
      this.setRythmWeight = this.setRythmWeight.bind(this);
      this.triggerNote = this.triggerNote.bind(this);

      const initRythmWeights = {};
      GuitarNotes.noteRythms.forEach(rythm => {
        initRythmWeights[rythm] = 100 / GuitarNotes.noteRythms.length;
      });
  
      var distortion = new Tone.Distortion(0.8);

      this.state = {
      
        synth: new Tone.PolySynth(Tone.Synth, {
          oscillator : {
            type : "pwm",
            modulationFrequency : 0.1,
          },
          envelope : {
            attack : 0.01,
            decay : 10,
            sustain : 0,
            release : 0,
            decayCurve : "exponential"
          }
        }).chain(distortion, Tone.Master),

        riffNotes: [],

        selectedNotes: [],
        selectedNoteWeights: {},
        selectedRythmWeights: initRythmWeights,
        chords: false

      }   

    

    }
  
    render(){

      const initNoteWeights = {};
      this.state.selectedNotes.forEach(note => {
        initNoteWeights[note] = 0;
      });
  
      return(
        <div>
          <NotePicker synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></NotePicker>

          
          <label>
            <input type="checkbox" onChange={this.toggleChords.bind(this)}/>
            <span>Allow Chords</span>
          </label>
  
          <button onClick={() => this.playSelectedNotes()}>PLAY</button>
          <button onClick={() => this.deselectAllNotes()}>DESELECT ALL</button>
          <button onClick={() => this.makeRiff()}>Make Riff</button>
          <button onClick={() => this.startRiff()}><i className="fa fa-play"></i></button>
          <button onClick={() => this.stopRiff()}><i className="fa fa-stop"></i></button>

          <TabDisplay notes={this.state.riffNotes}></TabDisplay>

          <WeightedSelect collection={GuitarNotes.noteRythms} defaultWeights={this.state.selectedRythmWeights} 
            setWeight={this.setRythmWeight} classRef="rythmSlider" symbolConverter={GuitarNotes.rythmCodeToSymbol}></WeightedSelect> 

          <WeightedSelect collection={this.state.selectedNotes} defaultWeights={initNoteWeights} 
            setWeight={this.setNoteWeight} classRef="noteSlider" symbolConverter={GuitarNotes.tabToNoteDomNode}></WeightedSelect>

        </div>
      )
    }
  
    selectNote(note){
      this.setState({
        selectedNotes : this.state.selectedNotes.concat(note)
      });
    }
  
    deselectNote(note){
      const newNotes = this.state.selectedNotes;
      const index = newNotes.indexOf(note);
      if(index > -1){
        newNotes.splice(index, 1);
      }

      const newWeights = this.state.selectedNoteWeights;
      delete newWeights[note];
  
      this.setState({
        selectedNotes: newNotes,
        selectedNoteWeights: newWeights
      });
      
    }
  
    deselectAllNotes(){
      var cbs = document.querySelectorAll('td.fret input');
  
      for(var i = 0; i < cbs.length; i++){
        if(cbs[i].type === 'checkbox'){
          cbs[i].checked = false;
        }
      }
  
      this.setState({
        selectedNotes: [],
        selectedNoteWeights: {}
      });
      
    }

    setNoteWeight(note, weight){
      // this.setState(prevState => ({
      //   selectedNoteWeights:{
      //     ...prevState.selectedNoteWeights,
      //     [note]: weight,
      //   }
      // }));

      this.state.selectedNoteWeights[note] = weight;
    }


    setRythmWeight(rythm, weight){
      // this.setState(prevState => ({
      //   selectedRythmWeights:{
      //     ...prevState.selectedRythmWeights,
      //     [rythm]: weight,
      //   }
      // }));

      this.state.selectedRythmWeights[rythm] = weight;
    }

    toggleChords(e){
      if(e.target.checked){
        this.setState({chords: true });
      }else{
        this.setState({chords: false});
      }
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
      var noteWeights = {...this.state.selectedNoteWeights};

      var chances = Object.keys(noteWeights).map(function(key){
        return noteWeights[key];
      });

      return this.weightedRandom(Object.keys(noteWeights), chances);
    }

    randomNoteOrChord(){

      if(!this.state.chords){
        return this.randomNote();
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

    randomNoteRythm(remainingBeats){

      let reweightedRythms = {...this.state.selectedRythmWeights};
      let weightToDistribute = 0;
      let nPossibleRythms = 0;

      //Elminate rythms that dont fit in remaining beats
      for(var key in reweightedRythms){
        let beats = 1 / GuitarNotes.notesPerBeat[key];

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

      return this.weightedRandom(Object.keys(reweightedRythms), chances);

    }

    weightedRandom(arr, chances){
      var sum = chances.reduce((acc, el) => acc + el, 0);
      var acc = 0;
      chances = chances.map(el => (acc = el + acc));
      var rand = Math.random() * sum;

      return arr[chances.filter(el => el <= rand).length];

    }

    makeRiff(){
      
      //Clear transport for new riff
      Tone.Transport.cancel();
      
      const bars = 4;
      const notes = [];
      
      for(let bar = 0; bar < bars; bar++){

        let beatsRemaining = 4; //4 Beats per bar. TODO: add configurable time signatures
        let currentBeat = 0;

        while(beatsRemaining > 0){
          let noteRythm = this.randomNoteRythm(beatsRemaining);
          let beats = 1 / GuitarNotes.notesPerBeat[noteRythm];

          //Whole, half, quarter notes
          if(beats >= 1){
            let randomNoteTab = this.randomNoteOrChord();
            let randomNote = GuitarNotes.tabToNoteCode(randomNoteTab);

            Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteRythm), bar + ':' + currentBeat  + ':0');
            notes.push(randomNoteTab + ":" + noteRythm);
          }
          else{
            let numNotes = GuitarNotes.notesPerBeat[noteRythm];

            //Fill 1 beat with eigth, eighth triplet, sixteenth, or sixteenth triplet notes
            for(let notePos = 0; notePos < 3.9; notePos += (4 / numNotes)){
              let randomNoteTab = this.randomNoteOrChord();
              let randomNote = GuitarNotes.tabToNoteCode(randomNoteTab);

              Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteRythm), bar + ':' + currentBeat  + ':' + notePos);
              notes.push(randomNoteTab + ":" + noteRythm);
            }

            beats = 1;
          }

          beatsRemaining -= beats;
          currentBeat = 4 - beatsRemaining;
        }
         
      }

      this.setState({
        riffNotes: notes
      });

      Tone.Transport.loopEnd = bars + 'm';
      Tone.Transport.loop = true;     
  }
   
}

export default RiffBot;