import styled from "styled-components";
import { themeBlack } from "../../colors";

interface ILayoutStyled {
  bgColor: string;
}

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: ${(props: ILayoutStyled) => props.bgColor===themeBlack ? '#fff' : '#000'};
  flex-direction: column;
  background-color: ${(props: ILayoutStyled) => props.bgColor};
`;
