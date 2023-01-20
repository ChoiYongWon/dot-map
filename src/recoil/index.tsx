import { atom } from "recoil";
import { MarkerData } from "../type";

export const recoil_marker_info = atom<MarkerData>({
  key: "selectedMarker",
  default: undefined,
});

export const recoil_card_isView = atom<boolean>({
  key: "recoil_card_isView",
  default: false,
});
