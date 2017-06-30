import { get } from 'utils/request';

export function fetchList() {
  return get('http://v3.wufazhuce.com:8000/api/onelist/4145/%E6%B7%B1%E5%9C%B3%E5%B8%82?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2')
    .then((data) => data.data)
    .catch(() => {
      throw new Error('获取失败');
    });
}
