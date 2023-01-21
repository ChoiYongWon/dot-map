import styled from "styled-components";
import { MarkerData } from "../../type";
import { useRecoilState } from "recoil";
import { recoil_card_isView } from "../../recoil";
import { useMap } from "react-map-gl";

type WrapperProps = {
  isView: boolean;
};

type BackgroundProps = {
  isView: boolean;
};

type Props = {
  isView: boolean;
  data: MarkerData;
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props: BackgroundProps) => (props.isView ? `block` : `none`)};
  background: transparent;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 90%;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.2s;
  transform-origin: center;
  border-radius: 8px;
  transform: ${(props: WrapperProps) =>
    props.isView
      ? "translate(-50%, -80%) scale(1, 1)"
      : "translate(-50%, -50%) scale(0.01, 0.01)"};
  visibility: ${(props: WrapperProps) => (props.isView ? "visible" : "hidden")};
`;

const Title = styled.span`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  opacity: 80%;
  margin-bottom: 4px;
`;

const DateInfo = styled.span`
  font-size: 12px;
  color: #d9d9d9;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 1rem;
  max-width: calc(350px - 3rem);
  border-radius: 8px;
  overflow: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar-button {
    background: transparent;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

type ImageBoxProps = {
  src: string;
};

const ImageBox = styled.div`
  min-width: 200px;
  min-height: 200px;
  border-radius: 8px;
  background: ${(props: ImageBoxProps) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  scroll-snap-align: center;
`;

const Card = (props: Props) => {
  const { current: map } = useMap();
  const [cardIsView, setCardIsView] = useRecoilState(recoil_card_isView);

  const onClose = () => {
    map?.flyTo({
      center: [127.9068, 35.6699],
      zoom: 6,
      duration: 800,
    });
    setCardIsView(false);
  };

  return (
    <>
      <Background onClick={onClose} isView={props.isView}></Background>
      <Wrapper isView={props.isView}>
        <Title>{props.data?.name}</Title>
        <DateInfo>
          {props.data?.startDate}
          {props.data?.endDate == props.data?.startDate
            ? ""
            : " ~ " + props.data?.endDate}
        </DateInfo>
        <ImageWrapper>
          {props.data?.imgUrls.map((imgUrl, i) => {
            console.log(imgUrl);
            return <ImageBox key={i} src={imgUrl} />;
            // return <Box></Box>;
          })}
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export default Card;
