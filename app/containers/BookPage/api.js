import { get } from 'utils/request';

export function fetchList() {
  return get('http://v3.wufazhuce.com:8000/api/channel/reading/more/0?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2')
    .then((data) => data.data)
    .catch(() => {
      throw new Error('获取失败');
    });
}
