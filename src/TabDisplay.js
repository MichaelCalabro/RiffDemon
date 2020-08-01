import React from 'react';

class TabDisplay extends React.Component {

  constructor(props){
    super(props);

    
  }
  
  //Init Empty TAB
  componentDidMount(){
    window.jtab.render(document.getElementById('jTabRender'),'$ ||');
  }

  //Draw TAB
  componentDidUpdate(){
    var tabNotation = this.generateTabNotation(this.props.notes);
    window.jtab.render(document.getElementById('jTabRender'),tabNotation);
  }

  render(){
    return(
      <div id="jTabRender"></div>
    )
  }


  generateTabNotation(notes){

    var notation = "$ ";

    notes.forEach(note => {
      if(note){
        let split = note.split(":");
        let string = split[0];
        let fret = split[1];

        notation += "$" + string + " " + fret + " ";
      }
    });

    notation += "||";

    return  notation;
  }

}
  

export default TabDisplay;