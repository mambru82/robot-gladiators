//Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// declares the variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);

//creates the function
var fight = function(enemyName) {
    //repeat an execute as long as the enemy-robot is alive AND the player is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            //if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
         //Subtract the value of 'playerAttack' from the value of `enemyHealth 
            enemyHealth = enemyHealth - playerAttack;
            //Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName  + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            //check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        //Subtract the value of `enemyAttack` from the value of `playerHealth`
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    } 
    
};

// executes the function
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            debugger;
            fight(pickedEnemyName);
            //if not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                shop();
            }
        }  
        }
    endGame();
};
// function to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
};
// shop function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? (please enter REFILL, UPGRADE, or LEAVE)"
    );
    
    var shopOptionPrompt = shopOptionPrompt.toLowerCase();
    console.log(shopOptionPrompt);
    //switch to check the option
    switch (shopOptionPrompt) {
        case "refill":
            if (playerMoney >= 7)
            {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
            if (playerMoney >= 7)
            {
            window.alert("Upgrading player's attac by 6 for 7 dollars.");

            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
            window.alert("Leaving the store");

            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }
};
//start the game when the page loads
startGame();