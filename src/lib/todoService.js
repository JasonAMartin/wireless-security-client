const baseUrl = 'http://www.wireless-security.org/api/'

export const loadTodos = (apiPath) => {
  return fetch(baseUrl + apiPath)
    .then(res => res.json())
}

