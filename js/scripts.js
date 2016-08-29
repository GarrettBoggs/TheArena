
var currentlocation = "menu";

function Area(location1, commands)
{
  this.location1 = location1;
  this.commands = commands;
}

//Backend
function Game(){
  this.potion = 100;
  this.turn = 0;
  this.players = [];
}

function Player(name,type){
  this.playerName = name;
  this.hp=0;
  this.maxHP=0;
  this.attack=0;
  this.playerType = type;
}

Game.prototype.addHealth = function (){
  this.players[0].hp += theGame.potion
}

Game.prototype.attack = function(opponent){
  this.players[0].hp -= this.players[opponent].attack;
  this.players[opponent].hp -= this.players[0].attack;

}

Player.prototype.settingPlayer = function(){
  if(this.playerType ==='player'){
    this.hp=100;
    this.maxHP=200;
    this.attack=10;
  }else if(this.playerType === 'easy'){
    this.hp = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
    this.hp = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
    this.attack = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }else if(this.playerType === 'medium'){
    this.hp = Math.floor(Math.random() * (120 - 75 + 1)) + 75;
    this.maxHP = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
    this.attack = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  }else {
    this.hp = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    this.maxHP = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
    this.attack = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  }
}


var theGame = new Game();

var myPlayer = new Player("Andrew","player"); //100,200,10

var myEnemy = new Player("Enemy1","easy"); // 50 50 5
var myEnemy2 = new Player("Enemy2","medium");
var myEnemy3 = new Player("Enemy3","hard");
myPlayer.settingPlayer();
myEnemy.settingPlayer();
myEnemy2.settingPlayer();
myEnemy3.settingPlayer();

console.log(myPlayer);
console.log(myEnemy);
console.log(myEnemy2);
console.log(myEnemy3);

theGame.players.push(myPlayer);
theGame.players.push(myEnemy);
theGame.players.push(myEnemy2);
theGame.players.push(myEnemy3);
theGame.attack(theGame.turn + 1);
theGame.attack(theGame.turn + 2);
theGame.attack(theGame.turn + 3);




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
