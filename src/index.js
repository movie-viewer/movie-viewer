
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');
const changeH1 = require('./dom');
const dom = require("./dom");
const getMovies = require('./getMovies.js');

const submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener('click',
    () => {
    let title = document.getElementById("movie").value;
    let rating = document.querySelector("[type=radio]:checked").value;
    fetchTest(title, rating);
        console.log(title);
    console.log(rating);
}
    );

const fetchTest = (title, rating) => {
    let url = 'api/movies';
    let options = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
            {
                "title": title,
                "rating": rating
            })
    };
    return fetch(url, options)
        .then(response => response.json());
};


dom.movieList();
dom.changeH1();



// import changeH1 from './dom';

/**
 * require style imports
 */



























