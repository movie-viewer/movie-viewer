
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');
const changeH1 = require('./dom');
// import changeH1 from './dom';
changeH1();
/**
 * require style imports
 */
const getMovies = require('./getMovies.js');

getMovies().then((movies) => {

  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});



