import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import SubHeader from "../global/Header/SubHeader/indext";

const Delivery = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    navigate(`/delivery/${text}`);
  };

  return (
    <div>
      <SubHeader category="배달" />
      <h1>Delivery</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="category id"
          value={text}
          onChange={handleChange}
        />
      </form>
      <BottomNav />
    </div>
  );
};

export default Delivery;
