import { atom, useRecoilState } from "recoil";
import { Toc } from "utils/heading";

export type TocState = Toc[] | [];

export const tocState = atom<TocState>({
  key: "tocState",
  default: [],
});

export const useToc = () => useRecoilState(tocState);
