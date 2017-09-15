const getMovies = require('./getMovies.js');
const editMovie = require('./edit');

function movieList () {
    //Erase the loading message after movie list loads
    let editBtn = ``;
    let tableBody = document.querySelector("#tableBody");

    tableBody.append = "Loading";

    getMovies().then((movies) => {
        tableBody.innerText = "";

        movies.forEach(({title, rating, id}) => {

            tableBody.innerHTML +=
                `<td>${id} - ${title}</td>
                <td>${rating}</td>
                <td>
                <a data-target="modal1" class="waves-effect waves-light btn editBtn btn modal-trigger" data-id="${id}" data-title="${title}" data-rating="${rating}"><i class="material-icons left">create</i>Edit</a>
                </td>`
        });
        editMovie();
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}

// function editMovie() {
//     let
// }

module.exports = {movieList};