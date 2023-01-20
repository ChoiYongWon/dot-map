import styled from "styled-components";

type Props = {
  isView: boolean;
};

const Wrapper = styled.div`
  padding: 1.5rem;
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 1s;
  transform-origin: center;
  border-radius: 8px;
  transform: ${(props: Props) =>
    props.isView
      ? "translate(-50%, -80%) scale(1, 1)"
      : "translate(-50%, -50%) scale(0.2, 0.2)"};
  visibility: ${(props: Props) => (props.isView ? "visible" : "hidden")};
`;

const Card = (props: Props) => {
  return <Wrapper isView={props.isView}></Wrapper>;
};

export default Card;
