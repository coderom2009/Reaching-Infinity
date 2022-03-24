var img
var outer_sp
var name_p
var database

//navigation arrays
var s1_home, navWindow = "welcome", ty = ["welcome","play","account","setting","shop","sp","mp","join","create","allHide"]
var which_func_exp, el = ["feedback_h","wh_new","play_button","levels","sp_button","account","re-name","elements"]

//bolleans
var isEditClick = false, isSPclicked = false, Counting = true, isResting = false, came_from_play_lose = false, canStop = false
var onLastScreen = "none"

//groups
var coin_group, platformGroup, obs_group, obs_group_small

//arrays
var img_data = [{selected:undefined,l_1:false,l_2:true,l_3:true,l_4:true}]
var exlevelData = [{p_tn:0,l_tn:0,t_will_c:2}]
var obs_dif_data = [{dif_l:0,prob:0.8,c_obs_name:null},{}]
var coins_data = [{coin_name:null,p_n:0}]

//counting
var gameV, times = 0, timesExe = 0;
var coins = 0, highScore = 0,score = 0;
var s = 0
var fuelLeft = 24;
var ex_fm,nx_f
var s_play_t = 0
var ar_obs = [{scanned:false,bird_there:false}]
var times_r_occur = 0
var k,t

//images
var playerCharSP_IMG ,playerCharSP_IMG2 ,playerCharSP_IMG3 ,playerCharSP_IMG4
var trans_img, obs_img_post, dollar_coin_img, outer_sp_img, obs_img_l, obs_img_r, trophy_img
var birds,rocks,birds2,rocks2,alien_ship,alien_ship2

//PC & NPC characters
var playerCharSP, base, trophy
var barrier_1, barrier_2, barrier_3

//classes
var player,sp

//player platform datas
var which_l_play = 0, which_l_play_pos = 0, lastPlatformCollided = 0,present_platform = `at_base`

//sounds
var bg_sound, error_sound, click_sound, jump_sound, win_sound, coin_sound, lose_sound



