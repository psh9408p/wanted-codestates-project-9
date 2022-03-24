import React from "react";
import styled from "styled-components";

export default function HeaderUtil() {
  return (
    <HeaderWrap>
      <div>
        <ul>
          <li>
            <a href="/">
              <img
                src="https://tmi.nexon.com/img/assets/logo_kart.png"
                alt="logo"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg"
                alt="TMI"
              ></img>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/">카트라이더 홈페이지 바로가기</a>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  min-height: 48px;
  ul {
    display: flex;
  }
  li {
    margin-right: 20px;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    color: #6c7a89;
  }
`;
