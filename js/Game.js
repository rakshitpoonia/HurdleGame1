class Game{
  constructor(){

  }

  getState(){
      var gameStateRef = database.ref("gameState")
      gameStateRef.on("value", (data)=>{
          gameState = data.val()
      })
  }


  update(state){
      database.ref('/').update({
          gameState : state
      })
  }

  start(){
      if(gameState===0){
          player = new Player()
          player.getCount()
          form = new Form()
          form.display()
      }

      p1 = createSprite(100,100)
      p2 = createSprite(100,300)
      p3 = createSprite(100,500)
      p4 = createSprite(100,700)
      ps = [p1,p2,p3,p4]
  }

  play(){
  form.hide()

  Player.getPlayerInfo()

  if(allPlayers!== undefined){
      var index = 0;
      var x ;
      var y = 100;

      for (var plr in allPlayers){
          index = index+1;
          y = y+200;
          x = displayWidth - allPlayers[plr].distance

          if(index === player.index){
              ps[index -1].position.x = x
              ps[index-1].position.y  = y
              //camera.position.x = ps[index - 1].y
             // camera.position.y = displayWidth/2

          }

      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance = player.distance +10;
          player.update()
      }
      
      
  }
drawSprites();

  }

}