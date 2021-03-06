import * as Tone from 'tone';
import React from 'react';
import NotePicker from './NotePicker';
import WeightedSelect from './WeightedSelect';
import * as GuitarNotes from './notes';
import TabDisplay from './TabDisplay';
import BpmInput from './BpmInput';

class RiffBot extends React.Component {
    constructor(props){
      super(props);
  
      this.selectNote = this.selectNote.bind(this);
      this.deselectNote = this.deselectNote.bind(this);
      this.selectChordNote = this.selectChordNote.bind(this);
      this.deselectChordNote = this.deselectChordNote.bind(this);
      this.setNoteWeight = this.setNoteWeight.bind(this);
      this.setRythmWeight = this.setRythmWeight.bind(this);
      this.triggerNote = this.triggerNote.bind(this);

      const initRythmWeights = {};
      GuitarNotes.noteRythms.forEach(rythm => {
        initRythmWeights[rythm] = 100 / GuitarNotes.noteRythms.length;
      });
  
      var distortion = new Tone.Distortion(10);
      var reverb = new Tone.Reverb(2);

      this.state = {
      
        synth: new Tone.PolySynth(Tone.Synth, {
          envelope : {
            attack : 0.01,
            decay : 20,
            sustain : 0.01,
            release : 0.1,
            decayCurve : "exponential"
          }
        }).chain(distortion, Tone.Master).chain(reverb, Tone.Master),

        riffNotes: [],

        selectedNotes: [],
        selectedNoteWeights: {},
        selectedRythmWeights: initRythmWeights,

        chordMode: false,
        chordSelectedNotes: []

      }   
    }
  
    render(){

      const initNoteWeights = {};
      this.state.selectedNotes.forEach(note => {
        initNoteWeights[note] = 0;
      });

      var chordPicker = this.state.chordMode ? 
        <div>
          <NotePicker synth={this.state.synth} selectNote={this.selectChordNote} deselectNote={this.deselectChordNote}></NotePicker>
          <button onClick={() => this.addChord()}>Add Chord</button>
        </div>
      :
        null;

      return(
        <div>

          <NotePicker synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></NotePicker>
          {chordPicker}
    
          <label className="mainCheckBox">
            <input type="checkbox" onChange={this.toggleChords.bind(this)}/>
            <span>Chords</span>
          </label>

          <button onClick={() => this.deselectAllNotes()}>Clear All</button>
          <button onClick={() => this.makeRiff()}>Generate Riff</button>

          <select name="bars" id="barSelect" defaultValue="4">
            <optgroup label="Bars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </optgroup>
          </select>
  
          <button onClick={() => this.startRiff()}><i className="fa fa-play"></i></button>
          <button onClick={() => this.stopRiff()}><i className="fa fa-stop"></i></button>
          <BpmInput></BpmInput>

          <TabDisplay notes={this.state.riffNotes}></TabDisplay>

          <WeightedSelect collection={GuitarNotes.noteRythms} defaultWeights={this.state.selectedRythmWeights} 
            setWeight={this.setRythmWeight} classRef="rythmSlider" symbolConverter={GuitarNotes.rythmCodeToSymbol}></WeightedSelect> 

          <WeightedSelect collection={this.state.selectedNotes} defaultWeights={initNoteWeights} 
            setWeight={this.setNoteWeight} classRef="noteSlider" symbolConverter={GuitarNotes.tabToNoteDomNode} deselectNote={this.deselectNote}></WeightedSelect>

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

      //Uncheck note
      const noteCb = document.getElementById("pick_" + note);
      if(noteCb){
        noteCb.checked = false;
      }
      
    }

    selectChordNote(note){
      this.setState({
        chordSelectedNotes : this.state.chordSelectedNotes.concat(note)
      });   
    }

    deselectChordNote(note){
      const newNotes = this.state.chordSelectedNotes;
      const index = newNotes.indexOf(note);
      if(index > -1){
        newNotes.splice(index, 1);
      }

      this.setState({
        chordSelectedNotes: newNotes,
      });

    }

    addChord(){

      if(this.state.chordSelectedNotes.length === 0){
        return;
      }

      var chord = "";

      this.state.chordSelectedNotes.forEach(note => {
        chord += note + ",";
      });

      this.setState({
        selectedNotes : this.state.selectedNotes.concat(chord)
      });

      this.playSelectedChordNotes();
      
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
        selectedNoteWeights: {},
        chordSelectedNotes: []
      });
      
    }

    setNoteWeight(note, weight){
      this.state.selectedNoteWeights[note] = weight;
    }


    setRythmWeight(rythm, weight){
      this.state.selectedRythmWeights[rythm] = weight;
    }

    toggleChords(e){
      if(e.target.checked){
        this.setState({chordMode: true });
      }else{
        this.setState({
          chordMode: false,
          chordSelectedNotes: []
        });
      }
    }
  
    playSelectedChordNotes(){
      this.state.synth.triggerAttackRelease(GuitarNotes.tabToNoteCode(this.state.chordSelectedNotes), "2n");
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

      var note = this.weightedRandom(Object.keys(noteWeights), chances);

      //Chord
      if(note && note.includes(',')){
        var chord = [];
        var chordNotes = note.split(',');
        chordNotes.forEach(chordNote => {
          if(chordNote != ""){
            chord.push(chordNote);
          }
        });
        return chord;
      }
        
      return note;  
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

    //Wrapper for createRiff
    makeRiff(){

        //Clear transport for new riff
        Tone.Transport.cancel();

        var notes = [];

        //Create riff if > 0 notes are selected and weighted
        if(Object.keys(this.state.selectedNoteWeights).length != 0){
          notes = this.createRiff();
          Tone.Transport.position = 0;
        }
      
        this.setState({
          riffNotes: notes
        });
    
    }

    createRiff(){

      const bars = parseInt(document.getElementById("barSelect").value);

      //Store notes to be used for tablature display
      var notes = [];

      for(let bar = 0; bar < bars; bar++){

        let beatsRemaining = 4; //4 Beats per bar. TODO: add configurable time signatures
        let currentBeat = 0;

        while(beatsRemaining > 0){
          let noteRythm = this.randomNoteRythm(beatsRemaining);
          let beats = 1 / GuitarNotes.notesPerBeat[noteRythm];

          //Whole, half, quarter notes
          if(beats >= 1){
            let randomNoteTab = this.randomNote();
            let randomNote = GuitarNotes.tabToNoteCode(randomNoteTab);

            Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteRythm), bar + ':' + currentBeat  + ':0');
            notes.push(randomNoteTab + "-" + noteRythm);
          }
          else{
            let numNotes = GuitarNotes.notesPerBeat[noteRythm];

            //Fill 1 beat with eigth, eighth triplet, sixteenth, or sixteenth triplet notes
            for(let notePos = 0; notePos < 3.9; notePos += (4 / numNotes)){
              let randomNoteTab = this.randomNote();
              let randomNote = GuitarNotes.tabToNoteCode(randomNoteTab);

              Tone.Transport.schedule(time => this.triggerNote(time, randomNote, noteRythm), bar + ':' + currentBeat  + ':' + notePos);
              notes.push(randomNoteTab + "-" + noteRythm);
            }

            beats = 1;
          }

          beatsRemaining -= beats;
          currentBeat = 4 - beatsRemaining;
        }   
      }

      Tone.Transport.loopEnd = bars + 'm';
      Tone.Transport.loop = true;    

      return notes;
    }
   
}

export default RiffBot;