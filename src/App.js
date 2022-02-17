import './App.css';
import React from 'react';

class App extends React.Component{

  textChanged(event){

  }

  render(){
    return (
      <div className="App">
        <div className="mainContainer">
          <textarea className="inputMarkup" oninput={this.textChanged.bind(this)}>
          </textarea>
          <div className="markupPreview">
          </div>
        </div>
      </div>
    );
  }
}
export default App;
