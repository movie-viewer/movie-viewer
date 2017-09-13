
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');
const changeH1 = require('./dom');
const dom = require("./dom");

dom.movieList();
dom.changeH1();

// import changeH1 from './dom';

/**
 * require style imports
 */
const getMovies = require('./getMovies.js');