function preload(){
    img = loadImage("./assets/ea_ccexpress.jpeg")
    playerCharSP_IMG = loadImage("./assets/char-orange.png")
    playerCharSP_IMG2 = loadImage("./assets/char-blue.png")
    playerCharSP_IMG3 = loadImage("./assets/char-yellow.png")
    playerCharSP_IMG4 = loadImage("./assets/char-pink.png")
    trans_img = loadImage("./assets/transparent_img.png")
    obs_img_post = loadImage("./assets/obs_img.png");
    dollar_coin_img = loadImage("./assets/dollar (1).png")
    outer_sp_img = loadImage("./assets/outer space.jpg")
    bg_sound = loadSound("./assets/bg_music.mp3")
    obs_img_l = loadImage("./assets/obs_img_left.png")
    obs_img_r = loadImage("./assets/obs_img_right.png")
    error_sound = loadSound("./assets/mixkit-click-error-1110.wav")
    click_sound = loadSound("./assets/mixkit-select-click-1109.wav")
    jump_sound = loadSound("./assets/mixkit-jumping-2043.wav")
    trophy_img = loadImage("./assets/trophy.png")
    win_sound = loadSound("./assets/mixkit-game-success-alert-2039.wav")
    coin_sound = loadSound("./assets/coin_sound.mp3")
    lose_sound = loadSound("./assets/mixkit-losing.wav")
    birds = loadImage("./assets/eg.gif")
    rocks = loadImage("./assets/rocks.png")
    birds2 = loadImage("./assets/eg2.gif")
    rocks2 = loadImage("./assets/rocks2.png")
    alien_ship = loadImage("./assets/alien-ship.gif")
    alien_ship2 = loadImage("./assets/alien-ship.gif")
}
function setup(){

    createCanvas(windowWidth,windowHeight);
    img_data[0].selected=playerCharSP_IMG  //making "Orange char image" as selected image 
    database = firebase.database();

    s1_home = new NewNavigate("./assets/char-orange.png","./assets/char-orange.png","./assets/char-blue.png","./assets/char-yellow.png","./assets/char-pink.png");
    
    player = new Player()
    sp = new SPGame()

    obs_group = new Group()
    obs_group_small = new Group()
    coin_group = new Group()

    outer_sp = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(16*250))
    outer_sp.addImage(outer_sp_img)
    outer_sp.scale = windowWidth/3496

    trophy = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(10*250)-160)
    trophy.addImage(trophy_img)
    trophy.scale = 0.3


    //barriers
    barrier_1 = createSprite(windowWidth/2-380-(215/2),-800,1,4000)
    barrier_1.addImage(trans_img)
    barrier_1.setCollider("rectangle",0,0,1,4000)

    barrier_2 = createSprite(windowWidth/2+380+(215/2),-800,1,4000)
    barrier_2.addImage(trans_img)
    barrier_2.setCollider("rectangle",0,0,1,4000)

    barrier_3 = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(11*250)-50,1,1)
    barrier_3.addImage(trans_img)
    barrier_3.setCollider("rectangle",0,0,windowWidth,100)


    //sounds
    bg_sound.play();
    bg_sound.loop();
    bg_sound.setVolume(0.04)
    click_sound.setVolume(0.09)
    error_sound.setVolume(0.09)
    jump_sound.setVolume(0.09)
    win_sound.setVolume(0.3)
    coin_sound.setVolume(0.5)
    lose_sound.setVolume(0.3)
   
   
      
}
function draw(){

    if(s_play_t==1){
        win_sound.play()
        s_play_t=2
    }

    if(error_sound._playing == true){
        bg_sound.setVolume(0.008)
    }else{
        bg_sound.setVolume(0.04)
    }

    if(came_from_play_lose==true){
        if(exlevelData.length>1){
           sp.clear_up_sp() 
        }
        if(exlevelData.length==1){
            came_from_play_lose = false
            exlevelData[0].p_tn = 0
            exlevelData[0].l_tn = 0
            obs_dif_data[0].dif_l = 0
            obs_dif_data[0].prob = 0.8
            obs_dif_data[0].c_obs_name = null; 
            obs_dif_data[1] = {};
            timesExe=2
            score = 0
            exlevelData[0].t_will_c = 1;
            outer_sp.position.y = (windowHeight-windowHeight/4-195)-(16*250)
            canStop = false
            //s_play_t=0
            ar_obs = [{scanned:false}]
            times_r_occur = 0
            ar_obs[0].bird_there=false
        }
    }

    number() //get the number of visits

    if((gameV!=null||gameV!=undefined)&&times==0){  //increasing the visit by 1
       update(gameV+1)
       player.name = "player"+gameV //local saving
       player.index = gameV //local saving
       player.addPlayer(gameV) //saving in database
       times +=1;
       name_p = "Player " + gameV;
    }
    
    s1_home.display(name_p,isEditClick,coins,highScore,gameV,bg_sound);
    s1_home.toggleNav(isEditClick,obs_dif_data);


    //toggling the glow & dull
    if(obs_dif_data[0].dif_l==1){
        s1_home.easy_btn.class("btn_levels_1_select")
        if(which_func_exp==el[3]){
            s1_home.easy_btn.class("btn_levels_1_select_focus")
        }
    }else{
        s1_home.easy_btn.class("btn_levels_1")
        if(which_func_exp==el[3]){
            s1_home.easy_btn.class("btn_levels_1_focus")
        }
    }

    if(obs_dif_data[0].dif_l==2){
        s1_home.normal_btn.class("btn_levels_2_select")
        if(which_func_exp==el[3]){
            s1_home.normal_btn.class("btn_levels_2_select_focus")
        }
    }else{
        s1_home.normal_btn.class("btn_levels_2")
        if(which_func_exp==el[3]){
            s1_home.normal_btn.class("btn_levels_2_focus")
        }
    }

    if(obs_dif_data[0].dif_l==3){
        s1_home.hard_btn.class("btn_levels_3_select")
        if(which_func_exp==el[3]){
            s1_home.hard_btn.class("btn_levels_3_select_focus")
        }
    }else{
        s1_home.hard_btn.class("btn_levels_3")
        if(which_func_exp==el[3]){
            s1_home.hard_btn.class("btn_levels_3_focus")
        }
    }

    if(obs_dif_data[0].dif_l==4){
        s1_home.extremly_hard_btn.class("btn_levels_4_select")
        if(which_func_exp==el[3]){
            s1_home.extremly_hard_btn.class("btn_levels_4_select_focus")
        }
    }else{
        s1_home.extremly_hard_btn.class("btn_levels_4")
        if(which_func_exp==el[3]){
            s1_home.extremly_hard_btn.class("btn_levels_4_focus")
        }
    }


    //if playing
    if(isSPclicked == true){
        
        if(timesExe ==0){  //playing first time
            timesExe = timesExe +1;
            sp.startSP();
            playerCharSP.setCollider("rectangle",0,0,200,200)
        }
        if(timesExe==2&&exlevelData.length >2){  //playing second time
            timesExe=3
            console.log("here")
            playerCharSP.addImage(img_data[0].selected,"player")
        }

        barrier_1.position.y = playerCharSP.position.y
        barrier_2.position.y = playerCharSP.position.y

        //making a background during playing
        image(img,0, -height * 5, width, height * 6);
        
        sp.addPlatforms(exlevelData,s,Math.round(random(1,4)),Counting)

        playerCharSP.collide(platformGroup,playerCharSP.velocity.y = 0)

        if(platformGroup.overlap(playerCharSP)==true){
            lastPlatformCollided = which_l_play

            if((keyDown("space")||keyDown("w")||keyIsDown(UP_ARROW))&&fuelLeft>0&&isResting==false&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2){
                jump_sound.play()
            }
        }

        score = lastPlatformCollided;
        
        
        if((keyDown("space")||keyDown("w")||keyIsDown(UP_ARROW))&&fuelLeft>0&&isResting==false&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2&&canStop==false){  //here i added: &&obs_dif_data[0].dif_l != 0

            playerCharSP.velocity.y = -12
            if(fuelLeft>=1){
                fuelLeft-=1
            }

        }else{

            if(obs_dif_data[0].dif_l != 0&&exlevelData.length >2&&canStop==false){
               playerCharSP.velocity.y = 8; 
            }
            
        }

        //when falling
        if(platformGroup.overlap(playerCharSP)==false&&playerCharSP.velocity.y==5&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2){
            fuelLeft=0
        }

        if((windowHeight-windowHeight/4-195)-(which_l_play*250)>playerCharSP.position.y){
            which_l_play+=1;//increase in platform counting 

        }else if(((windowHeight-windowHeight/4-195)-((which_l_play-1)*250))<playerCharSP.position.y){
            which_l_play-=1;//decrease in platform counting 

        }

        if((keyIsDown(LEFT_ARROW)||keyDown("a"))&&obs_dif_data[0].dif_l != 0&&canStop==false){
            
            if(platformGroup.overlap(playerCharSP)==false){  //*upper: next or upper platform of player
                if(which_l_play>=lastPlatformCollided){  //just before landing on upper platform
                    playerCharSP.position.x -= 7
                }

            }else{  //if on platform
                playerCharSP.position.x -= 7
            }
        }
        
        if((keyIsDown(RIGHT_ARROW)||keyDown("d"))&&obs_dif_data[0].dif_l != 0&&canStop==false){

            if(platformGroup.overlap(playerCharSP)==false){  //*upper: next or upper platform of player
                if(which_l_play>=lastPlatformCollided){  //just before landing on upper platform
                    playerCharSP.position.x += 7
                }
                
            }else{  //if on platform
                playerCharSP.position.x += 7
            }
        }
        

        which_l_play_pos=(windowHeight-windowHeight/4-195)-(which_l_play*250)


        if(platformGroup.overlap(playerCharSP)==true&&which_l_play==0){
            if(playerCharSP.position.y>which_l_play_pos+13.5+49){
                if(fuelLeft<=23){
                    fuelLeft+=1
                }
            }

        }else if (platformGroup.overlap(playerCharSP)==true&&which_l_play!=0){
            if(playerCharSP.position.y>which_l_play_pos+13.5+49){ //if(playerCharSP.position.y>exlevelData[which_l_play].s1.position.y+27^which_l_play+75^which_l_play){
                if(fuelLeft<=23){
                    fuelLeft+=1
                }
            }
        }

        if(fuelLeft==24){
            isResting = false;
        }else if(platformGroup.overlap(playerCharSP)==true){
            isResting = true;
        }


        if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==1){
            if(playerCharSP.position.x<windowWidth/2-272.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s2`;
            }else if(playerCharSP.position.x>windowWidth/2+272.5){
                present_platform = `s3`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==2){
            if(playerCharSP.position.x<windowWidth/2-82.5&&playerCharSP.position.x>windowWidth/2-297.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2+82.5&&playerCharSP.position.x<windowWidth/2+297.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==3){ //not done down
            if(playerCharSP.position.x<windowWidth/2-272.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==4){
            if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2+272.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }

        sp.addObstacles(exlevelData,obs_dif_data,which_l_play,lastPlatformCollided,birds,rocks,birds2,rocks2)
        sp.addCoins(coins_data,exlevelData,coin_group,which_l_play,lastPlatformCollided,obs_dif_data);
        
        //camera positioning
        camera.position.y = lerp(playerCharSP.position.y,camera.position.y,0.95)-9


        //if touches trophy then all moments stops
        if(playerCharSP.overlap(trophy)&&(onLastScreen!="lose")){
            canStop = true;
            onLastScreen = "won";
            if(s_play_t==0){
                s_play_t = 1
            }
        }

        playerCharSP.collide(barrier_1)
        playerCharSP.collide(barrier_2)
        playerCharSP.collide(barrier_3)

        drawSprites()



        textFont("concert")
        textSize(25)
        fill(255,140,25)

        if(frameCount%60==0){
            nx_f = frameCount+60
            ex_fm = getFrameRate()
        }
        if(frameCount==nx_f){
            ex_fm = (ex_fm+getFrameRate())/2
        }

        text("Frame Rate: "+Math.round(ex_fm),25,camera.position.y-windowHeight/2+50)

        textFont("concert")
        textSize(40)
        fill(255,140,25)
        text("Score: "+score,25,camera.position.y-windowHeight/2+100)

        text("Coins: "+coins,25,camera.position.y-windowHeight/2+150)

        if(obs_dif_data[0].dif_l==4){
            barrier_3.position.x = windowWidth+windowWidth
            trophy.position.x = windowWidth+windowWidth
        }else{
            barrier_3.position.x = windowWidth/2
            if(coin_group.length>1){
                if(which_l_play==10){
                    trophy.position.x = coin_group[coin_group.length-1].position.x
                }
            }
        }

        if(score>highScore){
            highScore = score
        }
        
    }


} //draw function ends

function number() {
    var gameStateRef = database.ref("visits");
    gameStateRef.on("value", function(data) {
      gameV = data.val();
    });
}

function suggestion_add(sug) {
    database.ref("/suggestions/suggestion"+gameV).update({
        suggestion : sug
    })
}

function update(state) {
    database.ref("/").update({
      visits: state
    });
}

function clear_up(){
    if(exlevelData.length!=1){
        for(var io = 1;io<exlevelData.length;io++){
            if(exlevelData[io].type!=1){
                for(var iq = 1;iq<=2;iq++){
                    if(iq==1){
                        exlevelData[io].s1.remove();  
                    }else if(iq==2){
                        exlevelData[io].s2.remove(); 
                    }
                    
                }
            }else{
                for(var iq = 1;iq<=3;iq++){
                    if(iq==1){
                        exlevelData[io].s1.remove();  
                    }else if(iq==2){
                        exlevelData[io].s2.remove();
                    }else if(iq==3){
                        exlevelData[io].s3.remove();
                    }
                    
                }
            }
        }
        base.remove()
        playerCharSP.remove()

        if(obs_dif_data.length>=1){
            for(var po=1;po<obs_dif_data.length;po++){
                obs_dif_data[po].obs.remove()
            }
            
        }

    }
}
