var currentlocation = "menu";

function Area(location1, commands)
{
  this.location1 = location1;
  this.commands = commands;
}

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
