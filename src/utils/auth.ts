import Cookies from 'js-cookie'

const TOKEN = 'user_token'
const USERNAME = 'user_name'

export const getToken = function () {
  return Cookies.get(TOKEN)
}

export const setToken = function (token: string) {
  return Cookies.set(TOKEN, token, { expires: 7 }) // expires after 7 days
}

export const removeToken = function () {
  return Cookies.remove(TOKEN)
}

export const getUsername = function () {
  return Cookies.get(USERNAME)
}

export const setUsername = function (token: string) {
  return Cookies.set(USERNAME, token, { expires: 7 }) // expires after 7 days
}

export const removeUsername = function () {
  return Cookies.remove(USERNAME)
}
