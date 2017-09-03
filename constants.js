// Make pattern element that holds all the images we use
function makeImagePattern() {
var defs = d3.select("#mySvg").append('svg:defs')
       .attr("id", "mdef");

  //TODO: Add separate constants js file for image patterns and other large functions.

  // Wheat Image to use
    defs.append("svg:pattern")
      .attr("id", "image1")
      .attr("width", 200)
      .attr("height", 200)
      .attr("x", -100)
      .attr("y", -100)
      .attr("patternUnits", "userSpaceOnUse")
      .append("svg:image")
      .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/wheat.png")
      .attr("width", 160)
      .attr("height", 160)
      .attr("x", 20)
      .attr("y", 20);

  // Brick Image to use
      defs.append("svg:pattern")
       .attr("id", "image2")
       .attr("width", 200)
       .attr("height", 200)
       .attr("x", -100)
       .attr("y", -100)
       .attr("patternUnits", "userSpaceOnUse")
       .append("svg:image")
       .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/brick.png")
       .attr("width", 150)
       .attr("height", 150)
       .attr("x", 25)
       .attr("y", 25);

  // Sheep Image to use
       defs.append("svg:pattern")
         .attr("id", "image3")
         .attr("width", 200)
         .attr("height", 200)
         .attr("x", -100)
         .attr("y", -100)
         .attr("patternUnits", "userSpaceOnUse")
         .append("svg:image")
         .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/sheep.png") // add image url
         .attr("width", 150)
         .attr("height", 150)
         .attr("x", 25)
         .attr("y", 25);

  // Rock Image to use
      defs.append("svg:pattern")
       .attr("id", "image4")
       .attr("width", 200)
       .attr("height", 200)
       .attr("x", -100)
       .attr("y", -100)
       .attr("patternUnits", "userSpaceOnUse")
       .append("svg:image")
       .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/rock.png") // add image url
       .attr("width", 150)
       .attr("height", 150)
       .attr("x", 25)
       .attr("y", 25);

  // Wood Image to use
      defs.append("svg:pattern")
       .attr("id", "image5")
       .attr("width", 200)
       .attr("height", 200)
       .attr("x", -100)
       .attr("y", -100)
       .attr("patternUnits", "userSpaceOnUse")
       .append("svg:image")
       .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/wood.png") // add image url
       .attr("width", 150)
       .attr("height", 150)
       .attr("x", 25)
       .attr("y", 25);

  // Desert Image to use
      defs.append("svg:pattern")
       .attr("id", "image6")
       .attr("width", 200)
       .attr("height", 200)
       .attr("x", -100)
       .attr("y", -100)
       .attr("patternUnits", "userSpaceOnUse")
       .append("svg:image")
       .attr("xlink:href", "http://www.tallerdefotos.cat/wp-content/uploads/2012/05/1.jpg") // add image url
       .attr("width", 400)
       .attr("height", 400)
       .attr("x", 0)
       .attr("y", -100);

  // Water Image to use
       defs.append("svg:pattern")
         .attr("id", "image0")
         .attr("width", 200)
         .attr("height", 200)
         .attr("x", -100)
         .attr("y", -100)
         .attr("patternUnits", "userSpaceOnUse")
         .append("svg:image")
         .attr("xlink:href", "http://awesomwallpaper.com/img2/15C3206BD0C0AC65/ocean-water-waves-sea.jpg")
         .attr("width", 400)
         .attr("height", 400)
         .attr("border-style", "dotted")
         .attr("border-width" , "20px")
         .attr("x", 0)
         .attr("y", -100);

  // Number2 Tile Image to use
  defs.append("svg:pattern")
     .attr("id", "num2_img")
     .attr("width", 40)
     .attr("height", 40)
     .attr("x", 0)
     .attr("y", 0)
     // I removed patternUnits to stop repeated tiles
     .append("svg:image")
     .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/num2.png")
     .attr("width", 40)
     .attr("height", 40)
     .attr("x", 0)
     .attr("y", 0);

  // Number4 Tile Image to use
    defs.append("svg:pattern")
      .attr("id", "num4_img")
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 0)
      .attr("y", 0)
      // I removed patternUnits to stop repeated tiles
      .append("svg:image")
      .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/num4.png")
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 0)
      .attr("y", 0);

  // Number5 Tile Image to use
    defs.append("svg:pattern")
       .attr("id", "num5_img")
       .attr("width", 40)
       .attr("height", 40)
       .attr("x", 0)
       .attr("y", 0)
       // I removed patternUnits to stop repeated tiles
       .append("svg:image")
       .attr("xlink:href", "file:///C:/Users/IBM_ADMIN/Documents/GitHub/boardgame/imgs/num5.png")
       .attr("width", 40)
       .attr("height", 40)
       .attr("x", 0)
       .attr("y", 0);


      //Filter for the outside glow
      var filter = defs.append("filter")
      	.attr("id","glow");
      filter.append("feGaussianBlur")
      	.attr("stdDeviation","1")
      	.attr("result","coloredBlur");
} // makeImagePattern()

