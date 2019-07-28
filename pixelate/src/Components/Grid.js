import React from 'react'
import { NONAME } from 'dns';

function Grid(props) {
    return(
        <div>
            {
                props.grid_matrix.map(function(row, row_index) {
                    return(
                        <div>
                            {
                                row.row_array.map(function(cell, column_index) {
                                    let cell_style = {
                                        borderStyle: "none",
                                        backgroundColor: cell.color,
                                        height: "30px",
                                        width: "30px",
                                        margin: "2px"
                                    }
                                    return (
                                        <button 
                                            style={cell_style} 
                                            onClick={
                                                () => {
                                                    props.changeColor(row_index, column_index)
                                                }
                                            }>
                                        </button>)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
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