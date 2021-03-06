class Form{
    constructor(){}
    display(){
     var title=createElement("h2");
     title.html("Multi player car racing game");
     title.position(120,20);
     
     var input = createInput("Name");
     var button=createButton("Play");
     var greeting=createElement("h3");

     input.position(150,150);
     button.position(250,200);

     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name=input.value();
         PlayerCount++;
         player.update(name);
         player.updateCount(PlayerCount);
         greeting.html("hello " + name);
         greeting.position(130,150);
        })
    }
}
