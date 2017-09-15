// const getMovies = require('./getMovies.js');

function editMovie () {
    $(".editBtn").on("click", function(){
        console.log("did it!");
    });
}

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

module.exports = editMovie;