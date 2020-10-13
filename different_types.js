// nous verrons ici les different types que l'on peut recontrer en programmation
let number = 89;
console.log( typeof number);

let float = 56.3; //ici le type est number
console.log( typeof float);

let booleen = true; // le type de cette variable est booleen
console.log( typeof booleen );

let chaineDeCaractere = "Hello World"; // le type est String ou chaine de caractere en francais 
console.log(typeof chaineDeCaractere)  // pour désigner que c'est une chaine on utilise les guillemets

// on peut aussi concatener deux chaines de caracteres par exmeple 
let firstName = "Kevin";
let lastName = "Billet";
console.log(firstName + ' ' + lastName)

// creation un tableau vide 
let board = []; // pour cree un tableau on utilise les crochets 

//ajouter un element a la fin du tableau
board.push("ohoho"); // la fonction push ajoute un element dans le tableau
board.push("ahahaja");
board.push("gogogog");

//ajouter un element au debut du tableau 
board.unshift("wiki")

//supprimer le premier element d'un tableau
board.shift(); // ici ohoho sera supprimer

//supprimer le dernier element d'un tableau
board.pop(); 

//trouver la postion d'un element 
board.indexOf("gogogog")

// creation d'un dictionnaire ici le type de myBook est object
let myBook = 
{
    title: 'The Story of Tau', // le dictionnaire est compoé de clé et valeur par exemple ici author est une clé et 
    author: 'Will Alexander',  //The Story of Tau est une valeur
    numberOfPages: 250,        
    isAvailable: true
};
console.log(typeof myBook);

//creation de classe 
class Book 
{
    constructor (title, author, page)
    {
        this.title = title;
        this.author = author;
        this.page = page ;
    }
}
let myBook = new Book("Bataille pour zirkonia", "Kelvin Bailey",332) // on peut cree des objet de la classe book
// un autre exemple de classe
class Episode 
{
  constructor (title, duration , hasBeenWatched)
  {
    this.title = title ; 
    this.duration = duration ;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode("un interne pas comme les autres", 42, false)
let secondEpisode = new Episode("un patient mal en point", 45, false)
let thirdEpisode = new Episode("1ere chirurgie", 41, false)

// cree un tableau 

let Board = []; // pour cree un tableau on utilise les crochets 