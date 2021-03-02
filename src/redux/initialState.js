import { defaultStyles, defaultTitle } from "../constants";
import { storage } from "../core/utils";

const defaultlState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
});

export const initialState = storage("exel-state")
  ? normalize(storage("exel-state"))
  : defaultlState;
