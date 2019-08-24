class Pokemon {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    echo() {
      console.log(`Type of ${this.name} is ${this.type}`);
    }
  }
  let pokemons = []

//   let pokemons = [
//     {
//       name: "Gennija",
//       type: "water",
//       id: 1
//     },
//     {
//       name: "Sandslash",
//       type: "ground",
//       id: 2
//     },
//     {
//       name: "Raichu",
//       type: "electirc",
//       id: 3
//     }
//   ];


// getObject("pikagu", "tunder");
// getObject("Pokédex ", "bug");


function CreatePokemon(){

     pokemons = [
        {
          name: "Gennija",
          type: "water",
          id: 1
        },
        {
          name: "Sandslash",
          type: "ground",
          id: 2
        },
        {
          name: "Raichu",
          type: "electirc",
          id: 3
        }
      ];
    getObject("pikagu", "tunder");
    getObject("Pokédex ", "bug");

    return pokemons
}

function SavePokemon (name,type){
    let p = getObject(name, type)
    
    pokemons.push(p)
    console.log(pokemons)
    return true

}
function generateID(id) {
  let newID = id + 1;
  return newID;
}

function getObject(name, type) {
  let tmp = new Pokemon(name, type);
  tmp.id = generateID(pokemons.length);
  return tmp;
}

function update(id){
   let p =  pokemons[id - 1] 
   return p
}

function Pokemontype2(p,req,id){
    p.type2 = req
    pokemons[id - 1] = p

    return true 
}

function getpokemonbyID(id) {
    return pokemons[id - 1] !== undefined && pokemons[id - 1] !== null;
    let p = pokemons[id - 1];
    if (p === undefined) {
      res
        .status(400)
        .send({ error: "Cannot update pokemon:Pokemon is not found" });
      return;
    }
  }

function deletePokemon (){


}

  module.exports.CreatePokemon = CreatePokemon
  module.exports.getpokemonbyID = getpokemonbyID
  module.exports.SavePokemon = SavePokemon
  module.exports.update = update
  module.exports.Pokemontype2 = Pokemontype2
