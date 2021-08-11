const BASE_URL = 'https://api.futurecat-diploma.nomoredomains.club'; // http://localhost:3001
const headers = { 'Content-Type': 'application/json' };

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export function getRegister(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ name, email, password }),
  }).then(getResponseData);
}

export function getLogin(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password }),
  })
    .then((data) => {
      return data;
    })
    .then(getResponseData);
}
export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data)
    .then(getResponseData);
}
