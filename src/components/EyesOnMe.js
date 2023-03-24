import React from "react";

function EyesOnMe() {
    const HandleFocus = () => console.log("Good!");
    const handleBlur = () => console.log("Hey! Eyes on me!");

    return (
        <button onFocus={HandleFocus} onBlur={handleBlur}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe;