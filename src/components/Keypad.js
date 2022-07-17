// Code Keypad Component Here

import React from "react";

function Keypad() {
    function handleClick(number) {
        console.log("Entering password...");
    }

    return ( <
        div >
        <
        button onClick = {
            () => handleClick(1)
        } > Button 1 < /button> < /
        div >

    );
}



export default Keypad;