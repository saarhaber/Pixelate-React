import React from 'react'

class Grid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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
    }

    render() {
        return(
            <div>
                {
                    this.state.grid_matrix.map(function(row) {
                        return(
                            <div>
                                {
                                    row.row_array.map(function(cell) {
                                        let cell_style = {
                                            backGroundColor: cell.color
                                        }
                                        return (<button style={cell_style}>Test</button>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

// OLD GRID COMPONENT
// function Grid(props) {
//     let col = props.col;
//     let row = props.row;
//     let colarr = [];
//     let rowarr = [];
//     let rows;
//     for( let i = 0; i < col; i++){
//         colarr[i] = i;
//     }
//     for( let x = 0; x < row; x++){
//         rowarr[x] = x;
//     }
//     for( let step = 0; step < row; step++){
//         let local;
//         for (let j = 0; j < col; j++) {
//             local += <button>Click</button>;
//         }
//         rows += local;
//     }
//     return(
//         // <div>{colarr.map(function(create) {
//         //     return <button>TEST</button>
//         // })}
//         <div>
//         {rowarr.map(function(create) {
//             return <div>
//             {console.log(col)}
//             {colarr.map(function(create){
//                 return <button>TEST</button>
//             })}
//             </div>
//         })}
//         </div>

//     )
// }

export default Grid