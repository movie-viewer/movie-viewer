const getMovies = require('./getMovies.js');

function movieList () {
    //Erase the loading message after movie list loads
    let editBtn = `<a data-target="modal1" class="waves-effect waves-light btn editBtn btn modal-trigger"><i class="material-icons left">create</i>
        Edit</a>`;
    let tableBody = document.querySelector("#tableBody");

    tableBody.append = "Loading";

    getMovies().then((movies) => {
        tableBody.innerText = "";

        movies.forEach(({title, rating, id}) => {

            tableBody.innerHTML +=
                `<td>${title}</td>
                <td>${rating}</td>
                <td>${editBtn}</td>`

        });

    })
        .then( results => console.log(tableBody)).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}


module.exports = {movieList};