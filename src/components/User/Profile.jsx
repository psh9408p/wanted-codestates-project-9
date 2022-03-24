import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <Wrap>
      <div>
        <i></i>
        <p> 카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다</p>
      </div>
      <UserInfoWrap>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/2ecb10f5e23493727a80a91421d6242a18b131f743676e72317bde4bd5d27131.png"
          alt="profile-image"
        />
        <UserProfile>
          <h1>토트넘C</h1>
          <Select>
            <span>개인전</span>
            <span>팀전</span>
          </Select>
          <UserAction>
            <ActionBtn>전적갱신</ActionBtn>
            <ActionBtn>신고하기</ActionBtn>
            <ActionBtn>공유하기</ActionBtn>
          </UserAction>
        </UserProfile>
      </UserInfoWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 30px;
  margin-top: 15px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  height: 177px;
  margin-top: 15px;
  padding: 26px 0 0;
  position: relative;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url("https://tmi.nexon.com/img/background_flag_w.png");
  background-size: cover;
  background-position: 50%;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  z-index: 2;
`;

const UserProfile = styled.div`
  margin-top: 30px;
`;

const Select = styled.div`
  background: #07f;
  display: inline-block;
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 5px 5px 5px;
  margin-right: 20px;
  span {
    vertical-align: middle;
    display: inline-block;
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    &:first-child {
      background: white;
      border: 1px solid #07f;
      border-radius: 5px 0 0 5px;
    }
  }
`;

const UserAction = styled.div`
  display: inline-block;
`;

const Bar = styled.span`
  content: "";
  position: absolute;
  display: inline-block;
  top: 27px;
  right: 0;
  width: 1px;
  height: 14px;
  background-color: #ececec;
`;

const ActionBtn = styled.span`
  display: inline-block;
  margin-top: 20px;
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
