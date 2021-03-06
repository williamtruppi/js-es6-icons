$(document).ready(function () {

  //////////////////////////////////////////////////////////////
  // Creiamo array di oggetti per le icone con le seguenti proprieta: 
  // name, prefix, type, family 
  //////////////////////////////////////////////////////////////

  class icone {
    constructor(name, prefix, type, family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const iconsList = [
    new icone("cat", "fas", "fa-cat", "animals"),
    new icone("crow", "fas", "fa-crow", "animals"),
    new icone("dog", "fas", "fa-dog", "animals"),
    new icone("dove", "fas", "fa-dove", "animals"),
    new icone("dragon", "fas", "fa-dragon", "animals"),
    new icone("horse", "fas", "fa-horse", "animals"),
    new icone("hippo", "fas", "fa-hippo", "animals"),
    new icone("fish", "fas", "fa-fish", "animals"),
    new icone("carrot", "fas", "fa-carrot", "fruits & vegetables"),
    new icone("apple-alt", "fas", "fa-apple-alt", "fruits & vegetables"),
    new icone("lemon", "fas", "fa-lemon", "fruits & vegetables"),
    new icone("pepper-hot", "fas", "fa-pepper-hot", "fruits & vegetables"),
    new icone("user-astronaut","fas", "fa-user-astronaut","users & people"),
    new icone("user-graduate","fas", "fa-user-graduate","users & people"),
    new icone("user-ninja","fas", "fa-user-ninja","users & people"),
    new icone("user-secret","fas", "fa-user-secret","users & people"),
  ]

  console.log(iconsList);

  //////////////////////////////////////////////////////////////
  // Selezioniamo il container icons
  //////////////////////////////////////////////////////////////

  const iconsContainer = document.getElementById("icons");

  //////////////////////////////////////////////////////////////
  // definiamo dei colori per le icone (blue, orange, purple)
  //////////////////////////////////////////////////////////////

  const animalColor = "#0000ff";
  const fruitsVegetablesColor = "#ff8e06";
  const usersPeopleColor = "#cc00cf";

  //////////////////////////////////////////////////////////////
  //aggiungiamo dei colori usando una funzione
  //////////////////////////////////////////////////////////////

  const newIconsList = iconsList.map(element =>{
    return{
      ...element,
      "color": (element.family === "animals") ? animalColor : (element.family === "fruits & vegetables") ? fruitsVegetablesColor : usersPeopleColor,
    }
  })

  console.log(newIconsList);

  //////////////////////////////////////////////////////////////
  //inseriamo le icone colorate nel container
  //////////////////////////////////////////////////////////////

  printColoredIconsList (iconsContainer, newIconsList);

});


/* ---- FUNCTIONS ----*/

function printColoredIconsList (container, list) {

  list.forEach(element => {

    //destructuring
    const {name, prefix, type, color} = element;

    //markup
    const markup = `
    <div>
       <i class="${prefix} ${type}" style="color:${color}"></i>
       <div class="title">${name.toUpperCase()}</div>
    </div>
    `;

    container.insertAdjacentHTML("beforeend", markup);
  });
}
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup