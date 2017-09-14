
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');
const changeH1 = require('./dom');
const dom = require("./dom");


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click',
    () => fetchTest()
    );

const fetchTest = () => {

    let url = 'api/movies';
    let options = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
            {
                "title": ,
                "rating":
            })
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(response => console.log("It works!"))
        .catch(response => console.log("Something went wrong with the fetch"))
};


dom.movieList();
dom.changeH1();



// import changeH1 from './dom';

/**
 * require style imports
 */
const getMovies = require('./getMovies.js');



