
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
  var counter = 0;
  var squatcounter = false;
  $("form").submit(function(event) {
    var userInput = $("#input").val().toLowerCase();
    $("form")[0].reset();

    counter += 1;

    if(counter > 3)
    {
      $("#output").empty();
      counter = 0;
    }

    var start = new Area("menu",["enter"])
    var entrance = new Area("entrance",["enter","look"])
    var mortus = new Area("mortus",["talk","look","attack"])
    var mortus2 = new Area("mortus2",["yes", "no", "party"])
    var mortus3 = new Area("mortus3",["follow"])
    var gym = new Area("gym",["look", "talk mortus"," walk cafeteria", "walk barracks", "squat"])

    if(currentlocation === "menu")
    {
      if(userInput === "enter")
      {
        userInput = "";
        currentlocation = entrance.location1;
        $("#output").append("<br>" + "You're at the entrance to the Arena Barracks. (Type list to look at all possible actions)" + "<br>");
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
      else if(userInput === "")
      {

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
        userInput = "";
        currentlocation = mortus.location1;
        $("#output").append("<br>" + "You see a chill looking dude in a robe." + "<br>");
      }
      else if(userInput === "look")
      {
        $("#output").append("<br>" + "The arena is a grand marble structure. There are a bunch of Miller lite cans littered on the ground." + "<br>");
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
      else if(userInput === "")
      {

      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }

    if(currentlocation === mortus.location1)
    {
      if(userInput === "talk")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Hey, is this the BroArena?"+ "<br>");
          $("#output").append("<br>" + "Strange Dude: Yeah man, this is it! You come to fight?"+ "<br>");
        currentlocation = mortus2.location1;
      }
      else if(userInput === "attack")
      {
        $("#output").append("<br>" + "You swing a fist at the stranger, but he dodges and pulls out a knife. In a quick attack, he stabs you through the heart." + "<br>");

        $("#output").append("<br>" + "You die horribly in a pool of your own blood. Whoops." + "<br>");

        $("#output").append("<br>" + "Type Enter to reset game." + "<br>");

        currentlocation = "menu";
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>");
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < mortus.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus.commands[i]);
        }
      }
      else if(userInput === "")
      {

      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }

    if(currentlocation === mortus2.location1)
    {
      if(userInput === "yes")
      {
        userInput = "";
        currentlocation = mortus3.location1;

        $("#output").append("<br>" + "Me: Of course I came to fight."+ "<br>");

        $("#output").append("<br>" + "Mortus: Awesome. I'm pumped to throw it down. The name is Mortus. I'm a turtle summoner."+ "<br>");

        $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");

        $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");
      }
      else if(userInput === "party")
      {
        userInput = "";
        currentlocation = mortus3.location1;
        $("#output").append("<br>" + "I just came to party." + "<br>");

        $("#output").append("<br>" + "Strange Figure: Haha, nice. Me too bro. Every fight is a party! The name is Mortus. I'm a turtle summoner." + "<br>");

          $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");

          $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");

      }
      else if(userInput === "no")
      {
        userInput = "";
        currentlocation = mortus3.location1;
        $("#output").append("<br>" + "Me: What? Fight? I'm a lover, not a fighter."+ "<br>");

        $("#output").append("<br>" + "Strange Figure: Seriously?"+ "<br>");

        $("#output").append("<br>" + "Me: But I'm also a fighter, so don't get any bright ideas."+ "<br>");

        $("#output").append("<br>" + "Strange Figure: Haha. Pretty funny, kid. My name is Mortus. I'm a turtle summoner." + "<br>");

        $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");

        $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>");
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < mortus2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus2.commands[i]);
        }
      }
      else if(userInput === "")
      {

      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }

    if(currentlocation === mortus3.location1)
    {
      if(userInput === "follow")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#output").append("<br>" + "You follow Mortus. He leads you to the Gym." + "<br>");
        $("#output").append("<br>" + "Mortus: Every bro needs a good gym. Here, you can hang out and lift." + "<br>");
        $("#output").append("<br>" + "Me: Sweet! I'm always looking for a killer leg day." + "<br>");
        $("#output").append("<br>" + "Mortus: Yeah man, it's pretty cool. I'm going to hang out here, you should also check out the Cafeteria and the Barracks. From the Barraks, you can enter your first fight!" + "<br>");
        $("#output").append("<br>" + "Me: For sure! I will become King Bro!" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < mortus3.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus3.commands[i]);
        }
      }
      else if(userInput === "")
      {

      }
      else
      {
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }

    if(currentlocation === gym.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "There are a ton of weights, and some big guys lifting. Mortus is chilling next to a water fountain. A squat rack stands out to me. Might have to hit that." + "<br>");

      }
      if(userInput === "squat")
      {
        userInput = "";
        $("#output").append("<br>" + "You rack up 265 pounds on the rack. Mortus spots you and you rep out three sets of ten." + "<br>");
        $("#output").append("<br>" + "Your quads are burning, but you just gained one strength point!" + "<br>");

      }
      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < gym.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym.commands[i]);
        }
      }
      else if(userInput === "")
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
