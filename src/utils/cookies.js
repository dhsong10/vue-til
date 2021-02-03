function saveTokenToCookie(token) {
  document.cookie = `vue-til-token=${token}`;
}

function saveUsernameToCookie(username) {
  document.cookie = `vue-til-username=${username}`;
}

function saveNicknameToCookie(nickname) {
  document.cookie = `vue-til-nickname=${nickname}`;
}

function getTokenFromCookie() {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('vue-til-token'));

  if (cookie) {
    return cookie.split('=')[1];
  } else {
    return '';
  }
}

function getUsernameFromCookie() {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('vue-til-username'));

  if (cookie) {
    return cookie.split('=')[1];
  } else {
    return '';
  }
}

function getNicknameFromCookie() {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('vue-til-nicname'));

  if (cookie) {
    return cookie.split('=')[1];
  } else {
    return '';
  }
}
export {
  saveTokenToCookie,
  saveUsernameToCookie,
  saveNicknameToCookie,
  getTokenFromCookie,
  getUsernameFromCookie,
  getNicknameFromCookie,
};
