import React from "react";
import { Link, useParams } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import SubHeader from "../global/Header/SubHeader/indext";

export default function RestarantList() {
  const { categoryId } = useParams();
  const restarant = [
    { id: 1, name: "지코바" },
    { id: 2, name: "교촌치킨" },
    { id: 3, name: "BHC" },
    { id: 4, name: "굽네치킨" },
  ];

  return (
    <>
      <SubHeader category="배달" />
      <div>RestarantList categoryId: {categoryId}</div>
      <ul>
        {restarant.map((item) => {
          return (
            <>
              <Link to={`/restaurant/${item.id}`}>
                <li>{item.name}</li>
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
}
