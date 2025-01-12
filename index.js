const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const fotbalisti = [
  {
    name: "Vinicius Junior",
    link: "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/vinicius-paixao-de-oliveira-junior-/assets/POSE_550x650_.png",
  },
  { name: "Rodrygo Silva", link: "" },
  { name: "Jude Bellingham", link: "" },
  { name: "Robert Lewandowski", link: "" },
  { name: "Anssumane Fati", link: "" },
  { name: "Pedro Gonzalez", link: "" },
  { name: "Joshua Kimmich", link: "" },
  { name: "Thomas Muller", link: "" },
  { name: "Leroy Sane", link: "" },
];

const boxeri = [
  { name: "Mike Tyson", link: "" },
  { name: "Muhammad Ali", link: "" },
  { name: "Tyson Fury", link: "" },
  { name: "Anthony Joshua", link: "" },
  { name: "Wladimir Klitschko", link: "" },
  { name: "Manny Pacquiao", link: "" },
  { name: "Saul Canelo", link: "" },
  { name: "Gennady Golovkin", link: "" },
  { name: "Floyd Mayweather", link: "" },
];

const inotatori = [
  { name: "Michael Phelps", link: "" },
  { name: "Ryan Lochte", link: "" },
  { name: "Katinka Hosszu", link: "" },
  { name: "Katie Ledecky", link: "" },
  { name: "Caeleb Dressel", link: "" },
  { name: "Adam Peaty", link: "" },
  { name: "Simone Manuel", link: "" },
  { name: "Kliment Kolesnikov", link: "" },
  { name: "Emma McKeon", link: "" },
  { name: "David Popovici", link: "" },
];

const tenismeni = [
  { name: "Roger Federer", link: "" },
  { name: "Rafael Nadal", link: "" },
  { name: "Novak Djokovic", link: "" },
  { name: "Andy Murray", link: "" },
  { name: "Dominic Thiem", link: "" },
  { name: "Alexander Zverev", link: "" },
  { name: "Stefanos Tsitsipas", link: "" },
  { name: "Daniil Medvedev", link: "" },
  { name: "Carlos Alcaraz", link: "" },
  { name: "Casper Ruud", link: "" },
];

function getLink(array, name) {
  const player = array.find(
    (player) => player.name.toLowerCase() === name.toLowerCase()
  );
  return player ? player.link : "nu exista sportiv";
}

app.get("/proiectpoo/fotbal/:numeJucatorFotbal", (req, res) => {
  const name = req.params.numeJucatorFotbal;
  const link = getLink(fotbalisti, name);
  res.json({ link: link });
});

app.get("/proiectpoo/box/:numeJucatorBox", (req, res) => {
  const name = req.params.numeJucatorBox;
  const link = getLink(boxeri, name);
  res.json({ link: link });
});

app.get("/proiectpoo/inot/:numeJucatorInot", (req, res) => {
  const name = req.params.numeJucatorInot;
  const link = getLink(inotatori, name);
  res.json({ link: link });
});

app.get("/proiectpoo/tenis/:numeJucatorTenis", (req, res) => {
  const name = req.params.numeJucatorTenis;
  const link = getLink(tenismeni, name);
  res.json({ link: link });
});

app.listen(port, () => {
  console.log(`Serverul asteapta request-uri`);
});
