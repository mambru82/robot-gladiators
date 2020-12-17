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
            break
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    } 
    
};
// executes the function
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}