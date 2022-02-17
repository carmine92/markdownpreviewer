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
          <div className="editorBlock">
            <div className="title">
              <span>Editor</span>
            </div>
            <textarea className="inputMarkup" 
            onInput={this.textChanged.bind(this)} 
            value={this.state.basetext}
            >
            </textarea>
          </div>

          <div className="previewBlock">
            <div className="title">
              <span>Preview</span>
            </div>
            <div className="markupPreview" dangerouslySetInnerHTML={{__html:this.state.markedhtml}}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
