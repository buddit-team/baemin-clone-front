import React from "react";
import { Outlet } from "react-router";
import { Main } from "./style";

export default function Root() {
  return (
    <Main>
      {/* where we want it to render its child routes. */}
      <Outlet />
    </Main>
  );
}
