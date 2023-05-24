import { atom } from "recoil";

export const currentDate = atom({
  key: "currentDate",
  default: "",
});

export const inputAmPm = atom({
  key: "inputAmPm",
  default: "",
});
