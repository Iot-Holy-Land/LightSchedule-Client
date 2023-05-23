import * as S from "./reservation.style";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Status } from "../../../recoil/Modal";
import { currentDate, inputAmPm } from "../../../recoil/Time";
import { useInsert } from "../../../utils";

export const Reservation = () => {
  const [status, setStatus] = useRecoilState(Status);
  const date = useRecoilValue(currentDate);

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [input, setInput] = useState("");
  const [amPm, setAmPm] = useRecoilState(inputAmPm);

  const { useInsertData } = useInsert();

  const Plus = () => {
    if (amPm === "오후") {
      setInput(`${Number(hour) + 12}시${min}분0초`);
    } else {
      setInput(`${hour}시${min}분0초`);
    }
  };
  useEffect(() => {
    console.log("내가 적은 시간 : ", input);
  }, [input]);

  const data = useInsertData(input, date, amPm);
  const Error = data.data;

  if (Error === 1) {
    // alert("중복되는 예약이 있습니다");
  }

  return (
    <>
      <S.Reservation>
        <S.Top>
          <S.Title>원하시는 시간을 적어주세요.</S.Title>
          <S.Cencle src="./img/Cencle.png" onClick={() => setStatus(false)} />
        </S.Top>

        <S.Select onChange={e => setAmPm(e.target.value)}>
          <option value="">선택</option>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
        </S.Select>

        <S.ResTime>
          <div>
            <S.Input onChange={(e: any) => setHour(e.target.value)} />
            <S.Text>시</S.Text>
          </div>
          <div>
            <S.Input onChange={(e: any) => setMin(e.target.value)} />
            <S.Text>분</S.Text>
          </div>
        </S.ResTime>
        <S.Plus>
          <S.Btn onClick={Plus}>추가</S.Btn>
        </S.Plus>
      </S.Reservation>
    </>
  );
};
