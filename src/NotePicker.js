import React from 'react';
import * as GuitarNotes from './notes';

class NotePicker extends React.Component {

    constructor(props){
      super(props);
  
      this.selectNote = this.props.selectNote;
      this.deselectNote = this.props.deselectNote;
  
      this.state = {
        synth: props.synth
      }
    }
  
    render(){
  
      const string1 = GuitarNotes.strings[0].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":1"} note={fretNote} string={1} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string2 = GuitarNotes.strings[1].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":2"} note={fretNote} string={2} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string3 = GuitarNotes.strings[2].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":3"} note={fretNote} string={3} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string4 = GuitarNotes.strings[3].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":4"} note={fretNote} string={4} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string5 = GuitarNotes.strings[4].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":5"} note={fretNote} string={5} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string6 = GuitarNotes.strings[5].map((fretNote, index) =>
        <GuitarFret key={fretNote + ":6"} note={fretNote} string={6} fret={index} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const fretNumbers = GuitarNotes.strings[0].map((fretNote, index) =>
        <th key={"fret" + index} className="fret">{index}</th>
      );
  
      return(
        <div>
          <table className="guitarNeck">
            <tbody>
              <tr className="guitarString"><th className="fret">1</th>{string1}</tr>
              <tr className="guitarString"><th className="fret">2</th>{string2}</tr>
              <tr className="guitarString"><th className="fret">3</th>{string3}</tr>
              <tr className="guitarString"><th className="fret">4</th>{string4}</tr>
              <tr className="guitarString"><th className="fret">5</th>{string5}</tr>
              <tr className="guitarString"><th className="fret">6</th>{string6}</tr>
              <tr><th className="fret"></th>{fretNumbers}</tr>
            </tbody>
          </table>
        </div>
      )
    }
  
  }
  
  class GuitarFret extends React.Component {
  
    constructor(props){
      super(props);
  
      this.state = {
        note: props.note,
        synth: props.synth
      }
  
    }
  
    render(){
      return(
        <td className="fret">
          <label className="fret">
            <input type="checkbox" onChange={this.handleCheck.bind(this)}/>
            <span>{GuitarNotes.noteCodeToSymbol(this.state.note)}</span>
          </label>
        </td>
      )
    }
  
    
    handleCheck(e){
  
      if(e.target.checked){
        this.props.selectNote(this.props.string + ":" + this.props.fret);
        this.playNote();
      }else{
        this.props.deselectNote(this.props.string + ":" + this.props.fret);
      }
     
    }
  
    playNote(){
      this.state.synth.triggerAttackRelease(this.state.note, "2n");  
    }
  
  
  }

  export default NotePicker;