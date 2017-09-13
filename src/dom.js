const getMovies = require('./getMovies.js');

let p = document.getElementById("p");
let h1 = document.getElementById("h1");

function changeH1 () {
    h1.innerHTML = "Loading";
    console.log("It's working really..");
}


function movieList () {
    // changeH1();
    getMovies().then((movies) => {
        // console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            p.innerHTML =(`id#${id} - ${title} - rating: ${rating}`);
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

}

module.exports = {changeH1, movieList};