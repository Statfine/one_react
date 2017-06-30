import 'whatwg-fetch';
import _ from 'lodash';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

function parseData(data) {
  // token失效时页面刷新
  if (data.code === 9001) {
    localStorage.expires_in = Date.now();
    return location.reload();
  }

  if (data.code === 0 || data.res === 0 || (data.status_code >= 200 && data.status_code < 300)) {
    return data;
  }

  const error = new Error(data.message);
  error.data = data;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function requestNoSnack(url, options) {
  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  };

  const mergeOptions = _.merge({}, defaultOptions, options);
  return fetch(url, mergeOptions)
    .then(parseJSON)
    .then(parseData);
}

export default function request(url, options) {
  return requestNoSnack(url, options)
    .catch((error) => {
      throw error;
    });
}

export function get(urlString, params = {}, option = {}) {
  const query = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  const options = { method: 'GET' };
  const mergeOptions = _.merge({}, options, option);
  if (query) {
    return request(`${urlString}?${query}`, mergeOptions);
  }
  return request(`${urlString}`, mergeOptions);
}


/* eslint-disable */
function mapKeysDeep(obj, func) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (_.isObject(obj[key])) {
      const value = mapKeysDeep(obj[key],func)
      delete obj[key];
      obj[func(key)] = value;
    } else {
      const value = obj[key];
      delete obj[key];
      obj[func(key)] = value;
    }
  })
  return obj;
}
/* eslint-enable  */

export function camelToSnake(obj) {
  return mapKeysDeep(obj, _.snakeCase);
}

// 下划线转驼峰
export function camelCase(obj) {
  return mapKeysDeep(obj, _.camelCase);
}
