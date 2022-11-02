import { ReactNode } from "react";
import { themeBlack } from "../assets/colors";
import { LayoutStyled } from "../assets/styled/layout/Layout.styled";
import Navbar from "../components/navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <LayoutStyled bgColor={"sse" ? themeBlack : "#fff"}>
      <Navbar />
      {props.children}
    </LayoutStyled>
  );
}
