// Create game objects
const game = {
    wood: 0,
    marshmallows: 3,
    fire: false,
    tent: false,
  };
  
  // Display game instructions and commands
  function help() {
    console.log("Game Instructions:");
    console.log("Commands:");
    console.log("help - Outputs the game instructions and possible commands.");
    console.log("pitch - Allows the player to pitch the tent.");
    console.log("search - Allows the player to search for wood.");
    console.log("tend - Allows the player to start or stop the fire.");
    console.log("roast - Allows the player to roasts the marshmallows.");
    console.log("sleep - Allows the player to sleep and end the game.");
  }
  
  // Pitch the tent
  function pitch() {
    if (!game.tent) {
      game.tent = true;
      return "You pitched the tent.";
    } else {
      return "The tent is already pitched.";
    }
  }
  
  // Search for wood
  function search() {
    if (!game.fire) {
      game.wood++;
      return "You found a piece of wood.";
    } else {
      return "You cannot search for wood when a fire already started.";
    }
  }
  
  // Tends to the fire by either starting or stopping the fire
  function tend() {
    if (game.fire) {
      game.fire = false;
      return "You put out the fire.";
    } else if (game.wood > 0) {
      game.fire = true;
      game.wood--;
      return "You started a fire.";
    } else {
      return "You need wood to start a fire.";
    }
  }
  
  // Roast the marshmallows
  function roast() {
    if (game.fire && game.marshmallows > 0) {
      game.marshmallows--;
      return "You roasted a marshmallow.";
    } else if (!game.fire) {
      return "You need to start a fire first.";
    } else {
      return "You don't have marshmallow to roast.";
    }
  }
  
  // Player goes to sleep and end the game
  function sleep() {
    if (game.tent && !game.fire) {
      console.log("You went to sleep.");
      // Reset the game properties
      game.wood = 0;
      game.marshmallows = 3;
      game.fire = false;
      game.tent = false;
    } else {
      console.log("You need to put out the fire.");
    }
  }
  
  // Display game instructions at the start
  help();
  