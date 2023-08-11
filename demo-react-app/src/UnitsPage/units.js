import * as React from "react";

function Units () {
    let indents = [];
    for (let i = 0; i < 5; i++) {
        indents.push(<span className='indent' key={i}>Hello</span>);
    }
    return indents;   
}

export default Units;
