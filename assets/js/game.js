//Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// declares the playerInfo object and functions
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6  for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
    };

// enemyInfo object
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14),
    }
];


//creates the function
var fight = function(enemy) {
    //repeat an execute as long as the enemy-robot is alive AND the player is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            //if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
         //Subtract the value of 'playerInfo.attack' from the value of `enemy.Health 
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            //Log a resulting message to the console so we know that it worked.
            console.log(
            playerInfo.name + " attacked " + enemy.name  + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            //check enemy's health
            if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
            } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        //Subtract the value of `enemy.attack` from the value of `playerInfo.health`
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
    } 
    
};

function randomNumber (min, max) {
    var value = Math.floor(Math.random() * (max-min +1) + min);

    return value;
};

// executes the function
var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            console.log("Enemy health is " + pickedEnemyObj.health);
            debugger;
            fight(pickedEnemyObj);
            //if not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                shop();
            }
        }  
        }
    endGame();
};
// function to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "upgrade":
            playerInfo.upgradeAttack();
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