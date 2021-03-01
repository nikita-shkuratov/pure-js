import { storage } from "../core/utils";

const defaultlState = {
  rowState: {},
  colState: {},
};

export const initialState = storage("exel-state")
  ? storage("exel-state")
  : defaultlState;
