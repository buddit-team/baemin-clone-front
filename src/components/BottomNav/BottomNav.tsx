import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  max-width: 425px;
  position: fixed;
  bottom: 0;
  height: 45px;
  overflow: hidden;
  margin: 0 auto;
`;

const Button = styled.button`
  float: left;
  width: 20%;
  text-align: center;

  /* 세로길이 설정 */
  height: 45px;
  line-height: 45px;

  color: ${(props) => props.color || "grey"};
`;

export default function BottomNav() {
  return (
    <NavBar>
      <Link to="/search">
        <Button>검색</Button>
      </Link>
      <Link to="/likes">
        <Button>찜</Button>
      </Link>
      <Link to="/">
        <Button>배민</Button>
      </Link>
      <Link to="/orderList">
        <Button>주문내역</Button>
      </Link>
      <Link to="/myPage">
        <Button>my배민</Button>
      </Link>
    </NavBar>
  );
}
