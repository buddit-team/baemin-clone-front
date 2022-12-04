import {
  faArrowLeft,
  faCartShopping,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Category, Header, Menus, Utils } from "../style";
import Address from "../../../features/Address";
import { useNavigate } from "react-router-dom";

type SubHeaderProps = {
  category: string;
  categoryClick?: () => void;
};

const SubHeader = ({ category, categoryClick }: SubHeaderProps) => {
  const [basketCount, setBasketCount] = React.useState<number>(0);
  const navigate = useNavigate();

  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (categoryClick) {
      categoryClick();
    } else {
      navigate("/");
    }
  };

  return (
    <Header type="sub">
      <Utils>
        <div className="flex-1 gap-1.5">
          <button className="w-6 h-6 text-left" onClick={handleCategoryClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <Category>{category}</Category>
        </div>
        <Menus>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </Menus>
      </Utils>
      <Address type="sub" address="서울시 강서구 염창동" />
    </Header>
  );
};

export default SubHeader;