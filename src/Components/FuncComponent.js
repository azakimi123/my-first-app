//Import React, but we don't bring in Component
import React from 'react';

//create a JavaScript function
const FuncComponent = () => {
    //REQUIRED to return a display, JSX
    return (
        <div>
            <p>I am a functional component</p>
        </div>
    )

}

//export the component, so other components/files can use it
export default FuncComponent;

// const FuncComponent = () => (
//     <div>
//         <p>I am a functional component with implicit return</p>
//     </div>
// )