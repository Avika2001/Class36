class Game{
    constructor(){
        
    }
    getState(){
        var locationGame=database.ref("gamestate");
        locationGame.on("value",function(data){
            GameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            GameState:state
        })
    }
    start(){
        if(GameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}