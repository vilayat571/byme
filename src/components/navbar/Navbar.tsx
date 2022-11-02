import React, { memo } from "react";
import { NavbarLayout, NavLayout } from "../../assets/styled/navbar/Navbar.styled";
import Logo from "../../atoms/navbar/Logo";
import Theme from "../../atoms/navbar/Theme";
import Navitems from "./Navitems";

function Navbar() {
  return (
    <NavbarLayout>
     <NavLayout>
     <Logo />
      <Navitems />
      <Theme />
     </NavLayout>
    </NavbarLayout>
  );
}

export default memo(Navbar);
