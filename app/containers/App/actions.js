import { CHANGE_LOCALE, CHANGE_FIRST_OPEN } from './constants';

export function changeLocale(data) {
  return {
    type: CHANGE_LOCALE,
    payload: data,
  };
}

export function changeFirstOpen(data) {
  return {
    type: CHANGE_FIRST_OPEN,
    payload: data,
  };
}
