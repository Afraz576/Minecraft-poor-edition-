canvas = new fabric.Canvas("myCanvas");

player_x  = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object = "";
block_image_object = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function (img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            left:player_x,
            top:player_y
        });
      canvas.add(player_object);  
    });
};

function newImage(get_img){
    fabric.Image.fromURL(get_img, function (img){
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            left:player_x,
            top:player_y
        });
      canvas.add(block_image_object);  
    })
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey && keypressed=="80"){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey && keypressed=="77"){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
   if(keypressed=="38"){
    up();
    console.log("up");
   }
   if(keypressed=="40"){
    down();
    console.log("down");
   }
   if(keypressed=="37"){
    left();
    console.log("left");
   }
   if(keypressed=="39"){
    right();
    console.log("right");
   }
   if(keypressed=="67"){
    newImage("cloud.jpg");
    console.log("c");
   }
   if(keypressed=="68"){
    newImage("dark_green.png");
    console.log("d");
   }
   if(keypressed=="71"){
    newImage("ground.png");
    console.log("g");
   }
   if(keypressed=="76"){
    newImage("light_green.png");
    console.log("l");
   }
   if(keypressed=="82"){
    newImage("roof.jpg");
    console.log("r");
   }
   if(keypressed=="84"){
    newImage("trunk.jpg");
    console.log("t");
   }
   if(keypressed=="85"){
    newImage("unique.png");
    console.log("u");
   }
   if(keypressed=="87"){
    newImage("wall.jpg");
    console.log("w");
   }
   if(keypressed=="89"){
    newImage("yellow_wall.png");
    console.log("y");
   }
}

function up(){
    if(player_y>=0){
        player_y = player_y-block_image_height;
        console.log("block image height ="+block_image_height);
        console.log("when up arrow key is pressed,x ="+ player_x+",y="+ player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function down(){
    if(player_y<=500){
        player_y = player_y+block_image_height;
        console.log("block image height ="+block_image_height);
        console.log("when down arrow key is pressed,x ="+ player_x+",y="+ player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x = player_x-block_image_width;
        console.log("block image width ="+block_image_width);
        console.log("when left arrow key is pressed,x ="+ player_x+",y="+ player_y);
        canvas.remove(player_object);
        playerUpdate();
    } 
}
function right(){
    if(player_x<=850){
        player_x = player_x+block_image_width;
        console.log("block image width ="+block_image_width);
        console.log("when left arrow key is pressed,x ="+ player_x+",y="+ player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
    
}