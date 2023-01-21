import { useEffect, useRef } from "react";
import MapBox from "./pages/MapBox";
import { MarkerData } from "./type";
import data from "./data/post.json";
import Dot from "./components/Dot";
import Card from "./components/Card";
import { recoil_card_isView, recoil_marker_info } from "./recoil";
import { useRecoilState } from "recoil";

function App() {
  // eslint-disable-next-line
  const [selectedMarker, setSelectedMarker] =
    useRecoilState(recoil_marker_info);

  const [cardIsView, setCardIsView] = useRecoilState(recoil_card_isView);

  useEffect(() => {
    if (selectedMarker) {
      setTimeout(() => {
        setCardIsView(true);
      }, 800);
    }
    // eslint-disable-next-line
  }, [selectedMarker]);

  useEffect(() => {
    if (!cardIsView) {
      setTimeout(() => {
        setSelectedMarker(null);
      }, 800);
    }
  }, [cardIsView]);

  return (
    <MapBox>
      {data.map((data, i) => (
        <Dot key={i} data={data as MarkerData}></Dot>
      ))}
      <Card isView={cardIsView} data={selectedMarker as MarkerData} />
    </MapBox>
  );
}

export default App;
