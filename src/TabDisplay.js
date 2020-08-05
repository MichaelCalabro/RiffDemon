import React from 'react';
import * as GuitarNotes from './notes';

class TabDisplay extends React.Component {

  constructor(props){
    super(props);

  }
  
  //Init Empty TAB
  componentDidMount(){
    window.jtab.render(document.getElementById('jtabRender'),'$ ||');
  }

  //Draw TAB
  componentDidUpdate(){
    var tabNotation = this.generateTabNotation(this.props.notes);
    window.jtab.render(document.getElementById('jtabRender'),tabNotation);
  }

  render(){
    return(
      <div id="jtabRender"></div>
    )
  }


  //Takes array of notes of form: [string:fret,string:fret,...]-rythm
  //Returns jtab notation
  generateTabNotation(notes){

    var notation = "$ ";

    var barBeats = 0;

    notes.forEach(note => {
      if(note){

        let tokens = note.split("-");

        let chord = tokens[0];
        let rythm = tokens[1];

        barBeats += 1 / GuitarNotes.notesPerBeat[rythm];
        
        //notation += " $" + string + " " + fret + " " + GuitarNotes.rythmToTabSpace[rythm];
        notation += this.noteToTabNotation(chord) + GuitarNotes.rythmToTabSpace[rythm];

        if(barBeats >= 3.9){
          notation += " |";
          barBeats = 0;
        }

      }
    });

    notation += "|";

    return  notation;
  }

  //Takes array of note of form: [string:fret,string:fret,...]
  //Returns jtab notation
  noteToTabNotation(note){
  
    var notation = " ";
    var chordNotes = note.split(",");

    chordNotes.forEach(chordNote => {
      let tokens = chordNote.split(":");
      let string = tokens[0];
      let fret = tokens[1];

      notation += "$" + string + "." + fret + "."

    });

    return notation;
  }

}
  

export default TabDisplay;