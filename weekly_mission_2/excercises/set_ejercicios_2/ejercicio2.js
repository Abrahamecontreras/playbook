const explorers = [
   {
     name: "Abraham",
     exercises_completed: 10,
     rate: 99,
     city: "CDMX",
     stack: [
       "js",
       "c#"
     ],
     missions: {
       onboarding: {
         isFinished: true,
         exercisesFinished: true
       },
       frontend: {
         isFinished: true,
         exercisesFinished: true
       }
     }
   },

   {
     name: "Johny",
     exercises_completed: 9,
     city: "Veracruz",
     rate: 50,
     stack: [
       "js"
     ],
     missions: {
       onboarding: {
         isFinished: false,
         exercisesFinished: false
       },
       frontend: {
         isFinished: false,
         exercisesFinished: false
       }
     }
   },
   {
     name: "Ranni",
     exercises_completed: 3,
     city: "Sonora",
     rate: 100,
     stack: [
       "elixir"
     ],
     missions: {
       onboarding: {
         isFinished: true,
         exercisesFinished: true
       },
       frontend: {
         isFinished: false,
         exercisesFinished: false
       }
     }
   }
  ]

//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Los explorers son: ")
explorers.forEach(explorer => console.log(explorer.name));

//Imprime el stack de cada explorer, usa FOR EACH
console.log("Sus stacks con each son:")
explorers.forEach(explorer => console.log(explorer.stack));
  
//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
let stackExplorers = explorers.map(function(stack){ return stack.stack})
console.log("Sus map de stacks son: ")  
console.log(stackExplorers);

//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("La lista de explorers con js son: ")
const stacksJs = explorers.filter(function(stacks) {
  return stacks.stack.includes('js');
})
console.log(stacksJs);


//Busca el primer explorer que sea de la CDMX, usa FIND
const cdmxExplorers = explorers.find(city => city.city === 'CDMX')
console.log("El primer explorer encontrado en lista con residencia en CDMX es: ")
console.log(cdmxExplorers);


//Obtén la suma de todos los exercises_completed, usa REDUCE
const reducedExcercises = explorers.reduce(function(previousValue, nextValue) {return previousValue + nextValue.exercises_completed}, 0)
console.log("La suma de todos los ejercicios terminados es: ")
console.log(reducedExcercises)

//Obtén la validación si al menos uno de los explorers 
//tiene la propiedad exercisesFinished en frontend como true, usa SOME
const areSomeTrue = explorers.some(obj => obj.missions.frontend.exercisesFinished === true);
console.log(`Algún explorer tiene ejercicios terminados?: ${areSomeTrue}`);


//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const areAllTrue = explorers.every(obj => obj.missions.frontend.isFinished === true);
console.log(`Todos los exporers tienen la propiedad isFinished en verdadero?: ${areAllTrue}`);



