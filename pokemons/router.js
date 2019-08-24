const express = require('express')
const router = express.Router()
const pokemon = require('./pokemon')

// class Pokemon {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   echo() {
//     console.log(`Type of ${this.name} is ${this.type}`);
//   }
// }

// let pokemons = [
//   {
//     name: "Gennija",
//     type: "water",
//     id: 1
//   },
//   {
//     name: "Sandslash",
//     type: "ground",
//     id: 2
//   },
//   {
//     name: "Raichu",
//     type: "electirc",
//     id: 3
//   }
// ];
// getObject("pikagu", "tunder");
// getObject("Pokédex ", "bug");

// function generateID(id) {
//   let newID = id + 1;
//   return newID;
// }

// function getObject(name, type) {
//   let tmp = new Pokemon(name, type);
//   tmp.id = generateID(pokemons.length);
//   return tmp;
// }

function checkError(v) {
  return v !== null && v !== undefined && v !== "";
}

// function getpokemonbyID(id) {
//   return pokemons[id - 1] !== undefined && pokemons[id - 1] !== null;
//   let p = pokemons[id - 1];
//   if (p === undefined) {
//     res
//       .status(400)
//       .send({ error: "Cannot update pokemon:Pokemon is not found" });
//     return;
//   }
// }

router.get("/pokemons", (req, res) =>res.send(pokemon.CreatePokemon()));

router.post("/pokemons", (req, res) => {
 
  if (!checkError(req.body.name) || !checkError(req.body.type)) {
    res.status(400).send({
      error: "Insuffucuent paramiters : name and type are required parameter"
    });
    return;
  }

  let success = pokemon.SavePokemon(req.body.name, req.body.type);
  
  if (!success){
      res.status(400).send({ error: 'Create pokemon is unsuccessfully: invalid parameter'})
  }
  res.sendStatus(201)

});

router.get("/pokemon/:id", (req, res) => {
  if (!checkError(req.params.id)) {
    res
      .status(400)
      .send({ error: "Insuffucuent paramiters : id is required parameter " });
    return;
  }
  let id = req.params.id;
  let p = pokemon.update(id)
  // let p = pokemon[id - 1];
  
  if (p === undefined || p === null) {
    res.status(400).send({ error: "The pokemon could not be found" });
    return;
  }
  res.send(p);
});

router.put("/pokemon/:id", (req, res) => {
  if (!checkError(req.body.type2)) {
    res
      .status(400)
      .send({ error: "Insuffucuent paramiters : type2 is required parameter" });
    return;
  }

  if (!checkError(req.params.id)) {
    res
      .status(400)
      .send({ error: "Insuffucuent paramiters:id is required parameter" });
    return;
  }
  let id = req.params.id;
  let p = pokemon.update(id)
  if (p === undefined) {
    res
      .status(400)
      .send({ error: "Cannot update pokemon:Pokemon is not found" });
    return;
  }
  let success = pokemon.Pokemontype2(p,req.body.type2,id)

  if (!success){
    res.status(500).send({ error: 'Pokemon Not uddate unseccufully '})
  } 

  res.sendStatus(200);
});

router.delete("/pokemon/:id", (req, res) => {
  let id = req.params.id;
  if (!checkError(req.params.id)) {
    res
      .status(400)
      .send({ error: "Insuffucuent paramiters:type2 is required parameter" });
    return;
  }

  let p = pokemons[id - 1];
  if (p === undefined) {
    res
      .status(400)
      .send({ error: "Cannot update pokemon:Pokemon is not found" });
    return;
  }

  delete pokemons[id - 1];
  res.sendStatus(204);
});

module.exports = router
