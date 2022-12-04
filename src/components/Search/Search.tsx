import React from "react";
import { Header, Address } from "../Header/style";
import { SearchForm, Button, Input } from "./style";

export default function Search() {
  return (
    <Header type="main">
      <Address>서울시 송파구 송파동</Address>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          // Call Submit Function Here...
        }}
      >
        <Input type="text" placeholder="곱창볶음 나와라 뚝딱!!"></Input>
        <Button>검색</Button>
      </SearchForm>
    </Header>
  );
}
