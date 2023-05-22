import server from "../server";
import qs from "qs";

export interface lightSchedule {
  time: string;
  date: string;
  ampm: string;
}
export interface deleteType extends lightSchedule {
  id: number;
}

export const View = async () => {
  return (await server.get("/BE/view.php")).data;
};

export const Insert = async ({ time, date, ampm }: lightSchedule) => {
  if (time.length === 0 || ampm === "") {
    return;
  }
  const query = qs.stringify({
    time: time,
    date: date,
    ampm: ampm,
  });
  return (await server.get(`/BE/insert.php?${query}`)).data;
};

export const Delete = async (id: any) => {
  return (await server.get(`/BE/delete.php?id=${id}`)).data;
};
