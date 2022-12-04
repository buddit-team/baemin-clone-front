import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import Search from "../Search/Search";

export default function Home() {
  return (
    <div>
      <Search />
      <Link to="/delivery">
        <div>배달</div>
      </Link>
      <Link to="/packaging">
        <div>포장</div>
      </Link>
    </div>
  );
}
