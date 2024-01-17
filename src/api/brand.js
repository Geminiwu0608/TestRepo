import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/posts/2',
    method:'get',
    // params:params
  })
}
