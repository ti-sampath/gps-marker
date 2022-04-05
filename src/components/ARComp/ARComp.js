import React, { useEffect, useRef } from 'react'


const ARComp = ({ lat, lon }) => {

    const aSceneRef = useRef(null);


    useEffect(() => {

        let aScene = aSceneRef.current;
        if (aSceneRef) {
            aScene.flushToDOM(true);
        }

    }, [aSceneRef]);


    return (
        <a-scene ref={aSceneRef} vr-mode-ui="enabled: false" arjs="sourceType: webcam; videoTexture: true;" debug>
            <a-box color='#689f38' look-at="[gps-camera]" gps-entity-place='latitude: 17.385044; longitude: 78.486671;' ></a-box>
            <a-camera gps-camera rotation-reader> </a-camera>
        </a-scene>
    )
}



export default ARComp



