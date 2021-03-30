var canvas = new fabric.Canvas('myCanvas');
thor_x = 10;
thor_y = 10;

var thor_object = "";
var block_image = "";

 block_h = 30;
 block_w = 30;
  
 function player_update(){
     fabric.Image.fromURL("THOR.jpg",function(Img){
         thor_object = Img;
         thor_object.scaleToHeight(150);
         thor_object.scaleToWidth(140);

         thor_object.set({
           top:thor_y,
           left:thor_x  
         });
         canvas.add(thor_object);
     });
 }
 function new_image(get_image){
     fabric.Image.fromURL(get_image , function(Img){
         block_image = Img;
         block_image.scaleToHeight(block_h);
         block_image.scaleToWidth(block_w);

         block_image.set({
             top:thor_y,
             left:thor_x
         });
         canvas.add(block_image);
     });
 }
 