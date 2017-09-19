
function deleteMovie () {

    let url = `api/movies/${movieId}`;
    let options = {
      headers: {
          "content-type": "application/json"
      },
      method: "DELETE",
        body: JSON.stringify(
            {
                "id": `${movieId}`
            }
        )

    };
        return fetch(url, options)
        .then(response => response.json());
}

module.exports = deleteMovie;