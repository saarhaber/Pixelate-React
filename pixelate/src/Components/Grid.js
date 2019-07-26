import React from 'react'

function Grid(props) {
    let col = 3;
    let row = 3;
    let colarr = [];
    let rows;
    for( let i = 0; i < col; i++){
        colarr[i] = i;
    }
    for( let step = 0; step < row; step++){
        let local;
        for (let j = 0; j < col; j++) {
            local += <button>Click</button>;
        }
        rows += local;
    }

    rows = <div>{rows}</div>
    return(
        <div>{colarr.map(function(create) {
            return <button>TEST</button>
        })}
        </div>

    )
}

export default Grid