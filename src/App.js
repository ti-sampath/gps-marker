import classes from './App.module.scss';
import { useEffect, useRef, useState } from 'react';
import ASquare from './components/ASquare/ASquare';

function App() {
  const { liveCoords } = useLiveCoords();
  const aSceneRef = useRef(null);
  const [coordList, setCoordList] = useState([]);


  const handleDropPin = () => {
    setCoordList([...coordList, { lat: liveCoords.lat, lon: liveCoords.lon }]);
  }

  useEffect(() => {
    let aScene = aSceneRef.current;
    if (aSceneRef) {
      aScene.flushToDOM(true);
    }

  }, [aSceneRef]);


  return (
    <>
      <a-scene ref={aSceneRef}>
        {
          coordList.map((coords, idx) => (
            <ASquare key={`pin_${idx}`} lat={coords.lat} lon={coords.lon} />
          ))
        }
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
      <main className={classes['main']}>
        <div className={classes['co-ords']}>
          Latitude: {liveCoords.lat}<br />
          Longitude: {liveCoords.lon}<br />
          Dropped pin count: {coordList.length}<br />
          <button onClick={handleDropPin}>Drop <br />a Pin</button>
        </div>
      </main>
    </>
  );
}

export default App;


const useLiveCoords = () => {
  const [liveCoords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    let id, target, options;

    function success(pos) {
      let crd = pos.coords;
      setCoords({ lat: crd.latitude, lon: crd.longitude });
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    target = {
      latitude: 0,
      longitude: 0
    };

    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success, error, options);

    return () => {
      navigator?.geolocation.clearWatch(id);
    }

  }, []);

  return { liveCoords }
}