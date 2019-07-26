import React from 'react';
import './App.css';
import Grid from './Components/Grid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedColor: "red",
      columns: 3,
      rows: 3
    }
  }

  render() {
    return(
      <div>
        <div>
          <button>Add Row</button>
          <button>Delete Row</button>
          <button>Add Column</button>
          <button>Delete Column</button>
          <select>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <Grid />
      </div>
    )
  }
}

export default App;
