import React from "react";
import styled from "styled-components";
const NavigtionBar = () => {
  return (
    <NavContainer>
      <div className="logo">
        <img src="" alt="ogo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Projects</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </NavContainer>
  );
};

export default NavigtionBar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  align-items: center;
  margin: 0 auto;
  max-width:1280px;

  ul{
    display:flex;
    list-style-type: style none;gap: 24px;
    list-style:none;
  }
  ul li{
    padding:10px;
  }
`;
