
var currentlocation = "menu";

function Area(location1, commands)
{
  this.location1 = location1;
  this.commands = commands;
}

//Backend
var names = ["Brotimus", "Skate Bro", "Vape Bro", "Chest Bro", "Squat Bro", "Zombie Bro", "Dragon Bro", "Mortus", "Bro Hobbit Bobby"];
function Game(){
  // this.potion = 100;
  this.turn = 0;
  this.players = [];
}

function Player(name, type){
  this.playerName = name;
  this.hp = 0;
  this.currentHP = 0;
  this.attackMin = 0;
  this.attackMax = 0;
  this.playerType = type;
}

// Game.prototype.addHealth = function (){
//   this.players[0].currentHP += theGame.potion
// }

Game.prototype.attack = function(opponent){
  this.players[opponent].currentHP -= (Math.floor(Math.random() * (this.players[0].attackMax - this.players[0].attackMin + 1)) + this.players[0].attackMin);
  this.players[0].currentHP -= (Math.floor(Math.random() * (this.players[opponent].attackMax - this.players[opponent].attackMin + 1)) + this.players[opponent].attackMin);
}

Game.prototype.setUpAllPlayers = function(){
  for (var i = 0; i < names.length; i++) {
    var myPlayer = new Player(names[i],i);
    myPlayer.settingPlayer();
    this.players.push(myPlayer);
  }
}
Player.prototype.addStrengthPoint = function(){
  this.attackMin++;
  this.attackMax++;
}
Player.prototype.settingPlayer = function(){
  if(this.playerType === 0){
    this.hp = 100;

    this.currentHP = 100;
    this.attackMin = 8;
    this.attackMax = 12;
  }else if(this.playerType === 1 || this.playerType ===  2){
    this.hp = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
    this.currentHP = this.hp;
    this.attackMin = 3;
    this.attackMax = 7;
  }else if(this.playerType === 3 || this.playerType ===  4){
    this.hp = Math.floor(Math.random() * (65 - 51 + 1)) + 51;
    this.currentHP = this.hp;
    this.attackMin = 4;
    this.attackMax = 9;
  }else if(this.playerType === 5 || this.playerType ===  6){
    this.hp = Math.floor(Math.random() * (80 - 66 + 1)) + 66;
    this.currentHP = this.hp;
    this.attackMin = 5;
    this.attackMax = 12;
  }else if(this.playerType === 7){
    this.hp = Math.floor(Math.random() * (90 - 81 + 1)) + 81;
    this.currentHP = this.hp;
    this.attackMin = 7;
    this.attackMax = 16;
  }else{ // type 8
    this.hp = Math.floor(Math.random() * (120 - 91 + 1)) + 91;
    this.currentHP = this.hp;
    this.attackMin = 9;
    this.attackMax = 20;
  }
}


var theGame = new Game();
theGame.setUpAllPlayers();

// theGame.attack(1); //attacks skatebro

// console.log(theGame.players); //debugging


console.log(theGame.players);
  currentlocation = "menu";
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

    var start = new Area("menu",["enter"]);
    var entrance = new Area("entrance",["enter","look"]);
    var mortus = new Area("mortus",["talk","look","attack"]);
    var mortus2 = new Area("mortus2",["yes", "no", "party"]);
    var mortus3 = new Area("mortus3",["follow"]);
    var gym = new Area("gym",["look", "talk Mortus"," walk cafeteria", "walk barracks", "squat"]);
    var cafeteria = new Area("cafe",["look","talk VapeBro","punch VapeBro","walk barracks", "walk gym"]);
    var barracks = new Area("barracks",["look","talk ChestBro","enter arena", "walk cafeteria", "walk gym"]);
    var fight1 = new Area("fight1",[]);

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

      else if(userInput === "look")
      {
        $("#output").append("<br>" + "Like I said, he's just a chill dude in a robe. Probably a magaician of some sort." + "<br>");
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

    if(currentlocation === gym.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "There are a ton of weights, and some big guys lifting. Mortus is chilling next to a water fountain. A squat rack stands out to me. Might have to hit that." + "<br>");

      }
      else if(userInput === "squat")
      {
        userInput = "";
        if(squatcounter == false)
        {
          $("#output").append("<br>" + "You rack up 265 pounds on the rack. Mortus spots you and you rep out three sets of ten." + "<br>");
          $("#output").append("<br>" + "Your quads are burning, but you just gained one strength point!" + "<br>");
          squatcounter = true;
        }
        else
        {
          $("#output").append("<br>" + "Your legs are too tired to squat again... Bummer..." + "<br>");
        }
      }
      else if(userInput === "talk mortus")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Sah dude" + "<br>");
        $("#output").append("<br>" + "Mortus: Ha asah dude" + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria.location1;
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
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

    if(currentlocation === cafeteria.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "It's a standard grungy cafeteria. Food looks pretty gross, a bunch of empty protein shakers are scattered on nearby tables. There is a VapeBro in the corner, smoking his vape. He looks somewhat hostile." + "<br>");

      }
      else if(userInput === "talk vapebro")
      {
          $("#output").append("<br>" + "Me: Sup." + "<br>");
          $("#output").append("<br>" + "VapeBro: Off my grill. I'm trying to vape, bro." + "<br>");
          $("#output").append("<br>" + "Me: Sheesh. Chill out." + "<br>");
          $("#output").append("<br>" + "VapeBro: Get outta here." + "<br>");
      }

      else if(userInput === "punch vapebro")
      {
          $("#output").append("<br>" + "Me: You try to punch VapeBro in the nose." + "<br>");
          $("#output").append("<br>" + "VapeBro blocks your punch with his vape. He blows vape on you." + "<br>");
          $("#output").append("<br>" + "His Vape lowers your health by five points. Ouch!" + "<br>");
      }

      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }

      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }

      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < cafeteria.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria.commands[i]);
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

    if(currentlocation === barracks.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "I'm in a military style bed room. ChestBro is knocking out some pushups. I can see where I could enter into the Arena." + "<br>");
      }
      else if(userInput === "talk chestbro")
      {
          $("#output").append("<br>" + "Me: Yo, what's up?" + "<br>");
          $("#output").append("<br>" + "ChestBro: Need more gains." + "<br>");
          $("#output").append("<br>" + "Me: I feel you." + "<br>");
      }

      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }

      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria.location1;
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }

      else if(userInput === "enter arena")
      {
        userInput = "";
        currentlocation = fight1.location1;
        $("#output").append("<br>" + "You enter the arena." + "<br>");

        $("#output").append("<br>" + "The wind is crisp. You're a bit nervous, but this is your destiny. You must become King Bro." + "<br>");

        $("#output").append("<br>" + "Do you want to fight SkateBro, or VapeBro?" + "<br>");
      }


      else if(userInput === "list")
      {
        $("#output").append("Your possible commands are as follows:");
        for(var i = 0; i < barracks.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks.commands[i]);
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

    if(currentlocation === fight1.location1)
    {
      if(userInput === "skatebro")
      {
        userInput = "";
        $("#output").append("<br>" + "You just chose to fight SkateBro." + "<br>");
      }
      else if(userInput === "vapebro")
      {
        userInput = "";
        $("#output").append("<br>" + "You just chose to fight VapeBro." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your commands are obviously either SkateBro or VapeBro. Seriously.");
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
