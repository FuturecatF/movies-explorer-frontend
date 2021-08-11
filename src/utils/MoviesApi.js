function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export function getBeatMoviesFromApi() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  }).then(getResponseData);
};