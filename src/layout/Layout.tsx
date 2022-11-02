import { ReactNode } from "react";
import { themeBlack } from "../assets/colors";
import { LayoutStyled } from "../assets/styled/layout/Layout.styled";
import Navbar from "../components/navbar/Navbar";
import { RootState, useAppSelector } from "../redux/store";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {

  const theme=useAppSelector((state:RootState)=>state.changeThemeReducer.theme);

  return (
    <LayoutStyled bgColor={theme ? themeBlack : "#fff"}>
      <Navbar />
      {props.children}
    </LayoutStyled>
  );
}
