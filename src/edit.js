// Global access of movieSettings variable across both functions
let movieSettings ={};

function editMovie() {
        //Data Attr dynamically generated on general button anchor tag (dom.js)
       movieSettings = {
            movieId: parseInt($(this).attr("data-id")),
            movieRating: $(this).attr('data-rating'),
            movieTitle: $(this).attr("data-title")
        };

        //Pre-selects rating inside edit modal
        $(`input[name=rating][value="${movieSettings.movieRating}"]`).prop("checked", true);

        //Movie title to be edited appears inside input field
        $("#edit-movie-title").val(movieSettings.movieTitle);
}

const submitMovieEdit = () => {

        //Update global object with user's edits
        movieSettings.movieRating = $('input[name=rating]:checked').val();
        movieSettings.movieTitle = $("#edit-movie-title").val();


        //Return a promise via fetch
        let url = `api/movies/${movieSettings.movieId}`;
        let options = {
            headers: {
                "content-type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(
                {
                    "title": movieSettings.movieTitle,
                    "rating": movieSettings.movieRating,
                    "id": movieSettings.movieId
                })
        };
            return fetch(url, options)
            .then(response => response.json());

};




module.exports = {submitMovieEdit, editMovie};