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
}//imageMapper()

//This function will draw the hexagons of the main board
function drawBoard(){
     //Create SVG element
     var svg = d3.select("#chart").append("svg")
     .attr("id", "mySvg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)

     //Start drawing the hexagons
          svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
         .selectAll(".hexagon")
         .data(hexbin(points))


         .enter().append("path")
         .attr("class", "hexagon")
         .attr("d", hexbin.hexagon())
         .attr("stroke", "black")
         .attr("stroke-width", "2px")
         .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
         .style("fill", function (d,i) { //function to choose and add random image tiles
              // Get the next catan tile to display in the grid
             var nextTile = catanTiles[i];

             // Get the image to display for the next tile
             var nextImg =  imageMapper(nextTile.tileType);

     	   return nextImg;
     	})
     	.on("mouseover", mover)
          // .on("mouseover", function(d,i) {
          //        var el = d3.select("#circle"+i)
          //      		.transition()
          //      		.duration(100)
          //      		.style("fill-opacity", 0)
          //      		;
          //    })
     	.on("mouseout", mout)
          // .on("mouseout", function(d,i) {
          //           var el = d3.select("#circle"+i)
          //      	   .transition()
          //      	   .duration(100)
          //      	   .style("fill-opacity", 0)//TODO: temporarily invisible
          //      	   ;
          // })
          ;


     ///////////////////////////////////////////////////////////////////////////
     ////////////////////// Draw circles and color them ////////////////////////
     ///////////////////////////////////////////////////////////////////////////

     // Start Drawing Number circles
     // svg.append("g")
     //      .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
     //      .selectAll(".hexagon")
     //      .data(hexbin(points))
     //      .enter().append("circle")
     //      .attr("id", function(d,i) {
     //           return "circle" + i;
     //      })
     //      .attr("class", "hexagon")
     //      .attr("r", "20")
     //      .attr("cx", function(d,i){
     //           var nextX = truePoints[i];
     //           return nextX[0];
     //      })
     //      .attr("cy", function(d,i){
     //           var nextY = truePoints[i];
     //           return nextY[1];
     //      })
     //      .attr("display", function(d, i) {
     //           if(isWaterTile(i)) {
     //                return 'none';
     //           }
     //           else {
     //                return "inline";
     //           }
     //      })
     //      .style("fill-opacity", "0") //TODO: temporarily invisible
     //      .style("fill", function (d,i) { //function to choose and add random image tiles
     //           // Get the next number tile to display in the grid
     //          var nextTile = numberTiles[i];
     //
     //          // Get the image to display for the next tile
     //          var nextImg =  imageMapper(nextTile.tileType);
     //
     //          return nextImg;
     //     });

////////////////////////////////////////////////////
//Images to place into hexagons and number tiles////
////////////////////////////////////////////////////
makeImagePattern();

//$('#generateBoard').addClass('disabled');

} // drawBoard()



//Make array of coordinates
function findCorners(){
     //TODO: can optomize to not need giant switch

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

                    //add Node6 (1, 4, 8, 13, 17)
                    if(currHex == 5 || currHex == 10 || currHex == 16 || currHex == 23 || currHex == 29){
                         coord = centers[currHex];
                         x = coord[0];
                         y = coord[1];
                         cornerArray.push([x - inCircle_Radius, y - side_length/2]);
                    }

                    //add N1 points to cornerArray (all)
                    coord = centers[currHex];
                    x = coord[0];
                    y = coord[1];
                    cornerArray.push([x, y - side_length]);

                    //add N2 points to cornerArray (all)
                    coord = centers[currHex];
                    x = coord[0];
                    y = coord[1];
                    cornerArray.push([x + inCircle_Radius, y - side_length/2]);

                    index++;
               break;

               case 22:
               case 27:
               case 28:
               case 32:
               case 33:
               case 34:
               case 35:
               case 36:
                    //add N1 points to cornerArray (all)
                    coord = centers[currHex];
                    x = coord[0];
                    y = coord[1];
                    cornerArray.push([x, y - side_length]);

                    //add N2 points to cornerArray
                    if(currHex == 33 || currHex == 34 || currHex == 35) {
                    coord = centers[currHex];
                    x = coord[0];
                    y = coord[1];
                    cornerArray.push([x + inCircle_Radius, y - side_length/2]);
                    }
               break;
          }
     }
}//findCorners()

//Make JS Object of overlapping coordinates
function makeCornerObj() {
     for(var index=0; index<cornerArray.length;index++) {
          //Go through entire cornerArray and explicitly say which corners are shared in JS Object
          cornerObj[index] =  cornerArray[index];
     }
}//makeCornerObj()

var key;
var coord, x, y;
// Go through the availSpots array and find the T#N# and return the coordinates of either the x or y value
function getAvailSpot(axis, index) {
	key = availSpots[index];
	coord = cornerObj[key];
	if (axis == "x")
	 	return coord[0];
	else if (axis == "y")
		return coord[1];
}//getAvailSpot(axis,index)


//Show cost of action info
function showCost() {
    document.getElementById("showCost").style.width = "250px";
}

//Hide cost of action info
function hideCost() {
    document.getElementById("showCost").style.width = "0";
}
