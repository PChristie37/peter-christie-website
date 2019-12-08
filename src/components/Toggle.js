import React, { useState} from 'react';
import { useSpring, animated } from "react-spring"

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        // color:isToggled ? "Purple" : "Orange",
        fontSize: isToggled ? 48 : 72,
        // borderStyle: isToggled ? "solid" : "none",
        // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(-50px,-50px,-50px)',
        background:"linear-gradient(to right, #ff8a00 0%, #da1b60 100%)",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    })
    return (
        <div>
            <animated.h1 style={fade}>Welcome to Peter Christie's playground site.</animated.h1>
            <button onClick={() => setToggle(!isToggled) }>toggle</button>
        </div>
    );
};

export default Toggle;