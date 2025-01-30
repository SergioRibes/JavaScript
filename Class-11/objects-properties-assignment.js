let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  

spaceship.color = "glorious gold"
spaceship.numEngines = Math.floor(Math.random()* 10 + 1);

console.log(spaceship.numEngines);

delete spaceship["Secret Mission"];
console.log(spaceship);



