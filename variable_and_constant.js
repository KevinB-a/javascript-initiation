// déclaration de variables avec le mot clé let 
let numberOfCats = 2; 

let numberOfDogs = 4;

let numberOfSeason = 6;

let numberOfEpisode = 12;

// reaffectation d'une variable
numberOfCats = 3;

let totalCDs = 67;

let totalVinyls = 34;
// addition de variable avec l'opérateur + 
let totalMusic = totalCDs + totalVinyls;

let cookiesInJar = 10;
let cookiesRemoved = 2;
 // soustraction de variable avec l'opérateur -
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

let cookiesInJar = 10;
 
/* on soustrait deux a la variable cookiesInJar */
cookiesInJar -= 2;  //il reste 8 cookies

/* cuisson d'un nouveau lot de cookies */ 
cookiesInJar += 12; // il y a maintenant 20 cookies dans la boîte

let numberOfLikes = 10;

numberOfLikes++;  // cela fait 11

numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?

let costPerProduct = 20;
let numberOfProducts = 5;
 
let totalCost = costPerProduct * numberOfProducts; // multiplication 
 
let averageCostPerProduct = totalCost / numberOfProducts; // division

let numberOfCats = 2;

numberOfCats *= 6;  // numberOfCats vaut maintenant 2*6 = 12; 

numberOfCats /= 3;  // numberOfCats vaut maintenant 12/3 = 4;

let numberOfSeason = 6;
let numberOfEpisode = 12;
let episodeTime = 45;
let commercialTime = 5;
// déclaration d'une variable qui donne le temps total de visionnage
let totalShowTime = (episodeTime + commercialTime) * numberOfSeason * numberOfEpisode
// console.log permet d'afficher le resultat
console.log(totalShowTime)

/*jusqu'ici nous avons vu les variables passont maintenant aux constantes 
en javascript les constantes sont appeler avec le mot cle const*/
const hourPerDay = 24;
const minutePerHour = 60;
const secondesPerMinute = 60;