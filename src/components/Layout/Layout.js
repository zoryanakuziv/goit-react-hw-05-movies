import { NavLink, Outlet } from "react-router-dom";
import { LinkStyled, Header } from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <Header>
        <ul>
          <LinkStyled>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#3f51b5" : "#2a363b",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Home
            </NavLink>
          </LinkStyled>
          <LinkStyled>
            <NavLink
              to="/movies"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#3f51b5" : "#2a363b",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Movies
            </NavLink>
          </LinkStyled>
        </ul>
      </Header>
      <Outlet />
    </div>
  );
};
export default Layout;
