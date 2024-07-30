import React from 'react';

// eslint-disable-next-line react/prop-types
const PercentageStat=({ label, score = 0, total = Math.max(1, score) }) =>{
    console.log("Percentage Changes...");
    return (
        <div>
            <h6> {label} </h6>
            <span> {Math.round((score/total) * 100 )} % </span>
        </div>
    );
}
// Wrapping the functional component with React.memo to make it a pure component
export default React.memo(PercentageStat);