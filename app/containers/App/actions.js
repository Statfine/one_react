import { CHANGE_LOCALE, CHANGE_FIRST_OPEN, CHANGE_MUSCI_PALY } from './constants';

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

export function changeMusicPlay(data) {
  return {
    type: CHANGE_MUSCI_PALY,
    payload: data,
  };
}
