import { useState } from 'react'

const Collapsible = (props) => {
    const [visibility, setVisibility] = useState(false)
    //Start visibility in a false state.
    const contentStyle = { display: visibility ? '' : 'none' }

    return (
        /*JSX goes here
        Use the && logic, we want to show the books, so will that be props.children just within a div? 
        */
       <div>
            <div style={contentStyle}>
                        {props.children}
            </div>
        <button onClick={() => setVisibility(!visibility)}>{visibility ? 'Hide' : 'Show'}</button>
       </div>
    )
}

export default Collapsible