import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import SubHeader from "../../components/Header/SubHeader/indext";
import { categoryData } from "./CategoryData";

const Delivery = () => {
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setCategoryId(e.currentTarget.id);
    navigate(`/delivery/${e.currentTarget.id}`);
  };

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 90%;
    margin: 10px auto;
    font-size: 10px;
    .item {
      text-align: center;
    }
  `;

  const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div>
      <SubHeader category="배달" />
      <GridContainer>
        {categoryData.map((category) => {
          return (
            <GridItem
              id={category.id}
              key={category.id}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <img
                src={category.img}
                alt={category.alt}
                style={{
                  width: "32px",
                  height: "32px",
                }}
              ></img>
              <div style={{ marginTop: "5px" }}>{category.title}</div>
            </GridItem>
          );
        })}
      </GridContainer>
      <BottomNav />
    </div>
  );
};

export default Delivery;
