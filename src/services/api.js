const URL = 'http://localhost:3000/api';
const searchUrl = 'https://api.napster.com/v2.2/search?query=';
const MUSICBOX_URL = `${URL}/musicbox`;
const USERS_URL = `${URL}/users`;
const SAVEDSONGS_URL = `${URL}/savedsongs`;
const AUTH_URL = `${URL}/users`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getMusic() {
  return fetch(MUSICBOX_URL, {
    headers: { 'Content-Type': 'application/json' }
  });
}

export function searchSong(song) {
  /* eslint-disable-next-line */
  const apiKey = process.env.API_KEY;
  const url = searchUrl + encodeURIComponent(song) + '&type=track&apikey=' + 'ZWQwYzkzOTctNzY5Ni00ZjkwLTkyODMtMDc3YTQwMDFmN2Y5';
  return fetch(url)
    .then(responseHandler);
}

export function getUsers() {
  return fetch(USERS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getUser() {
  return fetch(`${URL}/users/1`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getSavedSongs() {
  return fetch(SAVEDSONGS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getSavedSong(id) {
  return fetch(`${URL}/savedsongs/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

function getHeaders(hasBody) {
  const headers = {};
  if(hasBody) {
    headers['Content-Type'] = 'application/json';
  }

  const user = localStorage.user;
  if(user) {
    try {
      headers['Authorization'] = JSON.parse(user).id;
    }
    catch (err) {
      localStorage.removeItem('user');
    }
  }

  return headers;
}
export function signUp(credentials) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}

export function signIn(credentials) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}