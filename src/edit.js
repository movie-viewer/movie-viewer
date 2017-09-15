// const getMovies = require('./getMovies.js');

function editMovie () {
    // let hack = `"#edit-${data-rating}"`;
    $(".editBtn").on("click", function(){
        $("#id").val($(this).attr("data-id"));
        $("#edit-movie-title").val($(this).attr("data-title"));
        let value = $(this).attr('data-rating');

        $(`input[name=rating][value=${value}]`).prop("checked", true);
        // $(hack).prop('checked',true);

    });
}

$(document).ready(function(){
    $('.modal').modal();
});

module.exports = editMovie;