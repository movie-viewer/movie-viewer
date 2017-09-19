const changeH1 = require('./dom');
const dom = require("./dom");
const fetchInput = require("./submit");
const getMovies = require('./getMovies');
const {editMovie, submitMovieEdit} = require('./edit');


$(document).ready(function(){
    $('.modal').modal();

});


dom.movieList();


//define a class called movie function
//return promises not functions


//A Jquery quirk: now I can assign the listener !on click! rather than on page load
$(document).on('click', '.submitEdit', ()=> submitMovieEdit().then(()=> dom.movieList()));

$(document).on('click', '.generalEdit', editMovie);




























