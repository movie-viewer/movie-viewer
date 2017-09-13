const getMovies = require('./getMovies.js');
function changeH1 () {
    let h1 = document.body.getElementsByTagName("h1");
    console.log(h1[0]);

    h1[0].innerHTML = "Loading";
}


module.exports = changeH1;


function movieList () {
    getMovies().then((movies) => {
        console.log(movies[0]);
        // console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

}
//
module.exports = movieList;
