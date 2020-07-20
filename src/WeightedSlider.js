import React from 'react';

class WeightedSlider extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      note: props.note,
      sliderRef: React.createRef()
    }

  }

  render(){
    return(
      <li>
        <label>
          <span>{this.state.note}</span>
          <input type="checkbox" onChange={this.handleCheck.bind(this)}/>
          <input type="range" min="0" max="100" className={this.props.classRef} defaultValue={this.props.defaultWeight} step="0.01" onInput={this.handleSlide.bind(this)} ref={this.state.sliderRef}></input>         
        </label>
      </li>
    )
  }
  
  handleCheck(e){

    if(e.target.checked){
      this.state.sliderRef.current.disabled = true;
    }else{
      this.state.sliderRef.current.disabled = false;
    }
  
  }

  //When one slider moves, all others are adjusted so that their total equals 100
  handleSlide(e){
    const rythmSliders = Array.from(document.getElementsByClassName(this.props.classRef));
    
    //Remove the slider that is being used
    var remainingSliders = [...rythmSliders];
    var index = remainingSliders.indexOf(e.target);
    if(index > -1){
      remainingSliders.splice(index, 1);
    }

    //Check if slider moved up or down
    var sumRemaining = 0;
    remainingSliders.forEach(slider => {
      sumRemaining += parseFloat(slider.value);
    });
    var up = (sumRemaining + parseFloat(e.target.value)) > 100 ? true : false; 

    //Filter out locked sliders
    var unlockedSliders = [];
    remainingSliders.forEach(slider => {
      if(slider.disabled == false){
        unlockedSliders.push(slider);
      }
    });

    //Move remaining sliders
    var totalToMove = Math.abs(100 - sumRemaining - e.target.value);
    for(var i = unlockedSliders.length; i > 0; i--){
      var space = up ? parseFloat(unlockedSliders[i-1].value) : 100 - parseFloat(unlockedSliders[i-1].value);
      var moveAmount = Math.min(totalToMove / i, space);

      unlockedSliders[i - 1].value = parseFloat(unlockedSliders[i - 1].value) + (up ? -moveAmount : moveAmount);
      
      totalToMove -= Math.abs(moveAmount);
    }


    //Check changed total, and if necessary snap selected slider to value such that the total == 100
    //This is needed in the event of locked sliders.
    var totalCheck = 0;
    rythmSliders.forEach(s => {
      totalCheck += parseFloat(s.value);
    });

    if(totalCheck != 100){
      e.target.value = 100 - sumRemaining;
    }
    
    //Send slider values up to parent
    if(typeof this.props.updateWeights === "function"){
        this.props.updateWeights();
    }
  }

}

export default WeightedSlider;