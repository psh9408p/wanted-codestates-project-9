import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HeaderTab() {
  const TabList = [
    {
      id: 1,
      title: "홈",
      link: "/",
    },
    {
      id: 2,
      title: "랭킹",
      link: "/ranking",
    },
    {
      id: 3,
      title: "카트",
      link: "/kart/user",
    },
    {
      id: 4,
      title: "트랙",
      link: "/track",
    },
  ];

  return (
    <HeaderTabWrap>
      <div>
        <ul>
          {TabList.map((v) => (
            <li>
              <Link to={v.link}>
                <LiWrap>{v.title}</LiWrap>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HeaderTabWrap>
  );
}

const HeaderTabWrap = styled.div`
  /* position: relative; */
  padding: 0 30px;

  background: salmon;
  color: #eeeeee;

  div {
    height: 50px;
  }
  ul {
    display: flex;
  }
  li {
    margin-right: 30px;
    &:after {
      display: block;
      content: "";
      transform: scaleX(0);
      padding-bottom: 18px;
      width: 60px;
    }
    &:hover::after {
      opacity: 1;
      border-bottom: 5px solid white;
      transform: scaleX(1);
      transform-origin: 0% 50%;
      transition: transform 250ms ease-in-out;
      bottom: 0;
    }
  }
  /* margin-bottom: 10px; */
`;

const LiWrap = styled.div`
  width: 120px;
  /* text-align: center; */
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
