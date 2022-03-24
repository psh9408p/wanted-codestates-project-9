import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Stats() {
  const percentage = 66;

  return (
    <StatsWrap>
      <Card>
        <TotalStats>
          <h5>종합 전적</h5>
          <p>
            200전
            <span>180승</span>
            <span>20패</span>
          </p>
        </TotalStats>

        <ProgressWrap>
          <ProgressCard>
            <ProgressDiv>
              <p>승률</p>
              <CircularProgressbar
                value={percentage}
                maxValue={100}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </ProgressDiv>
            <ProgressDiv>
              <p>승률</p>
              <CircularProgressbar
                value={percentage}
                maxValue={100}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </ProgressDiv>
            <ProgressDiv>
              <p>승률</p>
              <CircularProgressbar
                value={percentage}
                maxValue={100}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </ProgressDiv>
          </ProgressCard>
        </ProgressWrap>
      </Card>
      <Card></Card>
      <Card></Card>
    </StatsWrap>
  );
}

const StatsWrap = styled.div`
  padding: 0 30px;
  display: flex;
`;

const Card = styled.div`
  border: 1px solid #f2f2f2;
  width: 426px;
  height: 265px;
  flex: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const TotalStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 12px;
  padding: 0 8px;
`;

const ProgressWrap = styled.div`
  display: flex;
  border-top: 1px solid black;
`;

const ProgressCard = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const ProgressDiv = styled.div`
  width: 205px;
  height: 205px;
  border-right: 1px solid black;
`;