//Choose string to use for fill attribute
function imageMapper (tileType) {
     var urlString = "url(#";

     if     (tileType == "Wheat") {
          urlString = urlString + "image1)";
     }
     else if(tileType == "Brick") {
          urlString = urlString + "image2)";
     }
     else if(tileType == "Sheep") {
          urlString = urlString + "image3)";
     }
     else if(tileType == "Rock") {
          urlString = urlString + "image4)";
     }
     else if(tileType == "Wood") {
          urlString = urlString + "image5)";
     }
     else if(tileType == "Desert") {
          urlString = urlString + "image6)";
     }
     else if(tileType == "Water") {
          // add water color instead of image
          urlString = "#7A756B";
     }
     else if(tileType == "Num2") {
          urlString = urlString + "num2_img)";
     }
     else if(tileType == "Num3") {
          urlString = urlString + "num3_img)";
     }
     else if(tileType == "Num4") {
          urlString = urlString + "num4_img)";
     }
     else if(tileType == "Num5") {
          urlString = urlString + "num5_img)";
     }
     else if(tileType == "Num6") {
          urlString = urlString + "num6_img)";
     }
     else if(tileType == "Num7") {
          urlString = urlString + "num7_img)";
     }
     else if(tileType == "Num8") {
          urlString = urlString + "num8_img)";
     }
     else if(tileType == "Num9") {
          urlString = urlString + "num9_img)";
     }
     else if(tileType == "Num10") {
          urlString = urlString + "num10_img)";
     }
     else if(tileType == "Num11") {
          urlString = urlString + "num11_img)";
     }
     else if(tileType == "Num12") {
          urlString = urlString + "num12_img)";
     }
     return urlString;
}

function findCorners(){
     //TODO: associate tiles and node names in json string

     var TotalHexs = 54;
     var coord;
     var x;
     var y;
     var index = 0;
     for (var currHex = 0; currHex<=TotalHexs; currHex++) {
          switch(currHex){
               case 0:
               case 1:
               case 2:
               case 3:
               case 4:
               break;
               case 8:
               case 9:
               break;
               case 14:
               case 15:
               break;
               case 21:
               case 22:
               break;
               case 27:
               case 28:
               break;
                    //water tiles
               case 5://Tile1
               case 6://Tile2
               case 7://Tile3

               case 10://Tile4
               case 11://Tile5
               case 12://Tile6
               case 13://Tile7

               case 16://8
               case 17://9
               case 18://10
               case 19://11
               case 20://12

               case 23://13
               case 24://14
               case 25://15
               case 26://16

               case 29://17
               case 30://18
               case 31://19

               //add N1 points to cornerArray (all)
                    coord = centers[currHex];
                    x = coord[0];
                    y = coord[1];
                    cornerArray.push([x, y - side_length]);
               //add N2 points to cornerArray (all)
                    if(currHex == 5 || currHex == 6 || currHex == 7
                       || currHex == 10 || currHex == 11 || currHex == 12 || currHex == 13
                       || currHex == 16 || currHex == 17 || currHex == 18 || currHex == 19 || currHex == 20
                       || currHex == 23 || currHex == 24 || currHex == 25 || currHex == 26
                       || currHex == 29 || currHex == 30 || currHex == 31){

                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x + inCircle_Radius, y - side_length/2]);
                         if(currHex==6)//Node2
                              cornerObj2.T2N2 = cornerObj2.T3N6 = cornerArray[index+1];
                         if(currHex==10)//Node4
                              cornerObj2.T4N2 = cornerObj2.T5N6 = cornerArray[index+1];
                    }
                    //add Node6 (1, 4, 8, 13, 17)
                    if(currHex == 5 || currHex == 10 || currHex == 16 || currHex == 23 || currHex == 29){
                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x - inCircle_Radius, y - side_length/2]);
                    }
                    //add Node 3 (12, 16, 17, 18, 19)
                    if(currHex == 20 || currHex == 26 || currHex == 29 || currHex == 30 || currHex == 31){
                         //add Node6
                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x + inCircle_Radius, y + side_length/2]);
                    }
                    //add Node 5 (12, 16, 19)
                    if(currHex == 16 || currHex == 23 || currHex == 29){
                         //add Node6
                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x - inCircle_Radius, y + side_length/2]);
                    }
                    //add Node 4 (17, 18, 19)
                    if(currHex == 29 || currHex == 30 || currHex == 31){
                         //add Node6
                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x, y + side_length]);
                    }
                    index++;
               break;
          }
     }
}//findCorners()

//Make JS Object of overlapping coordinates
function makeCornerObj() {
     for(var index=0; index<cornerArray.length;index++) {

          switch(index) {
               case 0://Node1
                    cornerObj.T1N2 = cornerObj.T2N6 = cornerArray[index];
               break;
               case 1://Node2
                    cornerObj.T2N2 = cornerObj.T3N6 = cornerArray[index];
               break;
               case 3://Node4
                    cornerObj.T4N2 = cornerObj.T5N6 = cornerArray[index];
               break;
          }

          // if(currHex==6)//Node2
          //      cornerObj.T2N2 = cornerObj.T3N6 = cornerArray[index];
          // if(currHex==10)//Node4
          //      cornerObj.T4N2 = cornerObj.T5N6 = cornerArray[index];
     }
}
