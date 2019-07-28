import React from 'react';
import './App.css';
import Grid from './Components/Grid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedColor: "red",
      columns: 3,
      rows: 3,
      grid_matrix: [
        {
            row_array: [
                {
                    color: "grey"
                },
                {
                    color: "grey"
                },
                {
                    color: "grey"
                }
            ]
        },
        {
            row_array: [
                {
                    color: "grey"
                },
                {
                    color: "grey"
                },
                {
                    color: "grey"
                }
            ]
        },
        {
            row_array: [
                {
                    color: "grey"
                },
                {
                    color: "grey"
                },
                {
                    color: "grey"
                }
            ]
        }
    ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
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
      new_row[i] = { color: "grey" }
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
      prevState.grid_matrix[x].row_array[this.state.grid_matrix[x].row_array.length] = { color: "grey"}
      )
    })
    }
  }

  render() {
    return(
      <div>
        <div>
          <button onClick ={this.addRow}>Add Row</button>
          <button onClick={this.deleteRow}>Delete Row</button>
          <button onClick ={this.addCol}>Add Column</button>
          <button>Delete Column</button>
          <select name="clickedColor" onChange={this.handleChange} value={this.state.clickedColor}>
            <option value="red" >Red</option>
            <option value="blue" >Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <br/>
        <Grid row = {this.state.rows} col = {this.state.columns} grid_matrix={this.state.grid_matrix}/>
      </div>
    )
  }
}

export default App;