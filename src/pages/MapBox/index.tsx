import React from "react";
import { Map, MapProvider } from "react-map-gl";

const MapBox = ({ children }: React.PropsWithChildren) => {
  return (
    <MapProvider>
      <Map
        initialViewState={{
          longitude: 127.9068,
          latitude: 35.6699,
          zoom: 6,
        }}
        id={"map"}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={process.env.REACT_APP_MAP_BOX_KEY}
        attributionControl={false}
        boxZoom={false}
        scrollZoom={false}
        touchZoomRotate={false}
        dragPan={false}
      >
        {children}
        {/* {data.map((data) => ( */}
        {/* <Marker longitude={128.58} latitude={35.7979} anchor="bottom">
          <img src={Circle} alt={""} style={{ width: "7px", height: "7px" }} />
        </Marker> */}
        {/* ))} */}
      </Map>
    </MapProvider>
  );
};

export default MapBox;
