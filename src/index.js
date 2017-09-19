const changeH1 = require('./dom');
const dom = require("./dom");
const fetchInput = require("./submit");
const getMovies = require('./getMovies');
const {editMovie, submitMovieEdit} = require('./edit');
const deleteMovie = require('./delete');

$(document).ready(function(){
    $('.modal').modal();

});


dom.movieList();


//define a class called movie function
//return promises not functions


//A Jquery quirk: now I can assign the listener !on click! rather than on page load
$(document).on('click', '.submitEdit', ()=> submitMovieEdit().then(()=> dom.movieList()));
$(document).on('click', '.generalEdit', editMovie);

$(document).on('click', '.deleteButton', function () {
    let id = $(this).attr("data-delete");
    let url = `api/movies/${id}`;
    let options = {
        headers: {
            "content-type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify(
            {
                "id": `${id}`
            }
        )

    };
    return fetch(url, options)
        .then(response => response.json())
        .then(()=> dom.movieList())
});

// parseInt($(this).attr("data-id");
    // .then(()=> dom.movieList()));



























