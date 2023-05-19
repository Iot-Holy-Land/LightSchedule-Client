import { useQuery } from "@tanstack/react-query";
import { Test } from "../../utils/auth";
import * as S from "./Data.style";
import { Clock } from "../Clock/Clock";
import { useEffect, useState } from "react";
import { Reservation } from "../Modal/Reservation/reservation";

import { useRecoilValue, useRecoilState } from "recoil";
import { Status } from "../../recoil/Modal";
import { currentTime } from "../../recoil/Time";
import { Loding } from "../Loading/loading";

export const Data = () => {
  const { data, isLoading } = useQuery(["Test"], Test);

  const [timer, setTimer] = useRecoilState(currentTime);

  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();

  useEffect(() => {
    setTimer(`${hour}시${min}분`);
    console.log("현재 시간 : ", timer);
  }, [timer]);

  return (
    <>
      {isLoading ? (
        <Loding />
      ) : (
        <S.Container>
          <S.Arrow src="./img/leftArrow.png" />
          <S.Data>
            {data?.map((e: any) => (
              <S.Card>
                <S.Time>
                  <div>예약시간 : {e.time}</div>
                </S.Time>
                <S.Picture>
                  <Clock />
                </S.Picture>
                <S.Date>
                  <div>예약 날짜 : {e.date}</div>
                </S.Date>
              </S.Card>
            ))}
          </S.Data>
          <S.Arrow src="./img/rightArrow.png" />
        </S.Container>
      )}
    </>
  );
};
