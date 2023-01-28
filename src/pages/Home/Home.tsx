import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import MainHeader from "../../components/Header/MainHeader";
import Search from "../../components/Search/Search";
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
