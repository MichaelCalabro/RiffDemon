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
  
      const string1 = GuitarNotes.string1.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string2 = GuitarNotes.string2.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string3 = GuitarNotes.string3.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string4 = GuitarNotes.string4.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string5 = GuitarNotes.string5.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const string6 = GuitarNotes.string6.map((fretNote) =>
        <GuitarFret key={fretNote} note={fretNote} synth={this.state.synth} selectNote={this.selectNote} deselectNote={this.deselectNote}></GuitarFret>
      );
      const fretNumbers = GuitarNotes.string6.map((fretNote, index) =>
        <th key={index} className="fret">{index}</th>
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
        this.props.selectNote(this.state.note);
        this.playNote();
      }else{
        this.props.deselectNote(this.state.note);
      }
     
    }
  
    playNote(){
      this.state.synth.triggerAttackRelease(this.state.note, "4n");  
    }
  
  
  }

  export default NotePicker;