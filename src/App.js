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
    this.setState(state => ({
      basetext: event.target.value,
      markedhtml: marked.parse(state.basetext ? state.basetext: ""),
    }))
  }

  render(){
    return (
      <div className="App">
        <div className="mainContainer">
          <textarea className="inputMarkup" onInput={this.textChanged.bind(this)} value={this.state.basetext}>
          </textarea>
          <div className="markupPreview">
            {this.state.markedhtml}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
