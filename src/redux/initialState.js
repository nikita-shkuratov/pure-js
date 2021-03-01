import { storage } from "../core/utils";

const defaultlState = {
  rowState: {},
  colState: {},
  dataState:{},
  currentText:'',

};

export const initialState = storage("exel-state")
  ? storage("exel-state")
  : defaultlState;
