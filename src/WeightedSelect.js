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

    const sliders = this.props.collection.map((type, index) =>
      <WeightedSlider key={type + ":" + index} note={type} id={type + ":" + index} defaultWeight={this.props.defaultWeights[type]} classRef={this.props.classRef} 
      ref={this.selectionRefs[index]} updateWeights={this.updateWeights} symbolConverter={this.props.symbolConverter}></WeightedSlider>
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
      this.props.setWeight(selectRef.current.state.note, parseFloat(selectRef.current.state.sliderRef.current.value));
    });
  }
  
}
  

export default WeightedSelect;