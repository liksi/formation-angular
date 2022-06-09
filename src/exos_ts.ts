/********** Exercice 1 **********/
// Remplacer le type User par une interface en déduisant les propriétes et leur type
type User = any;

const users: User[] = [
    {
        name: 'Harry Potter',
        age: 41,
        sex: 'M'
    },
    {
        name: 'Hermione Granger',
        age: 42,
        sex: 'F'
    }
];

// Compléter la fonction sumAge pour calculer la somme des ages d'une liste de Users
function sumAge(users) {
    // TODO
}

// console.log(sumAge(users));


/********** Exercice 2 **********/
// Créer des tableaux de valeurs pour les deux interfaces suivantes
interface Car {
    name: string,
    color: string,
    price?: number
}

const cars = [];

interface Bike {
    color: string,
    brakes: boolean
}

const bikes = [];

// Compléter la fonction suivante qui permet de récupérer le second élément d'un tableau. Rendre cette fonction générique
function getSecondElementGeneric(array) {
    // TODO
}

// console.log(getSecondElementGeneric(cars));

// Créer une fonction qui compte le nombre d'éléments d'un tableau par couleur.
// Trouver un moyen pour que cette fonction accepte des objets de type Car ou Bike
function countByColor(array, color) {
    // TODO
}

// console.log(countByColor(bikes, 'white'));

/********** Exercice 3 **********/
// Fixer les éventuelles erreurs dans la classe suivante
class Animal {
    constructor(name) {}
    move(meters) {
      console.log(`${this.name} moved ${meters}m.`);
    }
}

// Compléter les classes suivantes pour que la méthode move affiche le nom du Snake ou Horse et sa distance de déplacement
class Snake {
    move(meters) {
        console.log("Slithering...")
    }
}

class Horse {
    move(meters) {
        console.log("Galloping...")
    }
}

// Faire en sorte que le name d'un Snake ou d'un Horse ne puisse plus être accédé en dehors de la classe
// console.log(new Horse("Toto").name) // devrait retourner une erreur

// Ajouter une distance par défaut sur le déplacement d'un Horse
// new Horse("Titi").move() // devrait afficher un déplacement avec la valeur par défaut
