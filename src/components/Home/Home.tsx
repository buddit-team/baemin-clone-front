import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import MainHeader from "../global/Header/MainHeader";
import Search from "../Search/Search";
import SearchPage from "../SearchPage";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Link to="/delivery">
        <div>배달</div>
      </Link>
      <Link to="/packaging">
        <div>포장</div>
      </Link>
    </div>
    );
}
