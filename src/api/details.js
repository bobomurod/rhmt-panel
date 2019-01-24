import request from '../utils/request'
export function fetchDetails() {
  return request({
    url: 'http://localhost:9994/holders',
    method: 'get'
    // params: query
  })
}
