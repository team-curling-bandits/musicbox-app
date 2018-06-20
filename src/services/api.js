// const URL = 'http://localhost:3000/api';
const searchUrl = 'https://api.napster.com/v2.2/search?query=';
// const Users_URL = `${URL}/users`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => { 
    throw err.message; 
  });
}


export function searchSong(song) {
  /* eslint-disable-next-line */
  const apiKey = process.env.API_KEY;
  const url = searchUrl + encodeURIComponent(song) + '&type=track&apikey=' + 'ZWQwYzkzOTctNzY5Ni00ZjkwLTkyODMtMDc3YTQwMDFmN2Y5';
  return fetch(url)
    .then(responseHandler);
}

