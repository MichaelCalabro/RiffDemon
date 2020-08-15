import React from 'react';
import WeightedSlider from './WeightedSlider'

class WeightedSelect extends React.Component {

  constructor(props){
    super(props);

    this.updateWeights = this.updateWeights.bind(this);

    this.selectionRefs = [];
    for(var i = 0; i < this.props.collection.length; i++){ 
      this.selectionRefs.push(React.createRef());
    }

    this.state = {
      
    }
  }

  render(){

    //Maintain refs
    if(this.selectionRefs.length < this.props.collection.length){
      var diff = this.props.collection.length - this.selectionRefs.length;
      for(var i = 0; i < diff; i++){
        this.selectionRefs.push(React.createRef());
      }
    }else if(this.selectionRefs.length > this.props.collection.length){
      var diff = this.selectionRefs.length - this.props.collection.length;
      for(var i = 0; i < diff; i++){
        this.selectionRefs.pop();
      }
    }

    const sliders = this.props.collection.map((element, index) =>
      <WeightedSlider key={element + ":" + index} identifier={element} id={element + ":" + index} defaultWeight={this.props.defaultWeights[element]} classRef={this.props.classRef} 
      ref={this.selectionRefs[index]} updateWeights={this.updateWeights} symbolConverter={this.props.symbolConverter} deselectNote={this.props.deselectNote}></WeightedSlider>
    );       
      
    return(
      <div>
          <ul>
            {sliders}
          </ul>
      </div>
    )
  }

  updateWeights(){

    this.selectionRefs.forEach(selectRef => {
      this.props.setWeight(selectRef.current.state.identifier, parseFloat(selectRef.current.state.sliderRef.current.value));
    });
  }
  
}
  

export default WeightedSelect;