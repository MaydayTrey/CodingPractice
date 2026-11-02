import { useState, useImperativeHandle } from 'react'

const Collapsible = ({ children, ref, buttonLabel }) => {
    const [visibility, setVisibility] = useState(false)
    //Start visibility in a false state.
    const contentStyle = { display: visibility ? '' : 'none' }
    const toggleVisibility = () => setVisibility(!visibility)

    useImperativeHandle(ref, () => {
        return { toggleVisibility }
    })

    return (
        /*JSX goes here
        Use the && logic, we want to show the books, so will that be props.children just within a div? 
        */
       <div>
            <div style={contentStyle}>
                {children}
            </div>
        <button onClick={toggleVisibility}>{visibility ? 'Hide' : buttonLabel}</button>
       </div>
    )
}

export default Collapsible