import React, { useEffect, useRef } from 'react'


const ARComp = ({ lat, lon }) => {

    let attrs = {
        color: '#689f38',
        'look-at': "[gps-camera]",
        scale: "120 120 120",
        'gps-entity-place': `latitude: ${lat}; longitude: ${lon}`
    }

    let aSceneRef = useRef(null);

    let aBoxRef = useRef(null);

    // useEffect(() => {
    //     let aBox = aBoxRef.current;
    //     if(aBox){
    //         for(let i in attrs){
    //             aBox.setAttribute(i, attrs[i]);
    //             console.log(i, attrs[i])
    //         }
    //     }

    // }, [aBoxRef, lat, lon ]);

    useEffect(()=>{

        let aScene = aSceneRef.current;
        if(aSceneRef){
            aScene.flushToDOM(true); 
        }

    }, [aSceneRef]);


    return (
        <a-scene ref={aSceneRef} vr-mode-ui="enabled: false" arjs="sourceType: webcam; videoTexture: true;" debug>
            <a-box ref={aBoxRef} color='#689f38' look-at="[gps-camera]" gps-entity-place='latitude: 17.385044; longitude: 78.486671;' ></a-box>
            {/* <a-box ref={aBoxRef} ></a-box> */}
            <a-camera gps-camera rotation-reader> </a-camera>
        </a-scene>
    )




    return (
        <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true;"
            debug
        >
            <a-box
                color='#689f38'
                look-at="[gps-camera]"
                scale="120 120 120"
                gps-entity-place={`latitude: ${lat}; longitude: ${lon}`}
            ></a-box>
            <a-camera gps-camera rotation-reader> </a-camera>
        </a-scene>
    )
}


export default ARComp






// (
//     <a-scene
//         vr-mode-ui="enabled: false"
//         arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
//     >
//         <a-box
//             color='#689f38'
//             look-at="[gps-camera]"
//             gps-entity-place='latitude: 17.385044; longitude: 78.486671;'
//         ></a-box>
//         <a-camera gps-camera rotation-reader> </a-camera>
//     </a-scene>
// )


// (<a-scene
// vr-mode-ui="enabled: false"
// arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
// >
// <a-text
//     value="This content will always face you."
//     look-at="[gps-camera]"
//     scale="120 120 120"
//     // gps-entity-place={`latitude: ${lat}; longitude: ${lon};`}
//     gps-entity-place='latitude: 17.385044; longitude: 78.486671;'
// ></a-text>
// {/* <a-box
//     color='#689f38'
//     value="This content will always face you."
//     look-at="[gps-camera]"
//     scale="120 120 120"
//     gps-entity-place={`latitude: ${lat}; longitude: ${lon}`}
// ></a-box> */}
// <a-camera gps-camera rotation-reader> </a-camera>
// </a-scene>)