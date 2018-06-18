const URL = 'http://localhost:3000/api';
const MusicBox_URL = `${URL}/musicbox`;

export function getMusic() {
  return fetch(MusicBox_URL, {
    headers: { 'Content-Type': 'application/json' }
  });
}