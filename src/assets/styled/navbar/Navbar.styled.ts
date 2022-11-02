import styled from "styled-components";

export const NavbarLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLayout = styled.div`
  width: 90%;
  height: auto;
  padding: 50px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 728px) {
    display: none;
  }
`;

export const SidbearLayout = styled.div`
  display: none;
  padding: 50px 0px 0px;
  @media only screen and (max-width: 728px) {
    display: block;
  }
`;

export const LogoStyled = styled.span`
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.8px;
`;


export const NavItemsLayout=styled.div`

`;