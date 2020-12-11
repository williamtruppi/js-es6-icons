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
  // inseriamo le icone colorate nel container
  //////////////////////////////////////////////////////////////

  newIconsList.forEach(element => {
    
    const markup = `
    <div>
      <i class="${element.prefix} ${element.type}" style="color:${element.color}"></i>
      <div class="title">${element.name.toUpperCase()}</div>
    </div>
    `;

    iconsContainer.insertAdjacentHTML('beforeend', markup);
  });

  //////////////////////////////////////////////////////////////
  //  estrapoliamo i tipi di icone
  //////////////////////////////////////////////////////////////

  const animalsList = newIconsList.filter((element) => {
    return element.family === 'animals'
  });
  console.log(animalsList);

  const vegfruitList = newIconsList.filter((element) => {
    return element.family === 'fruits & vegetables'
  });
  console.log(vegfruitList);

  const usersList = newIconsList.filter((element) => {
    return element.family === 'users & people'
  });
  console.log(usersList);

  //////////////////////////////////////////////////////////////
  //aggiungiamo i tipi alla select
  //////////////////////////////////////////////////////////////

  const selectNav = document.getElementById("type");
  console.log(selectNav);

  const markup = `
    <option value="2">Animals</option>
    <option value="3">fruits & vegetables</option>
    <option value="4">users & people</option>
  `;

  console.log(markup);
  selectNav.insertAdjacentHTML("beforeend", markup);

  //////////////////////////////////////////////////////////////
  //al change mostriamo solo le icone filtrate
  //////////////////////////////////////////////////////////////

  selectNav.addEventListener("change", function() {
    
    console.log("You selected: ", this.value);

    if (this.value == 2){

      $("#icons > div").remove();
      
      console.log("if value 2");

      animalsList.forEach(element => {
        const markup = `
          <div>
            <i class="${element.prefix} ${element.type}" style="color:${element.color}"></i>
            <div class="title">${element.name.toUpperCase()}</div>
          </div>
        `;
        iconsContainer.insertAdjacentHTML('beforeend', markup);
      });

    } else if (this.value == 3) {
      
      $("#icons > div").remove();
      
      console.log("if value 3");

      vegfruitList.forEach(element => {
        const markup = `
          <div>
            <i class="${element.prefix} ${element.type}" style="color:${element.color}"></i>
            <div class="title">${element.name.toUpperCase()}</div>
          </div>
        `;
        iconsContainer.insertAdjacentHTML('beforeend', markup);
      });
    }
    
  });

  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo

});


/* ---- FUNCTIONS ----*/

// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup