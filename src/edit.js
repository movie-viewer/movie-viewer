// const getMovies = require('./getMovies.js');

function editMovie () {
    $(".editBtn").on("click", function(){
        console.log("did it!");
    });
}

$(document).ready(function(){
    $('.modal').modal();
});

module.exports = editMovie;