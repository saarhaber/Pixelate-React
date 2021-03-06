import React from 'react';
import './App.css';
import Grid from './Components/Grid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedColor: "red",
      columns: 0,
      rows: 0,
      grid_matrix: [],
      main_div_style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addRow = () => {
    this.setState({ 
      rows : this.state.rows + 1
    })

    let new_row = []
    for (let i = 0; i < this.state.columns; i++) {
      new_row[i] = {
        row_index: this.state.grid_matrix.length,
        column_index: i,
        color: "grey"
      }
    }

    this.setState(prevState => {
      return (
        prevState.grid_matrix.push({ row_array: new_row })
      )
    })
    console.log(this.state.grid_matrix)
  }

  deleteRow = () => {
    if (this.state.rows > 0) {
      this.setState({
        rows: this.state.rows - 1
      })
  
      this.setState(prevState => {
        return(
          prevState.grid_matrix.pop()
        )
      })
    }
  }

  addCol = () => {
    this.setState({ 
      columns : this.state.columns+1
    });
    for (let x = 0; x < this.state.grid_matrix.length; x++){
      this.setState(prevState => {
      return(
      prevState.grid_matrix[x].row_array[this.state.grid_matrix[x].row_array.length] = { 
        row_index: x,
        column_index: this.state.columns,
        color: "grey"
      }
      )
    })
    }
  }

  deleteCol = () => {
    if (this.state.columns > 0) {
      this.setState({
        columns: this.state.columns - 1
      })
  
      for (let x = 0; x < this.state.grid_matrix.length; x++){
        this.setState(prevState => {
          return (
            prevState.grid_matrix[x].row_array.pop()
          )
        })
      }
    }
  }

  changeColor(row_index, column_index) {
    this.setState(prevState => {
      return (
        prevState.grid_matrix[row_index].row_array[column_index].color = this.state.clickedColor
      )
    })
  }

  render() {
    return(
      <div style={this.state.main_div_style}>
        <h1>Pixelate</h1>
        <div>
          <button onClick ={this.addRow}>Add Row</button>
          <button onClick={this.deleteRow}>Delete Row</button>
          <button onClick ={this.addCol}>Add Column</button>
          <button onClick = {this.deleteCol}>Delete Column</button>
          <select name="clickedColor" onChange={this.handleChange} value={this.state.clickedColor}>
            <option value="red" >Red</option>
            <option value="blue" >Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <br/>
        <Grid grid_matrix={this.state.grid_matrix} changeColor={this.changeColor} />
      </div>
    )
  }
}

export default App;