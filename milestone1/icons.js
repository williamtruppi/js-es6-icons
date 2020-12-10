$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: 
  // name, prefix, type, family 
  class icone {
    constructor(name, prefix, type, family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const iconsList = [
    new icone ("cat", "fas", "fa-cat", "animals"),
    new icone ("crow", "fas", "fa-crow", "animals"),
    new icone ("dog", "fas", "fa-dog", "animals"),
    new icone ("dragon", "fas", "fa-dragon", "animals"),
    new icone ("fish", "fas", "fa-fish", "animals"),
    new icone ("horse", "fas", "fa-horse", "animals"),
  ]

  console.log(iconsList);
  // Semezioniamo il container icons

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup