import "./App.css";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as data from "./data/data.json";
import MARKER from "./taxi.png";
const TOKEN =
  "pk.eyJ1IjoiZHdpZ2h0c2NocnV0ZSIsImEiOiJja2t4d2Z3bXUybzB6MnVzMW9zbXhqdmtyIn0.843lElK1D2yFrx7TzOBiwA";

function App() {
  const [viewport, setviewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 11,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        //mapStyle="mapbox://styles/dwightschrute/ckky3wbf229rt17oartcj7zli"
        onViewportChange={(viewport) => {
          setviewport(viewport);
        }}
      >
        {data.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button className="marker_btn">
              <img src={MARKER} alt="taxi" />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
