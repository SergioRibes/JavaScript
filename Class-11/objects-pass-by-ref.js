let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below

 let greenEnergy = obj => {
    obj["Fuel Type"] = "Avocado Oil";
 }

 let remotelyDisabled = obj => {
    obj.disabled = true;
 }

 greenEnergy(spaceship);
 remotelyDisabled(spaceship);
 console.log(spaceship);




