import { Marker, useMap } from "react-map-gl";
import { useRecoilState } from "recoil";
import Circle from "../../asset/circle.svg";
import { recoil_marker_info } from "../../recoil";
import { MarkerData } from "../../type";

type Props = {
  data: MarkerData;
};

const Dot = (props: Props) => {
  const { current: map } = useMap();
  // eslint-disable-next-line
  const [selectedMarker, setSelectedMarker] =
    useRecoilState(recoil_marker_info);

  const onClick = () => {
    map?.flyTo({
      center: [props.data.longitude, props.data.latitude],
      zoom: 10,
    });
    setSelectedMarker(props.data);
  };

  return (
    <Marker
      onClick={onClick}
      longitude={props.data.longitude}
      latitude={props.data.latitude}
      anchor="bottom"
      style={{ cursor: "pointer" }}
    >
      <img src={Circle} alt={""} style={{ width: "7px", height: "7px" }} />
    </Marker>
  );
};

export default Dot;
