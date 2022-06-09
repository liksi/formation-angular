/********** CONST & LET **********/
// Remplacer les variables initalisées avec var par const ou let
const candidates = [
  'Jon Snow',
  'Daenerys Targarien',
  'Cersei Lannister'
]
let size = 0;

candidates.forEach(function() {
  size ++;
})

console.log(size);


/********** STRING TEMPLATE **********/
// Remplacer la string "stringToReplace" avec un string template
const theName = "Henry"
const stringToReplace = `Bonjour ${theName}.
Bienvenue sur l'application`;

console.log(stringToReplace);


/********** ARROW FUNCTIONS **********/
// Remplacer les fonctions par des arrow functions
const sayHello = name => 'Hello ' + name;

const addition = (a, b) => a + b;

console.log(sayHello('Moto'));
console.log(addition(1, 2));

/********** SPREAD **********/
// Fusionner les deux tableaux
const tab1 = ['Il', 'faut', 'fusionner'];
const tab2 = ['ces', 'deux', 'tableaux'];
let result = [...tab1, ...tab2];

console.log(result);

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

let personnes2 = personnes.map(p => ({ ...p, prenom: 'John'}));

console.log(personnes2)

// Créer un tableau personnes3 dans lequel on ne retrouve que les
// personnes dont le nom commence par "Dup" et passer leur nom en majuscules

let personnes3 = personnes
  .filter(p => p.nom.startsWith('Dup'))
  .map(p => ({...p, nom:p.nom.toUpperCase()}));

console.log(personnes3)

/********** CLASSES **********/
// Remplacer le prototype Calculette par une classe nommée CalculetteV2
// Utilisez ensuite cette classe à la fin de l'exercice

class CalculetteV2 {

  current = 0;

  constructor(initialValue) {
      this.current = initialValue
  }

  reset() {
      this.current = 0;
  }

  add(number) {
      this.current += number;
  }

  subtract(number) {
      this.current -= number;
  }

  multiply(number) {
      this.current *= number;
  }

  divide(number) {
      this.current /= number;
  }

  result() {
      console.log(this.current);
  }
}

const calc = new CalculetteV2(3);

calc.add(14)
calc.subtract(4)
calc.multiply(10)
calc.divide(2)
calc.result()
