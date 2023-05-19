import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;
`;
export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
  margin: 20px;
`;
export const Card = styled.div`
  width: 20vw;
  height: 20vw;

  border-radius: 20px;
  box-shadow: 3px 3px 20px gray;

  cursor: pointer;

  transition: all 0.2s;
  :hover {
    box-shadow: 5px 5px 5px gray;
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2vw;
  font-weight: 600;

  height: 25%;
  width: 85%;
`;

export const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  width: 90%;
  height: 70%;
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;

  width: 20vw;
  height: 18vh;
`;

export const Arrow = styled.img`
  width: 5rem;
  cursor: pointer;
`;
