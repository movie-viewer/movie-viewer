const getMovies = require('./getMovies.js');
const edit = require('./edit');

function movieList () {
    //Erase the loading message after movie list loads
    let tableBody = document.querySelector("#tableBody");

    tableBody.innerText = "Loading...";

    getMovies().then((movies) => {
        tableBody.innerText = "";

        movies.forEach(({title, rating, id}) => {
            tableBody.innerHTML +=
                `<td>${id}</td>
                <td>${title}</td>
                <td>${rating}</td>
                <td>
                <a data-target="modal1"
                class="generalEdit waves-effect waves-light btn btn modal-trigger"
                data-id="${id}"
                data-title="${title}"
                data-rating="${rating}">
                <i class="material-icons left">create</i>Edit</a>

                <a class="waves-effect waves-light btn editBtn btn modal-trigger red darken-3">
                <i class="material-icons left">clear</i>Delete</a>
                </td>`
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}


module.exports = {movieList};