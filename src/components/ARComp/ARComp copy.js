import React, { useEffect, useRef } from 'react'


const ARComp = ({ lat, lon }) => {

    let attrs = {
        color: '#689f38',
        'look-at': "[gps-camera]",
        scale: "120 120 120",
        'gps-entity-place': `latitude: ${lat}; longitude: ${lon}`,
        'cc':'cc'
    }

    let aBoxRef = useRef(null);

    useEffect(() => {

        let abox = aBoxRef.current;

        if(abox){
            for(let i in attrs){
                abox.setAttribute(i,  attrs[i]);
                // console.log(i);
            }
        }

        return ()=>{

        }

    }, [aBoxRef]);


    return (
        <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        >
            <a-box {...attrs} ref={aBoxRef} ></a-box>
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