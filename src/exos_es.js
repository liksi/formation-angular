/********** CONST & LET **********/
// Remplacer les variables initalisées avec var par const ou let
var candidates = [
    'Jon Snow',
    'Daenerys Targaryen',
    'Cersei Lannister'
]
var size = 0;

candidates.forEach(function(user) {
    size ++;
})

// console.log(size);


/********** STRING TEMPLATE **********/
// Remplacer la string "stringToReplace" avec un string template
const theName = "Henry"
const stringToReplace = "Bonjour " + theName + ".\n" + 'Bienvenue sur l\'application';

// console.log(stringToReplace);


/********** ARROW FUNCTIONS **********/
// Remplacer les fonctions par des arrow functions
function sayHello(name) {
    return 'Hello ' + name;
}

const addition = function(a, b) {
    return a + b;
}

// console.log(sayHello('Moto'));
// console.log(addition(1, 2));


/********** SPREAD **********/
// Fusionner les deux tableaux
const tab1 = ['Il', 'faut', 'fusionner'];
const tab2 = ['ces', 'deux', 'tableaux'];
let result = []; // TODO

// console.log(result);

let personnes = [
    {
        nom: "Durand",
        prenom: "François"
    },
    {
        nom: "Dupont",
        prenom: "Georges"
    },
    {
        nom: "Dupond",
        prenom: "Guillaume"
    }
]

// Créer un tableau personnes2 qui copie chaque élément du tableau personne en remplaçant le prénom par "John"

let personnes2 = personnes // TODO

// console.log(personnes2)

// Créer un tableau personnes3 dans lequel on ne retrouve que les
// personnes dont le nom commence par "Dup" et passer leur nom en majuscules

let personnes3 = personnes // TODO

//console.log(personnes3)


/********** CLASSES **********/
// Remplacer le prototype Calculette par une classe nommée CalculetteV2
// Utilisez ensuite cette classe à la fin de l'exercice

function Calculette() {
    this.current = 0;
}

Calculette.prototype.reset = function() {
    this.current = 0
}

Calculette.prototype.add = function(number) {
    this.current += number;
}

Calculette.prototype.subtract = function(number) {
    this.current -= number;
}

Calculette.prototype.multiply = function(number) {
    this.current *= number;
}

Calculette.prototype.divide = function(number) {
    this.current  /= number;
}

Calculette.prototype.result = function() {
    console.log(this.current);
}

const calc = new Calculette();

calc.add(14)
calc.subtract(4)
calc.multiply(10)
calc.divide(2)
// calc.result()
