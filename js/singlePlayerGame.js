class SPGame{
  constructor(){
    this.score= 0
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = 0;
  }

  startSP(){
    playerCharSP = createSprite(windowWidth/2,windowHeight-windowHeight/4-75,75,75)
    playerCharSP.addImage(img_data[0].selected,"player")
    playerCharSP.scale = 0.35
    platformGroup = new Group();        
  }

  addPlatforms(arr,so,rand,tCanGo){

    if(arr[0].t_will_c==which_l_play){
      if(obs_dif_data[0].dif_l!=4&&arr[0].t_will_c+1<=11){
        console.log("opopo")
        arr[0].t_will_c +=1 
      }else if(obs_dif_data[0].dif_l==4){
        console.log("opopo")
        arr[0].t_will_c +=1 
      }
    }

    if(arr[0].l_tn>arr[0].t_will_c){
      tCanGo = false
    }

    if(tCanGo==true&&obs_dif_data[0].dif_l != 0){

      if(so == rand){
        console.log("same no...");
      }else{
        switch(rand){
        case 1:console.log("Type 1"),so = 1;
        break;
    
        case 2:console.log("Type 2"),so = 2;
        break;
    
        case 3:console.log("Type 3"),so = 3;
        break;
    
        case 4:console.log("Type 4"),so = 4;
        break;
    
        default: break;
      }
      so=rand
      s=so
      this.creating_multi(arr,so);
      }
    }

  }


  creating_multi(array,val){

    var x,y
    var highestY_tn = 0

    if(array[0].l_tn==0){
      highestY_tn = windowHeight-windowHeight/4-195
    }else if(array[0].l_tn!=0){
      highestY_tn = (windowHeight-windowHeight/4-195)-(array[0].l_tn*250)
    }

    if(array[0].l_tn==0){
      base = createSprite(windowWidth/2,windowHeight-windowHeight/4+55,windowWidth,30)
      platformGroup.add(base)
      base.setCollider("rectangle",0,50,base.width,base.height+100)
    }

    if(val == 1){ //creation of 3 blocks

    console.log("3 blocks platform")
    array.splice(array.length,0,{level: array[0].l_tn+1,type: 1,s1:null,s2:null,s3:null})
    array[0].l_tn +=1

    for(var i=1; i<4 ; i++){

      if(i==1){

        x=windowWidth/2-380
        y=highestY_tn;

        array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s1 = createSprite(x,y,215,27)
        array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s1)
        console.log("block: 1",x,y)
            
      }else if(i==2){

        x=windowWidth/2
        y=highestY_tn;

        array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s2 = createSprite(x,y,215,27)
        array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s2)
        console.log("block: 2",x,y)

      }else if(i==3){

        x=windowWidth/2+380
        y=highestY_tn;

        array[array.length-1].s3 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s3 = createSprite(x,y,215,27)
        array[array.length-1].s3.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s3)
        console.log("block: 3",x,y)

            
      }
    }
        
      
    array[0].p_tn +=3

    }else if((val == 2||val == 3||val == 4)){//creation of 2 blocks

      console.log("2 blocks platform")
      array.splice(array.length,0,{level: array[0].l_tn+1,type: val,s1:null,s2:null})
      array[0].l_tn +=1


      for(var i=1; i<3 ; i++){

        if(i==1){

          if(val == 2){
            x=windowWidth/2-190
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }else if( val == 3){
            x=windowWidth/2-380
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }else if(val == 4){
            x=windowWidth/2
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }
              
        }else if(i==2){
          
          if(val == 2){
            x=windowWidth/2+190
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }else if( val == 3){
            x=windowWidth/2
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }else if(val == 4){
            x=windowWidth/2+380
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }
        }
      }
        
      array[0].p_tn +=2

    }else{
      console.log("Error occured !!!")
    }
  }
    
  addObstacles(array_platforms,array_obs_d,current_level,last_platform,bird_img,rock_img,bird_img2,rock_img2){
    if(current_level<array_platforms.length-1){ 
      if(array_obs_d[0].dif_l<=2&&array_obs_d[0].dif_l>=1){//pre-indication ** ** ** levels
        if(current_level==last_platform){//pre-indication ** ** **
          if(array_obs_d[0].dif_l==1){//easy level

            if(array_obs_d[0].c_obs_name !="obs"+current_level){
              array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
              array_obs_d[0].c_obs_name = "obs"+current_level; 
            }

            for(k=1;(k<ar_obs.length&&ar_obs[0].scanned!=true);k++){
              if(ar_obs[k]=="rock"){
                times_r_occur=times_r_occur+1
                console.log("rock detected")
                ar_obs[0].scanned = true
              }
              if(times_r_occur==2){
                console.log("k value: "+k)
                for(t=k;t>0;t--){
                  if(ar_obs[t]=="rock"&&obs_group[t-1]!=undefined){
                    obs_group[t-1].remove()
                    ar_obs.splice(t,1)
                    console.log("a rock")
                    ar_obs[0].scanned = false
                    times_r_occur=0
                  }
                }
              }
            }

            for(var to=0;to<obs_group.length;to++){
              if(obs_group[to].velocity.x==4&&obs_group[to].position.x>windowWidth+90){
                obs_group[to].remove()
                ar_obs.splice(to+1,1)
                console.log("removed")
                ar_obs[0].bird_there=false
              }
              if(obs_group[to]!=undefined&&obs_group[to].velocity.x==-4&&obs_group[to].position.x<-90){
                obs_group[to].remove()
                ar_obs.splice(to+1,1)
                console.log("removed")
                ar_obs[0].bird_there=false
              }
            }
            
            var r = Math.round(random(1,3))
            if(array_platforms[current_level+1].type!=1){
              if(r==3){
                r=2
              }
            }
            
            var pos_obs_x;
            var pos_obs_y;
            if(r==1){
              pos_obs_x = array_platforms[current_level+1].s1.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s1.position.y;
            }else if(r==2){
              pos_obs_x = array_platforms[current_level+1].s2.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s2.position.y;
            }else if(r==3){
              pos_obs_x = array_platforms[current_level+1].s3.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s3.position.y;
            }

            var obstacle_img

            if(lastPlatformCollided<=5){
              switch(Math.round(random(1,2))){

                case 1:obstacle_img = rock_img;
                break;

                case 2:obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }else if(lastPlatformCollided>5){
              switch(Math.round(random(1,8))){

                case 1: obstacle_img = bird_img2;
                break;

                case 2: obstacle_img = bird_img;
                break;

                case 3: obstacle_img = rock_img;
                break;

                case 4: obstacle_img = rock_img2;
                break;

                case 5: obstacle_img = rock_img;
                break;

                case 6: obstacle_img = rock_img2;
                break;

                case 7: obstacle_img = rock_img;
                break;

                case 5: obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }

            if(ar_obs[0].bird_there==true){
              obstacle_img = rock_img2
            }

            if(lastPlatformCollided>5){
              if(obstacle_img == bird_img2){
                pos_obs_x=windowWidth
              }else if(obstacle_img == bird_img){
                pos_obs_x = 0
              }else if(obstacle_img == rock_img){

              }else{

              }
            }
            
            if(array_obs_d[array_obs_d.length-1].made == false){
              array_obs_d[array_obs_d.length-1].platform = r;
              array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y-obstacle_img.height/2-12.5)
              array_obs_d[array_obs_d.length-1].obs.addImage(obstacle_img)
              array_obs_d[array_obs_d.length-1].obs.scale = 1
              array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
              array_obs_d[array_obs_d.length-1].platform = r;
              obs_group.add(array_obs_d[array_obs_d.length-1].obs)
              array_obs_d[array_obs_d.length-1].made = true;
              ar_obs[0].scanned = false

              if(obstacle_img == bird_img2){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = -4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here1")
              }else if(obstacle_img == bird_img){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here2")
              }else if(obstacle_img == rock_img){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here3")
              }else{
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here4")
              }

              if(obstacle_img==bird_img||obstacle_img==bird_img2){
                ar_obs[0].bird_there = true
              }  

            }

            if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
              playerCharSP.collide(obs_group); 
              if(playerCharSP.overlap(obs_group)){
                this.gameOver();      
                lose_sound.play()  
              }
            }
          }else if(array_obs_d[0].dif_l==2){//normal level
            
            if(array_obs_d[0].c_obs_name !="obs"+current_level){
              array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
              array_obs_d[0].c_obs_name = "obs"+current_level;
            }

            for(k=1;(k<ar_obs.length&&ar_obs[0].scanned!=true);k++){
              if(ar_obs[k]=="rock"){
                times_r_occur=times_r_occur+1
                console.log("rock detected")
                ar_obs[0].scanned = true
              }
              if(times_r_occur==3){
                console.log("k value: "+k)
                for(t=k;t>0;t--){
                  if(ar_obs[t]=="rock"&&obs_group[t-1]!=undefined){
                    obs_group[t-1].remove()
                    ar_obs.splice(t,1)
                    console.log("rock removed")
                    ar_obs[0].scanned = false
                    times_r_occur=1
                  }
                }
              }
            }

            for(var to=0;to<obs_group.length;to++){
              if(obs_group[to].velocity.x==4&&obs_group[to].position.x>windowWidth+90){
                obs_group[to].remove()
                ar_obs.splice(to+1,1)
                console.log("removed")
                ar_obs[0].bird_there=false
                times_r_occur=1;
              }
              if(obs_group[to]!=undefined&&obs_group[to].velocity.x==-4&&obs_group[to].position.x<-90){
                obs_group[to].remove()
                ar_obs.splice(to+1,1)
                console.log("removed")
                ar_obs[0].bird_there=false
                times_r_occur=1;
              }
            }

            /*if(obs_group.length>2){
              obs_group[0].remove()
            }*/
            
            var r = Math.round(random(1,3))
            if(array_platforms[current_level+1].type!=1){
              if(r==3){
                r=2
              }
            }
            
            var pos_obs_x;
            var pos_obs_y;
            var random_x_pos = Math.round(random(-57.5,57.5))

            if(random_x_pos>0){
              random_x_pos = Math.round(random(57.5,0))
            }else{
              random_x_pos = Math.round(random(-57.5,0))
            }

            if(r==1){
              pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s1.position.y;
            }else if(r==2){
              pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s2.position.y;
            }else if(r==3){
              pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s3.position.y;
            }

            var obstacle_img

            if(lastPlatformCollided<=5){
              switch(Math.round(random(1,2))){

                case 1:obstacle_img = rock_img;
                break;

                case 2:obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }else if(lastPlatformCollided>5){
              switch(Math.round(random(1,8))){

                case 1: obstacle_img = bird_img2;
                break;

                case 2: obstacle_img = bird_img;
                break;

                case 3: obstacle_img = rock_img;
                break;

                case 4: obstacle_img = rock_img2;
                break;

                case 5: obstacle_img = rock_img;
                break;

                case 6: obstacle_img = rock_img2;
                break;

                case 7: obstacle_img = rock_img;
                break;

                case 5: obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }

            if(ar_obs[0].bird_there==true){
              obstacle_img = rock_img2
            }

            if(lastPlatformCollided>5){
              if(obstacle_img == bird_img2){
                pos_obs_x=windowWidth
              }else if(obstacle_img == bird_img){
                pos_obs_x = 0
              }else if(obstacle_img == rock_img){

              }else{

              }
            }

            if(array_obs_d[array_obs_d.length-1].made == false){
              array_obs_d[array_obs_d.length-1].platform = r;
              array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y-obstacle_img.height/2-12.5)
              array_obs_d[array_obs_d.length-1].obs.addImage(obstacle_img)
              array_obs_d[array_obs_d.length-1].obs.scale = 1
              array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
              array_obs_d[array_obs_d.length-1].platform = r;
              obs_group.add(array_obs_d[array_obs_d.length-1].obs)
              array_obs_d[array_obs_d.length-1].made = true;
              ar_obs[0].scanned = false;

              if(obstacle_img == bird_img2){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = -4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here1")
              }else if(obstacle_img == bird_img){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here2")
              }else if(obstacle_img == rock_img){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here3")
              }else{
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here4")
              }

              if(obstacle_img==bird_img||obstacle_img==bird_img2){
                ar_obs[0].bird_there = true
              }

            }

            if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
              playerCharSP.collide(obs_group[0]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();     
                lose_sound.play()       
              }

            }
            
            if(obs_group.length<=2&&obs_group[1]!=null||obs_group[1]!=undefined){

              playerCharSP.collide(obs_group[1]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();
                lose_sound.play()           
              }

            }
          }
        }
      }else if(array_obs_d[0].dif_l>=3&&array_obs_d[0].dif_l<=4&&current_level==last_platform){//post-indication ** ** ** levels
        if(array_obs_d[0].dif_l==3){

          if(array_obs_d[0].c_obs_name !="obs"+current_level){
            array_obs_d.splice(1,1,{obs: "obs"+current_level,obs_small: "obs_small"+current_level,platform:0,made: false})
            array_obs_d[0].c_obs_name = "obs"+current_level;
          }

          /*if(obs_group.length>2){
            obs_group[0].remove()
          }*/

          for(k=1;(k<ar_obs.length&&ar_obs[0].scanned!=true);k++){
            if(ar_obs[k]=="rock"){
              times_r_occur=times_r_occur+1
              console.log("rock detected")
              ar_obs[0].scanned = true
            }
            if(times_r_occur==3){
              console.log("k value: "+k)
              for(t=k;t>0;t--){
                if(ar_obs[t]=="rock"&&obs_group[t-1]!=undefined){
                  obs_group[t-1].remove()
                  ar_obs.splice(t,1)
                  console.log("rock removed")
                  ar_obs[0].scanned = false
                  times_r_occur=1
                }
              }
            }
          }

          for(var to=0;to<obs_group.length;to++){
            if(obs_group[to].velocity.x==4&&obs_group[to].position.x>windowWidth+90){
              obs_group[to].remove()
              ar_obs.splice(to+1,1)
              console.log("removed")
              ar_obs[0].bird_there=false
              times_r_occur=1;
            }
            if(obs_group[to]!=undefined&&obs_group[to].velocity.x==-4&&obs_group[to].position.x<-90){
              obs_group[to].remove()
              ar_obs.splice(to+1,1)
              console.log("removed")
              ar_obs[0].bird_there=false
              times_r_occur=1;
            }
          }
          
          if(obs_group_small.length>2){
            obs_group_small[0].remove()
          }
          
          var r = Math.round(random(1,3))

          if(array_platforms[current_level+1].type!=1){
            if(r==3){
              r=2; //local
            }
          }

          var pos_obs_x;
          var pos_obs_y;
          var random_x_pos = Math.round(random(-57.5,57.5))
          var pos_obs_x_s;
          var img_small_obs;
          var where_place = Math.round(random(1,4))

          if(exlevelData[current_level+1].type>2&&where_place==4){
            where_place = 3;
          }

          if(exlevelData[current_level+1].type%2 != 0){ //odd platform type: 1 or 3
            if(where_place%2!=0){ //add w_p is odd 1,3
              if(where_place==1){ //w_p is 1
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }else{ //wp is 3
                pos_obs_x_s = exlevelData[current_level+1].s2.position.x+107.5+10;
              }
              img_small_obs = obs_img_r;
            }else{ //subtract w_p is even 2,4
              if(where_place==2){ //w_p is 2
                pos_obs_x_s = exlevelData[current_level+1].s2.position.x-107.5-10;
              }else{ //wp is 4
                pos_obs_x_s = exlevelData[current_level+1].s3.position.x-107.5-10;
              }
              img_small_obs = obs_img_l;
            }
            
          }else{ //even platform type: 2 or 4
            if(where_place%2!=0){ //subtract w_p is odd 1,3
              if(where_place==1){ //w_p is 1
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x-107.5-10;
              }else{ //wp is 3
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x-107.5-10;
              }
              img_small_obs = obs_img_l;
            }else{ //add w_p is even 2,4
              if(where_place==2){ //w_p is 2
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }else{ //wp is 4
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }
              img_small_obs = obs_img_r;
            }
          }

          if(random_x_pos>0){
            random_x_pos = Math.round(random(57.5,0))
          }else{
            random_x_pos = Math.round(random(-57.5,0))
          }

          if(obs_group[1]!=undefined){
            if(Math.round(random(1,0))%2==0){// if it will be 1
              //r = obs_group[1].
            }
          }

          if(r==1){
            pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s1.position.y;
          }else if(r==2){
            pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s2.position.y;
          }else if(r==3){
            pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s3.position.y;
          }

          var obstacle_img

            if(lastPlatformCollided<=5){
              switch(Math.round(random(1,2))){

                case 1:obstacle_img = rock_img;
                break;

                case 2:obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }else if(lastPlatformCollided>5){
              switch(Math.round(random(1,8))){

                case 1: obstacle_img = bird_img2;
                break;

                case 2: obstacle_img = bird_img;
                break;

                case 3: obstacle_img = bird_img2;
                break;

                case 4: obstacle_img = bird_img;
                break;

                case 5: obstacle_img = rock_img;
                break;

                case 6: obstacle_img = rock_img2;
                break;

                case 7: obstacle_img = rock_img;
                break;

                case 8: obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }

            if(ar_obs[0].bird_there==true){
              obstacle_img = rock_img2
            }

            if(lastPlatformCollided>5){
              if(obstacle_img == bird_img2){
                pos_obs_x=windowWidth
              }else if(obstacle_img == bird_img){
                pos_obs_x = 0
              }else if(obstacle_img == rock_img){

              }else{

              }
            }

          if(array_obs_d[array_obs_d.length-1].made == false){
            array_obs_d[array_obs_d.length-1].platform = r;
            array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y-obstacle_img.height/2-12.5)
            array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle",0,0,obstacle_img.width,obstacle_img.height)
            array_obs_d[array_obs_d.length-1].obs.addImage(obstacle_img)
            array_obs_d[array_obs_d.length-1].platform = r;
            obs_group.add(array_obs_d[array_obs_d.length-1].obs)
            //small obs
            array_obs_d[array_obs_d.length-1].obs_small = createSprite(pos_obs_x_s,exlevelData[current_level+1].s1.position.y)
            array_obs_d[array_obs_d.length-1].obs_small.addImage(img_small_obs)
            obs_group_small.add(array_obs_d[array_obs_d.length-1].obs_small);
            array_obs_d[array_obs_d.length-1].made = true;
            ar_obs[0].scanned = false

              if(obstacle_img == bird_img2){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = -4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here1")
              }else if(obstacle_img == bird_img){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here2")
              }else if(obstacle_img == rock_img){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here3")
              }else{
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here4")
              }

              if(obstacle_img==bird_img||obstacle_img==bird_img2){
                ar_obs[0].bird_there = true
              }
          }

          if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
            playerCharSP.collide(obs_group[0]); 
            if(playerCharSP.overlap(obs_group[0])||playerCharSP.overlap(obs_group_small)){
              this.gameOver();
              lose_sound.play()  
            }
          }
          
          if(obs_group.length==2&&obs_group[1]!=null||obs_group[1]!=undefined){
            playerCharSP.collide(obs_group[1]); 
            if(playerCharSP.overlap(obs_group[1])||playerCharSP.overlap(obs_group_small)){
              this.gameOver();
              lose_sound.play()  
            }
          }
          
        }else if(array_obs_d[0].dif_l==4){
          if(array_obs_d[0].c_obs_name !="obs"+current_level){
            array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
            array_obs_d[0].c_obs_name = "obs"+current_level;
          }
          /*if(obs_group.length>2){
            obs_group[0].remove()
          }*/

          for(k=1;(k<ar_obs.length&&ar_obs[0].scanned!=true);k++){
            if(ar_obs[k]=="rock"){
              times_r_occur=times_r_occur+1
              console.log("rock detected")
              ar_obs[0].scanned = true
            }
            if(times_r_occur==3){
              console.log("k value: "+k)
              for(t=k;t>0;t--){
                if(ar_obs[t]=="rock"&&obs_group[t-1]!=undefined){
                  obs_group[t-1].remove()
                  ar_obs.splice(t,1)
                  console.log("rock removed")
                  ar_obs[0].scanned = false
                  times_r_occur=1
                }
              }
            }
          }

          for(var to=0;to<obs_group.length;to++){
            if(obs_group[to].velocity.x==4&&obs_group[to].position.x>windowWidth+90){
              obs_group[to].remove()
              ar_obs.splice(to+1,1)
              console.log("removed")
              ar_obs[0].bird_there=false
              times_r_occur=1;
            }
            if(obs_group[to]!=undefined&&obs_group[to].velocity.x==-4&&obs_group[to].position.x<-90){
              obs_group[to].remove()
              ar_obs.splice(to+1,1)
              console.log("removed")
              ar_obs[0].bird_there=false
              times_r_occur=1;
            }
          }
          
          var r = Math.round(random(1,3))
          if(array_platforms[current_level+1].type!=1){
            if(r==3){
              r=2; //local
            }
          }
          
          var pos_obs_x;
          var pos_obs_y;
          var random_x_pos = Math.round(random(-57.5,57.5))

          if(random_x_pos>0){
            random_x_pos = Math.round(random(57.5,0))
          }else{
            random_x_pos = Math.round(random(-57.5,0))
          }

          if(r==1){
            pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s1.position.y;
          }else if(r==2){
            pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s2.position.y;
          }else if(r==3){
            pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s3.position.y;
          }

          var obstacle_img

            if(lastPlatformCollided<=5){
              switch(Math.round(random(1,2))){

                case 1:obstacle_img = rock_img;
                break;

                case 2:obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }else if(lastPlatformCollided>5&&lastPlatformCollided<11){
              switch(Math.round(random(1,8))){

                case 1: obstacle_img = bird_img2;
                break;

                case 2: obstacle_img = bird_img;
                break;

                case 3: obstacle_img = rock_img;
                break;

                case 4: obstacle_img = rock_img2;
                break;

                case 5: obstacle_img = rock_img;
                break;

                case 6: obstacle_img = rock_img2;
                break;

                case 7: obstacle_img = rock_img;
                break;

                case 5: obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }else{
              switch(Math.round(random(1,8))){

                case 1: obstacle_img = alien_ship;
                break;

                case 2: obstacle_img = alien_ship2;
                break;

                case 3: obstacle_img = alien_ship
                break;

                case 4: obstacle_img = alien_ship2
                break;

                case 5: obstacle_img = alien_ship2;
                break;

                case 6: obstacle_img = alien_ship;
                break;

                case 7: obstacle_img = rock_img;
                break;

                case 5: obstacle_img = rock_img2;
                break;

                default: obstacle_img = rock_img2;
                break;

              }
            }

            if(ar_obs[0].bird_there==true){
              obstacle_img = rock_img2
            }

            if(lastPlatformCollided>5){
              if(obstacle_img == bird_img2){
                pos_obs_x = windowWidth
              }else if(obstacle_img == bird_img){
                pos_obs_x = 0
              }else if(obstacle_img == alien_ship){
                pos_obs_x = 0
              }else if(obstacle_img == alien_ship2){
                pos_obs_x = windowWidth
              }
            }

          if(array_obs_d[array_obs_d.length-1].made == false){
            array_obs_d[array_obs_d.length-1].platform = r;
            array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y-obstacle_img.height/2-12.5)
            array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle",0,0,obstacle_img.width,obstacle_img.height)
            array_obs_d[array_obs_d.length-1].obs.addImage(obstacle_img)
            array_obs_d[array_obs_d.length-1].platform = r;
            obs_group.add(array_obs_d[array_obs_d.length-1].obs)
            array_obs_d[array_obs_d.length-1].made = true;
            ar_obs[0].scanned = false

              if(obstacle_img == bird_img2){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = -4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here1")
              }else if(obstacle_img == bird_img){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 4
                ar_obs.splice(ar_obs.length,0,"bird")
                //array_obs_d[array_obs_d.length-1].obs.life = windowWidth/4+100
                console.log("here2")
              }else if(obstacle_img == rock_img){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here3")
              }else if(obstacle_img == rock_img2){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 0
                ar_obs.splice(ar_obs.length,0,"rock")
                console.log("here4")
              }else if(obstacle_img == alien_ship){ //coming from right
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = 4
                ar_obs.splice(ar_obs.length,0,"bird")
                console.log("here3")
              }else if(obstacle_img == alien_ship2){
                obs_dif_data[obs_dif_data.length-1].obs.velocity.x = -4
                ar_obs.splice(ar_obs.length,0,"bird")
                console.log("here4")
              }

              if(obstacle_img==bird_img||obstacle_img==bird_img2||obstacle_img==alien_ship||obstacle_img==alien_ship2){
                ar_obs[0].bird_there = true
              }
          }

          if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
            playerCharSP.collide(obs_group[0]); 
            if(playerCharSP.overlap(obs_group)){
              this.gameOver();
              lose_sound.play()  
            }
          }
          
          /*if(obs_group.length==2&&obs_group[1]!=null||obs_group[1]!=undefined){
            playerCharSP.collide(obs_group[1]); 
            if(playerCharSP.overlap(obs_group[1])){
              this.gameOver();
              lose_sound.play()  
            }
          }*/
          if(which_l_play>=16&&which_l_play%3==0){
            outer_sp.position.y = (windowHeight-windowHeight/4-195)-(which_l_play*250)
          }
        }
      }
    }
  }

  addCoins(coins_data,array_platforms_c,coins_group_sp,current_level,last_platform,obs_data){  //current level is which_l/_play      //last_platform is last platform collided with
    if(current_level<array_platforms_c.length-1){ 
      if(current_level==last_platform){
        if(coins_data[0].coin_name !="coin"+current_level){
          coins_data.splice(1,1,{coin_s: "coin"+current_level,platform:0,made: false})
          coins_data[0].coin_name = "coin"+current_level;
        }
        if(coins_group_sp.length>2){
          coins_group_sp[0].remove()
        }
        var random_p,final_r,pos_obs_x,pos_obs_y;
        window.random_p = random_p; //making it global variable
        if(obs_data[0].dif_l==1){ //level: easy
          random_p = Math.round(random(1,5))
        }else if(obs_data[0].dif_l==2){ //level: normal
          random_p = Math.round(random(1,4))
        }else if(obs_data[0].dif_l==3){ //level: hard
          random_p = Math.round(random(1,3))
        }else if(obs_data[0].dif_l==4){ //level: infinty levels
          random_p = Math.round(random(1,Math.round(random(2,5))))
        }
        if(random_p==5||random_p==3){
          final_r = 1;
        }else if(random_p==4||random_p==2){
          final_r = 2;
        }else{
          final_r = 3;
        }
        if(array_platforms_c[current_level+1].type!=1){
          if(final_r==3){
            final_r = 2;
          }
        }
        //
        if(final_r==obs_data[obs_data.length-1].platform){
          switch(obs_data[obs_data.length-1].platform){
            case 1:final_r=2;
            break;
            case 2:final_r=1;
            break;
            case 3:final_r=1;
            break;
            default:final_r=2;
            break;
          }
        }
        if(final_r==1){
          pos_obs_x = array_platforms_c[current_level+1].s1.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s1.position.y-50;
        }else if(final_r==2){
          pos_obs_x = array_platforms_c[current_level+1].s2.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s2.position.y-50;
        }else if(final_r==3){
          pos_obs_x = array_platforms_c[current_level+1].s3.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s3.position.y-50;
        }
        if(random_p==2&&coins_data[1].made == false){
          coins_data[coins_data.length-1].platform = final_r;
          coins_data[coins_data.length-1].coin_s = createSprite(pos_obs_x,pos_obs_y,85,74)
          coins_data[coins_data.length-1].coin_s.setCollider("rectangle",0,0,70,70)
          coins_data[coins_data.length-1].coin_s.addImage(dollar_coin_img)
          coins_data[coins_data.length-1].platform = final_r;
          coins_group_sp.add(coins_data[coins_data.length-1].coin_s)
          coins_data[coins_data.length-1].made = true;
        }
        if(coins_group_sp.length==1&&coins_group_sp[0]!=null||coins_group_sp[0]!=undefined){
          playerCharSP.overlap(coins_group_sp, function(collector, collected) {
            coin_sound.play()
            coins+=5;
            collected.remove();
          });
          
        }
        
      }
    }    
  }

  gameOver(){
    if(onLastScreen!="won"){
    came_from_play_lose = true
    navWindow = ty[0];
    this.clear_up_sp();
    isSPclicked == false
    onLastScreen = "lose";
    }
  }

  clear_up_sp(){
    if(exlevelData.length!=1){
      for(var io = 1;io<exlevelData.length;io++){
          if(exlevelData[io].type==2||exlevelData[io].type==3||exlevelData[io].type==4){
              for(var iq = 1;iq<=2;iq++){
                  if(iq==1){
                      exlevelData[io].s1.remove();  
                  }else if(iq==2){
                      exlevelData[io].s2.remove(); 
                      exlevelData.splice(io,1,)
                  }
              }
          }else if(exlevelData[io].type==1){
              for(var iq = 1;iq<=3;iq++){
                  if(iq==1){
                      exlevelData[io].s1.remove();  
                  }else if(iq==2){
                      exlevelData[io].s2.remove();
                  }else if(iq==3){
                      exlevelData[io].s3.remove();
                      exlevelData.splice(io,1,)
                  }
              }
          }
      }
      for(var ti = 0;ti<obs_group_small.length;ti++){
        obs_group_small[ti].remove()
      }
      base.remove()
      playerCharSP.position.x = windowWidth/2
      playerCharSP.position.y = windowHeight-windowHeight/4-75
      if(obs_dif_data.length>=1){
        for(var po=1;po<obs_dif_data.length;po++){
            obs_dif_data[po].obs.remove()
        }
      }
      if(obs_group.length>=1){
        for(var pw=0;pw<obs_group.length;pw++){
            obs_group[pw].remove()
        }
      }
      if(coin_group.length>=1){
        for(var pq=1;pq<coin_group.length;pq++){
          coin_group[pq].remove()
        }
    }
    }
  }
}