import { Map } from 'immutable';
export function clearToken() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('is_admin');
  localStorage.removeItem('id');
}

export function addToken(token, isAdmin, id) {
  localStorage.setItem('id_token',token);
  localStorage.setItem('is_admin',isAdmin);
  localStorage.setItem('id',id);
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    const isAdmin = localStorage.getItem('is_admin');
    const id = localStorage.getItem('id');
    return new Map({ idToken, isAdmin, id });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function clearCurrentPage() {
  localStorage.removeItem('current_page');
}

export function addCurrentPage(current_page) {
  localStorage.setItem('current_page',current_page);
}

export function getCurrentPage() {
  try {
    const current_page = localStorage.getItem('current_page');
    return new Map({ current_page });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = number => {
    return number > 1 ? 's' : '';
  };
  const number = num => (num > 9 ? '' + num : '0' + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}
