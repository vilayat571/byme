import { Link } from "react-router-dom";
import { NavItemsLayout } from "../../assets/styled/navbar/Navbar.styled";

export default function Navitems() {
  return (
    <NavItemsLayout>
      <Link to={"/"}>Blogs</Link>
      <Link to={"/"}>Give a question</Link>
      <Link to={"/"}>Brief</Link>
      <Link to={"/"}>Sign in</Link>
      <Link to={"/"}>Sign up</Link>
    </NavItemsLayout>
  );
}
