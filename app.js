const express = require("express")
const Request = require('request')
const pokemonsRouter = require('./pokemons/router')
const app = express()
// const port = 3000


app.use(express.json());
app.use(pokemonsRouter)

app.get("/", (req, res) => res.send({ message: "Hello world" }));

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

// function checkError(v) {
//   return v !== null && v !== undefined && v !== "";
// }
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

// // app.get("/pokemon", (req, res) => res.send(pokemons));

// app.get("/pokemon/:id", (req, res) => {
//   if (!checkError(req.params.id)) {
//     res
//       .status(400)
//       .send({ error: "Insuffucuent paramiters : id is required parameter " });
//     return;
//   }
//   let id = req.params.id;
//   let p = pokemons[id - 1];

//   if (p === undefined || p === null) {
//     res.status(400).send({ error: "The pokemon could not be found" });
//     return;
//   }
//   res.send(p);
// });

// app.post("/pokemon", (req, res) => {
//   console.log(req.body);
//   if (!checkError(req.body.name) || !checkError(req.body.type)) {
//     res.status(400).send({
//       error: "Insuffucuent paramiters : name and type are required parameter"
//     });
//     return;
//   }

//   let tmp = getObject(req.body.name, req.body.type);
//   pokemons.push(tmp);
//   console.log(tmp);
//   //res.send('Still work in progreen...')
//   res.sendStatus(201);
// });

// app.put("/pokemon/:id", (req, res) => {
//   if (!checkError(req.body.type2)) {
//     res
//       .status(400)
//       .send({ error: "Insuffucuent paramiters : type2 is required parameter" });
//     return;
//   }

//   if (!checkError(req.params.id)) {
//     res
//       .status(400)
//       .send({ error: "Insuffucuent paramiters:id is required parameter" });
//     return;
//   }
//   let id = req.params.id;
//   let p = pokemons[id - 1];
//   if (p === undefined) {
//     res
//       .status(400)
//       .send({ error: "Cannot update pokemon:Pokemon is not found" });
//     return;
//   }

//   p.type2 = req.body.type2;
//   pokemons[id - 1] = p;
//   res.sendStatus(200);
// });

// app.delete("/pokemon/:id", (req, res) => {
//   let id = req.params.id;
//   if (!checkError(req.params.id)) {
//     res
//       .status(400)
//       .send({ error: "Insuffucuent paramiters:type2 is required parameter" });
//     return;
//   }

//   let p = pokemons[id - 1];
//   if (p === undefined) {
//     res
//       .status(400)
//       .send({ error: "Cannot update pokemon:Pokemon is not found" });
//     return;
//   }
//   delete pokemons[id - 1];
//   res.sendStatus(204);
// });

module.exports = app;

// app.listen(port, () => console.log(`Pokemon API listening on port ${port}!`))
