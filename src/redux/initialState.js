import {defaultStyles, defaultTitle} from '../constants';
import {cloneObject} from '../core/utils';

const defaultlState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON(),
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : cloneObject(defaultlState);
}
