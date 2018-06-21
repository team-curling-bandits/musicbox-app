const URL = 'http://localhost:3000/api';
const searchUrl = 'https://api.napster.com/v2.2/search?query=';
const newsUrl = 'https://newsapi.org/v2/everything?sources=entertainment-weekly&q=music&sortBy=publishedAt&pageSize=10&apiKey=9fa47f32b7bd438a93898938d10d85ad';
const MUSICBOX_URL = `${URL}/musicbox`;
const USERS_URL = `${URL}/users`;
const SAVEDSONGS_URL = `${URL}/savedsongs`;
const AUTH_URL = `${URL}/auth`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
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

export function getMusic() {
  return fetch(MUSICBOX_URL, {
    headers: { 'Content-Type': 'application/json' }
  });
}

export function searchSong(song) {
  const url = searchUrl + encodeURIComponent(song) + '&type=track&apikey=ZWQwYzkzOTctNzY5Ni00ZjkwLTkyODMtMDc3YTQwMDFmN2Y5';
  return fetch(url)
    .then(responseHandler);
}

export function getNews() {
  return fetch(newsUrl)
    .then(responseHandler);
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

export function getSavedSongs(id) {
  return fetch(`${SAVEDSONGS_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}
export function deleteSong(id) {
  return fetch(`${SAVEDSONGS_URL}/${id}`, {
    method: 'DELETE',
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

export function saveSong(song) {
  return fetch(SAVEDSONGS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(song)
  })
    .then(responseHandler);
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