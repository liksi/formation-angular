/********** Exercice 1 **********/
// Remplacer le type User par une interface en déduisant les propriétes et leur type
interface User {
    name: string;
    age: number;
    sex: string;
}

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

function sumAge(users: User[]): number {
    return users.reduce((acc, user) => acc + user.age, 0);
}

console.log(sumAge(users));


/********** Exercice 2 **********/
// Créer des tableaux de valeurs pour les deux interfaces suivantes

interface Colorized {
    color: string;
}

interface Car extends Colorized {
    name: string;
    price?: number;
}

interface Bike extends Colorized {
    brakes: boolean;
}

const cars: Car[] = [
    {
        name: 'Audi TT',
        color: 'white',
        price: 15000
    },
    {
        name: 'Picasso',
        color: 'black'
    },
    {
        name: 'BX',
        color: 'white',
        price: 100
    }
]

const bikes: Bike[] = [
    {
        brakes: false,
        color: 'red',
    },
    {
        brakes: true,
        color: 'blue'
    }
]

// Compléter la fonction suivante qui permet de récupérer le second élément d'un tableau. Rendre cette fonction générique
function getSecondElementGeneric<T>(array: T[]): T {
    return array[1];
}

console.log(getSecondElementGeneric(cars));

// Créer une fonction qui compte le nombre d'éléments d'un tableau par couleur.
// Trouver un moyen pour que cette fonction accepte des objets de type Car ou Bike
function countByColor(array: Colorized[], color: string): number {
    return array.filter(c => c.color == color).length;
}

// console.log(countByColor(bikes, 'white'));

/********** Exercice 3 **********/
// Fixer les éventuelles erreurs dans la classe suivante
class Animal {

    constructor(private name: string) {
    }

    move(meters: number) {
      console.log(`${this.name} moved ${meters}m.`);
    }
}

// Compléter les classes suivantes pour que la méthode move affiche le nom du Snake ou Horse et sa distance de déplacement
class Snake extends Animal {
    override move(meters: number) {
        console.log("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    override move(meters: number = 2) {
        console.log("Galloping...");
        super.move(meters);
    }
}

// Faire en sorte que le name d'un Snake ou d'un Horse ne puisse plus être accédé en dehors de la classe
// console.log(new Horse("Toto").name) // devrait retourner une erreur

// Ajouter une distance par défaut sur le déplacement d'un Horse
new Horse("Titi").move(4) // devrait afficher un déplacement avec la valeur par défaut
