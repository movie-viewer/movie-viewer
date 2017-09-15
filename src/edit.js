// const getMovies = require('./getMovies.js');

function editMovie () {
    $(".editBtn").on("click", function(){
        $("#id").val($(this).attr("data-id"));
        $("#edit-movie-title").val($(this).attr("data-title"));
        $("#edit-${data-").prop('checked',true);

    });
}

$(document).ready(function(){
    $('.modal').modal();
});

module.exports = editMovie;