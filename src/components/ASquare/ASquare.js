import React, { useEffect, useRef } from 'react'

let colors = ['red', 'green', 'blue', 'yellow', 'black', 'pink'];
const ASquare = ({ lat, lon }) => {

    const aBoxRef = useRef(null);
    let color = colors[Math.floor(Math.random() * colors.length)];

    useEffect(() => {

        let aBox = aBoxRef.current;
        if (aBoxRef) {
            aBox.flushToDOM(true);
        }

    }, [aBoxRef]);

    return (
        <a-box height='2' width='2' depth='2' ref={aBoxRef} id="box" scale="" material={`color: ${color}`}
            gps-entity-place={`latitude: ${lat}; longitude: ${lon};`} >
            <a-camera gps-camera rotation-reader camera position rotation look-controls wasd-controls></a-camera>
        </a-box>
    )
}

export default ASquare