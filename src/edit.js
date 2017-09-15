// const getMovies = require('./getMovies.js');

let edit = document.getElementById("edit");
let inputField = document.getElementById("movie");

function editInput() {
    let liList = document.getElementsByTagName("li");

    for(let li of liList){
        console.log("Hello");
        console.log(li);
    }

}


// edit.addEventListener("click", ()=> {
//     for(let i=0; i > h1.length; i++ ){
//         console.log("h1");
//     }
// });

module.exports = {editInput};