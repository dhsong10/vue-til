function expiryCookie() {
  const expiryTime = new Date();
  expiryTime.setTime(expiryTime.getTime() + 5 * 60 * 1000);
  return `expires=${expiryTime.toUTCString()}`;
}

function saveTokenToCookie(token) {
  document.cookie = `vue-til-token=${token}; ${expiryCookie()}}; path=/;`;
}

function saveUsernameToCookie(username) {
  document.cookie = `vue-til-username=${username}; ${expiryCookie()}}; path=/;`;
}

function saveNicknameToCookie(nickname) {
  document.cookie = `vue-til-nickname=${nickname}; ${expiryCookie()}}; path=/;`;
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
