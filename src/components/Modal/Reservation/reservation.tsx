import * as S from "./reservation.style";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Status } from "../../../recoil/Modal";
import { useInsert } from "../../../utils";
import { inputTime } from "../../../recoil/Time";

export const Reservation = () => {
  const [status, setStatus] = useRecoilState(Status);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [input, setInput] = useRecoilState(inputTime);
  const { useInsertData } = useInsert();

  const date = "5월21일";
  const Plus = () => {
    setInput(`${hour}시${min}분`);
  };
  const test = useInsertData(input, date);

  return (
    <S.Reservation>
      <S.Top>
        <S.Title>원하시는 시간을 적어주세요.</S.Title>
        <S.Cencle src="./img/Cencle.png" onClick={() => setStatus(false)} />
      </S.Top>
      <S.ResTime>
        <div>
          <S.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHour(e.target.value)
            }
          />
          <S.Text>시</S.Text>
        </div>
        <div>
          <S.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMin(e.target.value)
            }
          />
          <S.Text>분</S.Text>
        </div>
      </S.ResTime>
      <S.Plus>
        <S.Btn onClick={Plus}>추가</S.Btn>
      </S.Plus>
    </S.Reservation>
  );
};
