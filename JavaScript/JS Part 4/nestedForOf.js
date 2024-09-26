let heroes = [
  ["ironman", "thor", "spiderman"],
  ["Superman", "batman", "flash"],
];

for(list of heroes){
        console.log(list);
}

console.log("Indivisual ->");

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
