import React from 'react';
import './App.css';
import Grid from './Components/Grid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedColor: "red",
      columns: 5,
      rows: 3
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }
  addRow=()=>{
    this.setState({ 
      rows : this.state.rows+1
    });
  }
  addCol=()=>{
    this.setState({ 
      columns : this.state.columns+1
    });
  }
  render() {
    return(
      <div>
        <div>
          <button onClick ={this.addRow}>Add Row</button>
          <button>Delete Row</button>
          <button onClick ={this.addCol}>Add Column</button>
          <button>Delete Column</button>
          <select name="clickedColor" onChange={this.handleChange} value={this.state.clickedColor}>
            <option value="red" >Red</option>
            <option value="blue" >Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <br></br>
        <Grid row = {this.state.rows} col = {this.state.columns}/>
      </div>
    )
  }
}

export default App;
