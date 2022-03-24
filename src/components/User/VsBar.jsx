import React from "react";
import styled, { keyframes } from "styled-components";

export default function VsBar() {
  return (
    <div style={{ padding: "0 30px" }}>
      <Wrap>
        <p>1대1 매칭 시뮬레이터 - '토트넘c' 와 가상 대결을 펼쳐보세요.</p>
        <ActionBtn>매칭하기</ActionBtn>
      </Wrap>
    </div>
  );
}

const boxFade = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position:100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  position: relative;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: ${boxFade} 20s ease infinite;
  color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
`;

const ActionBtn = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-right: 10px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
`;
