import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="welcomeText">Welcome to Lochland</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
