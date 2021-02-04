function expiryCookie(expiredAfter) {
  const expiryTime = new Date();
  expiryTime.setTime(expiryTime.getTime() + expiredAfter * 60 * 1000);
  return `expires=${expiryTime.toUTCString()}`;
}

function setTokenToCookie(token, expiredAfter = 0) {
  const cookieExpired = `${expiryCookie(expiredAfter)}`;
  document.cookie = `vue-til-token=${token}; ${cookieExpired}; path=/;`;
}

function setUsernameToCookie(username, expiredAfter = 0) {
  const cookieExpired = `${expiryCookie(expiredAfter)}`;
  document.cookie = `vue-til-username=${username}; ${cookieExpired}; path=/;`;
}

function setNicknameToCookie(nickname, expiredAfter = 0) {
  const cookieExpired = `${expiryCookie(expiredAfter)}`;
  document.cookie = `vue-til-nickname=${nickname}; ${cookieExpired}; path=/;`;
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
    .find(row => row.startsWith('vue-til-nickname'));

  if (cookie) {
    return cookie.split('=')[1];
  } else {
    return '';
  }
}

export {
  setTokenToCookie,
  setUsernameToCookie,
  setNicknameToCookie,
  getTokenFromCookie,
  getUsernameFromCookie,
  getNicknameFromCookie,
};
