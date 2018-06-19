const URL = 'http://localhost:3000/api';
const searchUrl = 'https://api.napster.com/v2.2/search?query=';
const MUSICBOX_URL = `${URL}/musicbox`;
const USERS_URL = `${URL}/users`;
const SAVEDSONGS_URL = `${URL}/savedsongs`;

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
    .then(response => response.json());
}

export function getUsers() {
  return fetch(USERS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getUser(id) {
  return fetch(`${URL}/users/${id}`, {
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