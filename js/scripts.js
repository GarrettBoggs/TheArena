
var currentlocation = "menu";

function Area(location1, commands)
{
  this.location1 = location1;
  this.commands = commands;
}

//Backend
var names = ["Brotimus", "Skate Bro", "Vape Bro", "Chest Bro", "Squat Bro", "Zombie Bro", "Dragon Bro", "Mortus", "Bro Hobbit Bobby"];
function Game(){
  this.potion = 100;
  this.turn = 0;
  this.players = [];
}

function Player(name, type){
  this.playerName = name;
  this.hp=0;
  this.maxHP=0;
  this.attackMin=0;
  this.attackMax=0;
  this.playerType = type;
}

Game.prototype.addHealth = function (){
  this.players[0].hp += theGame.potion
}

Game.prototype.attack = function(opponent){
  var inflictedDamage = 0;
  console.log("Initial Health: " + this.players[0].hp);
  console.log("Initial Enemy: "+this.players[opponent].hp);
  var currentAttack = 0;
  do{
    currentAttack = (Math.floor(Math.random() * (this.players[0].attackMax - this.players[0].attackMin + 1)) + this.players[0].attackMin);
    console.log("Attack: "+currentAttack);
    inflictedDamage += currentAttack; // may axe
  this.players[opponent].hp -= currentAttack;
  if(this.players[opponent].hp <= 0){
    console.log("got here");
    break;
  }
  this.players[0].hp -= (Math.floor(Math.random() * (this.players[opponent].attackMax - this.players[opponent].attackMin + 1)) + this.players[opponent].attackMin);
  console.log("Your Health: " + this.players[0].hp);
  console.log("Your Enemy: "+this.players[opponent].hp);
  }while(this.players[0].hp > 0 ); //&& this.players[opponent].hp > 0
  if(this.players[0].hp <= 0){
    console.log("Game Over Your enemy had " + this.players[opponent].hp + " HP left");
  }
  else {
      console.log("Success");
      this.players[0].hp += inflictedDamage; // may axe
    }
}

Game.prototype.setUpAllPlayers = function(){
  for (var i = 0; i < names.length; i++) {
    var myPlayer = new Player(names[i],i);
    myPlayer.settingPlayer();
    this.players.push(myPlayer);
  }
}

Player.prototype.settingPlayer = function(){
  if(this.playerType === 0){
    this.hp = 100;
    this.maxHP = 200;
    this.attackMin = 8;
    this.attackMax = 12;
  }else if(this.playerType === 1 || this.playerType ===  2){
    this.hp = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
    this.attackMin = 1;
    this.attackMax = 10;
  }else if(this.playerType === 3 || this.playerType ===  4){
    this.hp = Math.floor(Math.random() * (120 - 75 + 1)) + 75;
    this.attackMin = 5;
    this.attackMax = 15;
  }else if(this.playerType === 5 || this.playerType ===  6){
    this.hp = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    this.attackMin = 10;
    this.attackMax = 30;
  }else if(this.playerType === 7){
    this.hp = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    this.attackMin = 10;
    this.attackMax = 30;
  }else{ // type 8
    this.hp = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    this.attackMin = 10;
    this.attackMax = 30;
  }
}


var theGame = new Game();
theGame.setUpAllPlayers();


theGame.attack(theGame.turn + 3);
// theGame.attack(theGame.turn + 3);
// theGame.attack(theGame.turn + 6);
//
// theGame.attack(theGame.turn + 7);
// theGame.attack(theGame.turn + 8);

console.log(theGame.players);

$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("#input").val();
    $("form")[0].reset();

    var start = new Area("menu",["enter"])
    var entrance = new Area("entrance",["enter","yes","sure!","no"])

    if(currentlocation === "menu")
    {
      if(userInput === "enter")
      {
        userInput = "";
        currentlocation = entrance.location1;
        $("#output").append("<br>" + "You're at the entrance to the Arena Barracks. Go in?" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < start.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(start.commands[i]);
        }
      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }

    if(currentlocation === entrance.location1)
    {
      if(userInput === "enter")
      {
        currentlocation = entrance.location1;
        $("#output").append("<br>" + "You walk into the areana and find a chill looking dude in a robe." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < entrance.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(entrance.commands[i]);
        }
      }
      else if(userInput === "list")
      {

      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    event.preventDefault();
  });
});
