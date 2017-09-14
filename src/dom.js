const getMovies = require('./getMovies.js');

function movieList () {
    //Erase the loading message after movie list loads

    let h1 = document.getElementById("h1");

    h1.innerHTML = "Loading";

    getMovies().then((movies) => {
        h1.innerHTML = "";

        movies.forEach(({title, rating, id}) => {

            h1.innerHTML +=
                `<li>id#${id} - ${title} - rating: ${rating}</li>`
        });
    })
        .then( results => console.log(h1)).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}



edit.addEventListener("click", ()=> {
    for(let i=0; i > h1.length; i++ ){
        console.log("h1");
    }
});



module.exports = {movieList};