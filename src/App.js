import './App.css';
import React from 'react';
import { marked } from "marked";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      basetext:"",
      markedhtml:""
    };
  }

  textChanged(event){
    let newValue = event.target.value;
    this.setState(state => ({
      basetext: newValue,
      markedhtml: marked.parse(newValue ? newValue : ""),
    }))
  }

  render(){
    return (
      <div className="App">
        <div className="mainContainer">
          <textarea className="inputMarkup" 
          onInput={this.textChanged.bind(this)} 
          value={this.state.basetext}
          >
          </textarea>

          <div className="markupPreview" dangerouslySetInnerHTML={{__html:this.state.markedhtml}}/>
          
        </div>
      </div>
    );
  }
}
export default App;
