import React from "react";


const DisplayRow = ({name,value}) => {
    return(
        <div >
            <button>{name}</button>
            <button>{value}</button>
        </div>
        
    );
};

export default DisplayRow;