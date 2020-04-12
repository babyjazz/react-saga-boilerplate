import request from 'utils/request'

export async function listUserRequest({ userId }) {
  if (userId) {
    return request(`/users/${userId}?delay=1`)
  } else {
    return request('/users?delay=1')
  }
}
