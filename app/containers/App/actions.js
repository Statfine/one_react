import { CHANGE_LOCALE } from './constants';

export function changeLocale(data) {
  return {
    type: CHANGE_LOCALE,
    payload: data,
  };
}
