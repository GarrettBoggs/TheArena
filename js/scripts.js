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
  $("form").submit(function(event) {

    event.preventDefault();
  });
});
