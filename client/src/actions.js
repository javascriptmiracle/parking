export const SET_GAMES = "SET_GAMES";

function handleResponse(response) {
  console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  };
}

export function saveParkingForm(data) {
  return dispatch => {
    return fetch("/api/parking", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
  };
}

export function fetchGames() {
  return dispatch => {
    fetch("/api/parking")
      .then(res => res.json())
      .then(data => dispatch(saveParkingForm(data.games)));
  };
}
