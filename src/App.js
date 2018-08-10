import React from 'react';
import ReactDom from 'react-dom'
import './App.css';


class Greeting extends React.Component {
  render() {
    return (
      <div>
      <input type="text" placeholder="greeting"/>
      </div>

    )
     
  }
}
ReactDOM.render(
<Greeting />,
document.getElementById('root')
)