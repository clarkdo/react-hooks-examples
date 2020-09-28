import React from "react";
import { Link as RouteLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  margin: 0;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(even) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled(RouteLink)`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>React Hook Examples</Logo>
      <Menu>
        <Item>
          <Link onClick={window.console.clear} to="/withoutUseMemo">
            useMemo
          </Link>
        </Item>
        <Item>
          <Link onClick={window.console.clear} to="/withoutUseRef">
            useRef
          </Link>
        </Item>
        <Item>
          <Link onClick={window.console.clear} to="/singleUseState">
            useState
          </Link>
        </Item>
      </Menu>
    </Nav>
  );
};

export default Navigation;
