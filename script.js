//The color of each hexagon
var color = [
"#486bf9", "#486bf9", "#486bf9", "#486bf9",
"#486bf9", "#fdee5e", "#54c74d", "#d27241", "#486bf9",
"#486bf9", "#c0c0bf", "#d27241", "#54c74d", "#fdee5e", "#486bf9",
"#486bf9", "#aafb6f", "#fdee5e", "#d27241", "#54c74d", "#c0c0bf", "#486bf9",
"#486bf9", "#54c74d", "#c0c0bf", "#fdee5e", "#aafb6f", "#486bf9",
"#486bf9", "#fdee5e", "#aafb6f", "#c0c0bf", "#486bf9",
"#486bf9", "#486bf9", "#486bf9", "#486bf9",

"#486bf9", "#486bf9", "#486bf9", "#486bf9", "#FFE663", "#FFC263", "#9DFF63", "#AEFF63", "#6AFF63", "#65FF65", "#63FFC7", "#C5FF63", "#63FFBE", "#63FF93", "#63FFAC", "#62FF79", "#90FF63", "#6AFF63", "#63FFEF", "#63F7FF", "#63FFD1", "#6370FF", "#638DFF", "#63FFDF", "#C5FF63", "#63FF6A", "#64FF69", "#C7FE63", "#FDFC63", "#D0FE63", "#FFDC63", "#E3FF63", "#DCFF63", "#C9FE63", "#FBFF63", "#FFB663", "#D9FF63", "#9DFF63", "#69FF63", "#DCFF63", "#63FFD4", "#63FFB8", "#64FF67", "#74FF63", "#63FCFF", "#63FFF9", "#63FFE9", "#A6FF63", "#63FFCD", "#63CEFE", "#63FBFF", "#63FFFB", "#637CFF", "#6379FF", "#D2FE63", "#CFFE63", "#63FF6E", "#65FF65", "#EEFF63", "#DCFF63", "#9DFF63", "#AAFF63", "#B6FF63", "#D0FE63", "#AEFF63", "#CDFE63", "#64FF67", "#99FF63", "#66FF64", "#63FFC1", "#63FFD4", "#63FF90", "#63FFD1", "#63FFF4", "#63FFEC", "#63FFF9", "#71FF63", "#63FF93", "#63FFC4", "#63F7FF", "#638DFF", "#63E9FF", "#6375FF", "#88FF63", "#95FF63", "#63FFAF", "#63FF93", "#63FF9A", "#9DFF63", "#88FF63", "#EEFF63", "#BDFF63", "#71FF63", "#B6FF63", "#80FF63", "#62FF82", "#63FF6C", "#62FF76", "#63FF6E", "#63FFCD", "#63EFFF", "#63FFF6", "#63FFB5", "#63FFFC", "#63B4FF", "#63FFC1", "#63F5FF", "#63FFB5", "#63FFBB", "#63FFFC", "#6379FF", "#63B0FF", "#63FFBB", "#D5FE63", "#63FFB8", "#63FF6C", "#62FF7C", "#63FFBE", "#FFDF63", "#FFE263", "#FFE963", "#76FF63", "#67FF64", "#63FF90", "#65FF65", "#63FFA0", "#63FFA6", "#62FF73", "#63FFC1", "#63FFC4", "#63FFF9", "#63CEFE", "#63A4FF", "#6373FF", "#63C5FE", "#638DFF", "#63FF9D", "#6387FF", "#63FFBE", "#63FEFE", "#63FFEC", "#63FFF1", "#638DFF", "#FF6A64", "#FBFF63", "#FFEF63", "#63FFE9", "#62FF8C", "#BAFF63", "#FFAB63", "#FFCB63", "#62FF82", "#88FF63", "#63FFB2", "#63FFC1", "#63FFDF", "#63FFB5", "#63FFB5", "#62FF7F", "#63FFC4", "#63ECFF", "#63FFFC", "#63F3FF", "#63FFE5", "#63D2FE", "#63FFF6", "#63A8FF", "#63F8FF", "#63FFFB", "#63E4FF", "#636DFF", "#63FFC4", "#6387FF", "#FF8B63", "#EBFF63", "#C5FF63", "#BDFF63", "#62FF76", "#DCFF63", "#BDFF63", "#99FF63", "#62FF82", "#63FFA6", "#63C9FE", "#63FEFE", "#62FF89", "#63FFD8", "#63FFB8", "#63FFF1", "#63C1FE", "#63FCFF", "#63FFCA", "#63C9FE", "#63FFFC", "#6FFF63", "#63FFE5", "#63E9FF", "#63F7FF", "#63B0FF", "#636CFF", "#636CFF", "#63ACFF", "#63F1FF", "#FF8863", "#FF6864", "#FFB363", "#A2FF63", "#63FFD8", "#63FF96", "#99FF63", "#AEFF63", "#C7FE63", "#63FF93", "#63FFC1", "#63FFF9", "#63FFFB", "#67FF64", "#B2FF63", "#62FF76", "#62FF73", "#639CFF", "#63FFC1", "#63FFEF", "#66FF64", "#62FF76", "#63FFC4", "#63FFCA", "#63FFBE", "#63FFFC", "#6363FF", "#63ACFF", "#6375FF", "#63CEFE", "#FFB663", "#79FF63", "#BDFF63", "#63FF6C", "#66FF64", "#76FF63", "#FEF763", "#D7FE63", "#7DFF63", "#63FFB8", "#63F5FF", "#63F7FF", "#62FF7F", "#63FFA6", "#62FF76", "#63FFA6", "#63FFD1", "#63FEFE", "#63FFDF", "#63F8FF", "#63FF96", "#63FFA9", "#63FFA9", "#63C1FE", "#63FFC1", "#63D6FE", "#636EFF", "#6364FF", "#6370FF", "#6398FF", "#FFE663", "#C0FF63", "#EBFF63", "#C5FF63", "#D2FE63", "#69FF63", "#6FFF63", "#D4FE63", "#F4FF63", "#63FFC4", "#62FF89", "#63FFF4", "#63FFB8", "#63FFF4", "#63F8FF", "#62FF71", "#63FFBB", "#63FFEF", "#63FFF1", "#63FBFF", "#63C1FE", "#63FFDF", "#63FFD1", "#63FFE2", "#63ACFF", "#63F3FF", "#63DDFF", "#63FFF6", "#63D6FE", "#63CEFE", "#D4FE63", "#80FF63", "#FF8B63", "#D5FE63", "#63FFCA", "#90FF63", "#D7FE63", "#FBFF63", "#62FF7C", "#C9FE63", "#76FF63", "#69FF63", "#62FF7C", "#63FFD4", "#63FFA6", "#6BFF63", "#63FFC7", "#63E4FF", "#62FF7C", "#63FFF6", "#6379FF", "#63FFCD", "#63FFCA", "#63FFEF", "#63FFBE", "#63E9FF", "#63ECFF", "#63FFF9", "#63E0FF", "#63C5FE", "#FF6B63", "#FFD663", "#63FF6E", "#63FFB2", "#FFD663", "#62FF7F", "#63FFA6", "#9DFF63", "#F6FF63", "#95FF63", "#95FF63", "#FFD963", "#DCFF63", "#63FF90", "#63FFD1", "#63FFFC", "#63FFA3", "#63FFAF", "#63ECFF", "#63FFEF", "#63C5FE", "#63FDFF", "#63FF93", "#62FF76", "#69FF63", "#63EFFF", "#636DFF", "#6379FF", "#63E7FF", "#63E7FF", "#FF8E63", "#CDFE63", "#BDFF63", "#F9FF63", "#62FF7F", "#63FFE2", "#62FF86", "#67FF64", "#63FFA3", "#6DFF63", "#9DFF63", "#FFE963", "#FFBE63", "#6AFF63", "#62FF7F", "#63FFD4", "#79FF63", "#63D2FE", "#63DDFF", "#63FEFE", "#63BDFE", "#63FFDB", "#64FF69", "#62FF8C", "#63FFD8", "#63BDFE", "#63B8FF", "#6391FF", "#63FFDB", "#63FEFE", "#F8FF63", "#FFF263", "#C2FF63", "#FFDF63", "#D2FE63", "#64FF69", "#63FFE2", "#7DFF63", "#FDFC63", "#FF9763", "#6BFF63", "#F2FF63", "#FBFF63", "#AEFF63", "#80FF63", "#63D9FE", "#63FFBB", "#63FFD8", "#63FFEF", "#63C5FE", "#63FF90", "#62FF89", "#63D2FE", "#63FFC4", "#63FF93", "#63D2FE", "#63DDFF", "#63FDFF", "#6DFF63", "#62FF82", "#FF8363", "#DAFF63", "#74FF63",
             "#63FF6A", "#63FF6A", "#64FF69", "#FFDF63", "#FF7F63", "#FFEF63", "#EEFF63", "#CFFE63", "#6AFF63", "#95FF63", "#63FF6C", "#63FF90", "#6BFF63", "#63FF90", "#63FFCA", "#63E9FF", "#63FFEC", "#63FFAC", "#63FFD4", "#63FAFF", "#63FFCA", "#63ECFF", "#62FF8C", "#63FFE5", "#69FF63", "#FF7463", "#FF9463", "#E0FF63", "#FFCB63", "#A6FF63", "#63FF93", "#E0FF63", "#FEFA63", "#EBFF63", "#AAFF63", "#C2FF63", "#D4FE63", "#63FFAC", "#65FF65", "#62FF73", "#63FFE9", "#65FF66", "#95FF63", "#62FF7F", "#63FFB5", "#63D2FE", "#63FFAC", "#63FFFB", "#62FF8C", "#64FF69", "#99FF63", "#63FFB2", "#63FFDF", "#63FFB8", "#BAFF63", "#FFDC63", "#62FF76", "#BDFF63", "#C2FF63", "#95FF63", "#F6FF63", "#FFA163", "#CFFE63", "#63FFE9", "#84FF63", "#6BFF63", "#6DFF63", "#63FFC1", "#D0FE63", "#69FF63", "#63FFC1", "#62FF8C", "#63FFBB", "#63FF96", "#63FAFF", "#63FFEC", "#63FEFE", "#62FF76", "#63FF9A", "#FFC563", "#6FFF63", "#63FFAF", "#63F5FF", "#63F1FF", "#63FF6A", "#62FF7C", "#63F8FF", "#9DFF63", "#99FF63", "#AEFF63", "#FF8363", "#FFC963", "#62FF79", "#63FF90", "#63FF6A", "#63FCFF", "#63E9FF", "#63FFA0", "#64FF67", "#FFD463", "#A6FF63", "#CBFE63", "#63FF90", "#63FFC4", "#63C9FE", "#63FFE5", "#63FFDB", "#62FF89", "#63FFD8", "#79FF63", "#63FF9A", "#63FAFF", "#63E9FF", "#63FF6E", "#63F7FF", "#63E4FF", "#63F5FF", "#64FF67", "#C9FE63", "#FFBA63", "#D9FF63", "#63FFD1", "#63FFF6", "#63FF93", "#C0FF63", "#F6FF63", "#62FF82", "#AEFF63", "#CBFE63", "#FF8363", "#63FF6A", "#63FFCD", "#63F7FF", "#63FFF9", "#63FFC4", "#63FFC4", "#95FF63", "#63FFCD", "#A2FF63", "#EBFF63", "#63FFC1", "#63FFA0", "#63E4FF", "#63FFFB", "#63F3FF", "#63CEFE", "#63FBFF"]

//The number of columns and rows of the heatmap
var MapColumns = 7,
	MapRows = 7;

///////////////////////////////////////////////////////////////////////////
//////////////////Global Functions For Image palcement/////////////////////
///////////////////////////////////////////////////////////////////////////

// Check if tile is outer tile. 0 for is not water and 1 for it is water.
function isWaterTile(i){
     if(i < 5) {
          return true;
     }
     else if(i == 8 || i == 9) {
          return true;
     }
     else if(i == 14 || i == 15) {
          return true;
     }
     else if(i == 21 || i == 22) {
          return true;
     }
     else if(i == 27 || i == 28) {
          return true;
     }
     else if(i > 31) {
          return true;
     }
     else{
          return false;
     }
}

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


///////////////////////////////////////////////////////////////////////////
/////////////////////Catan Tile array and mappings/////////////////////////
///////////////////////////////////////////////////////////////////////////

var catanTiles = [];

// Temporary random tiles until API made to randomize tile placement
for(var i = 0; i < 37; i++){
     if(isWaterTile(i)){
          var nextTile = {
               "tileType" : "Water"
               };
          catanTiles.push(nextTile);
     }
     else if(i % 5 == 0) {
          var nextTile = {
               "tileType" : "Wheat"
               };
          catanTiles.push(nextTile);
     }
     else if(i % 5 == 1) {
          var nextTile = {
               "tileType" : "Brick"
               };
          catanTiles.push(nextTile);
     }
     else if(i % 5 == 2) {
          var nextTile = {
               "tileType" : "Sheep"
               };
          catanTiles.push(nextTile);
     }
     else if(i % 5 == 3) {
          var nextTile = {
               "tileType" : "Rock"
               };
          catanTiles.push(nextTile);
     }
     else if(i % 5 == 4) {
          var nextTile = {
               "tileType" : "Wood"
          };
          catanTiles.push(nextTile);
     }
}
var dTile = {
     "tileType" : "Desert"
};
catanTiles.push(dTile);


///////////////////////////////////////////////////////////////////////////
////////////////////Number Tile array and mappings/////////////////////////
///////////////////////////////////////////////////////////////////////////

var numberTiles = [];

// Temporary random tiles until API made to randomize tile placement
for(var i = 0; i < 37; i++){
     if(i % 3 == 0){
          var nextTile = {
               "tileType" : "Num2"
               };
          numberTiles.push(nextTile);
     }
     else if(i % 3 == 1) {
          var nextTile = {
               "tileType" : "Num4"
               };
          numberTiles.push(nextTile);
     }
     else if(i % 3 == 2) {
          var nextTile = {
               "tileType" : "Num5"
               };
          numberTiles.push(nextTile);
     }
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////// Image Configurations ////////////////////////
///////////////////////////////////////////////////////////////////////////

var configResourceImg = {
  "img_width": 100,
  "img_height": 100
};

var configNumberImg = {
  "img_width": 100,
  "img_height": 100
};


///////////////////////////////////////////////////////////////////////////
///////////////////////////// Mouseover functions /////////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to call when you mouseover a node
function mover(d) {
  var el = d3.select(this)
		.transition()
		.duration(10)
		.style("fill-opacity", 0.3)
		;
}

//Mouseout function
function mout(d) {
	var el = d3.select(this)
	   .transition()
	   .duration(100)
	   .style("fill-opacity", 1)
	   ;
};

///////////////////////////////////////////////////////////////////////////
////////////// Initiate SVG and create hexagon centers ////////////////////
///////////////////////////////////////////////////////////////////////////

//svg sizes and margins
var margin = {
    top: 75,
    right: 80,
    bottom: 20,
    left: 80
};

//The next lines should be run, but this seems to go wrong on the first load in bl.ocks.org
//var width = $(window).width() - margin.left - margin.right - 40;
//var height = $(window).height() - margin.top - margin.bottom - 80;
//So I set it fixed to:
//var width = 850;
//var height = 350;



//The maximum radius the hexagons can have to still fit the screen
//var hexRadius = d3.min([width/(Math.sqrt(3)*(MapColumns+3)),
//			height/((MapRows+3)*1.5)]);
var hexRadius = 65;
var side_length = hexRadius;
var inCircle_Radius =  (Math.sqrt(3) / 2 ) * side_length;
//Set the new height and width based on the max possible
width = MapColumns*hexRadius*Math.sqrt(3);
height = MapRows*1.5*hexRadius+0.5*hexRadius;

//Set the hexagon radius
var hexbin = d3.hexbin()
    .radius(hexRadius);


//Calculate the center positions of each hexagon
var points = [];
var truePoints = [];
// Example:  cornerPoints = [Node1:[x,y] , Node2:[x,y] , Node3:[x,y] , Node4:[x,y] , Node5:[x,y] , Node6:[x,y]]
for (var row = 0; row < MapRows; row++) {
    if(row == 0 || row == 6){
         for (var col = 0; col < 4; col++) {
             points.push([hexRadius * (col+2) * 1.75, hexRadius * row * 1.5]);
     	truePoints.push([hexRadius * (col+2) * Math.sqrt(3), hexRadius * row * 1.5]);
         }//for col
    }
    else if(row == 1 || row == 5){
         for (var col = 0; col < 5; col++) {
             points.push([hexRadius * (col + 1) * 1.75, hexRadius * row * 1.5]);
     	truePoints.push([(hexRadius * (col) * Math.sqrt(3)) +( 113 + (113 / 2)), hexRadius * row * 1.5]);
         }//for col
    }
    else if(row == 2 || row == 4){
         for (var col = 0; col < 6; col++) {
             points.push([hexRadius * (col+1) * 1.75, hexRadius * row * 1.5]);
     	truePoints.push([hexRadius * (col+1) * Math.sqrt(3), hexRadius * row * 1.5]);
         }//for col
    }
    else if(row == 3){
         for (var col = 0; col < 7; col++) {
             points.push([hexRadius * col * 1.75, hexRadius * row * 1.5]);
     	truePoints.push([hexRadius * col * Math.sqrt(3) +( 113 / 2), hexRadius * row * 1.5]);
         }//for col
    }

}//for row

var cornerPoints = new Object();
//var tile1 = new Object();
   cornerPoints.Tile1 = {
        "Node1":[],
        "Node2":[],
        "Node3":[],
        "Node4":[],
        "Node5":[],
        "Node6":[]
   };
   cornerPoints.Tile2 = {
        "Node1":[],
        "Node2":[],
        "Node3":[],
        "Node4":[],
        "Node5":[],
        "Node6":[]
   };
   cornerPoints.Tile3 = {
        "Node1":[],
        "Node2":[],
        "Node3":[],
        "Node4":[],
        "Node5":[],
        "Node6":[]
   };
   cornerPoints.Tile4 = {
        "Node1":[],
        "Node2":[],
        "Node3":[],
        "Node4":[],
        "Node5":[],
        "Node6":[]
   };
var jsonString= JSON.stringify(cornerPoints);
//Node1
cornerPoints.Tile1.Node1.push(hexRadius * col * Math.sqrt(3));
cornerPoints.Tile1.Node1.push(hexRadius * row + hexRadius);
//Node2
cornerPoints.Tile1.Node2.push(hexRadius * col * Math.sqrt(3));
cornerPoints.Tile1.Node2.push(hexRadius * row + hexRadius);
console.log(cornerPoints);
console.log(jsonString);



///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////

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
svg.append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
     .selectAll(".hexagon")
     .data(hexbin(points))
     .enter().append("circle")
     .attr("id", function(d,i) {
          return "circle" + i;
     })
     .attr("class", "hexagon")
     .attr("r", "20")
     .attr("cx", function(d,i){
          var nextX = truePoints[i];
          return nextX[0];
     })
     .attr("cy", function(d,i){
          var nextY = truePoints[i];
          return nextY[1];
     })
     .attr("display", function(d, i) {
          if(isWaterTile(i)) {
               return 'none';
          }
          else {
               return "inline";
          }
     })
     .style("fill-opacity", "0") //TODO: temporarily invisible
     .style("fill", function (d,i) { //function to choose and add random image tiles
          // Get the next number tile to display in the grid
         var nextTile = numberTiles[i];

         // Get the image to display for the next tile
         var nextImg =  imageMapper(nextTile.tileType);

         return nextImg;
    });

//TODO: add variables for hexagon properties: width, center-midpoint edge,
//      center-corner, center-points

// Draw hilighted circles to place settlement on button click

//TODO: create new array of corner points to make plotting the
//      "place settlement" circles easier

//Translate to Node1 position
svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("circle")
    .attr("class", "hexagon")
    .attr("r", "10")
    .attr("cx", function(d,i){
         var nextX = truePoints[i];
         return nextX[0];
    })
    .attr("cy", function(d,i){
         var nextY = truePoints[i];
         return nextY[1]-side_length;
    })
    .attr("display", function(d, i) {
         if(isWaterTile(i)) {
              return 'none';
         }
         else {
              return "inline";
         }
    })

   .attr("stroke", "blue")
   .attr("stroke-width", "2px")
   .style("fill", "transparent");

//Translate to Node2 position
svg.append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
     .selectAll(".hexagon")
     .data(hexbin(points))
     .enter().append("circle")
     .attr("class", "hexagon")
     .attr("r", "10")
     .attr("cx", function(d,i){
          var nextX = truePoints[i];
          return nextX[0] + inCircle_Radius;
     })
     .attr("cy", function(d,i){
          var nextY = truePoints[i];
          return nextY[1] - side_length/2;
     })
     .attr("display", function(d, i) {
          if(isWaterTile(i)) {
               return 'none';
          }
          else {
               return "inline";
          }
     })

    .attr("stroke", "red")
    .attr("stroke-width", "2px")
    .style("fill", "transparent");

//Translate to Node3 position
svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("circle")
    .attr("class", "hexagon")
    .attr("r", "10")
    .attr("cx", function(d,i){
         var nextX = truePoints[i];
         return nextX[0] + inCircle_Radius;
    })
    .attr("cy", function(d,i){
         var nextY = truePoints[i];
         return nextY[1] + side_length/2;
    })
    .attr("display", function(d, i) {
         if(isWaterTile(i)) {
              return 'none';
         }
         else {
              return "inline";
         }
    })

   .attr("stroke", "white")
   .attr("stroke-width", "2px")
   .style("fill", "transparent");

//Translate to Node4 position
svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
  .selectAll(".hexagon")
  .data(hexbin(points))
  .enter().append("circle")
  .attr("class", "hexagon")
  .attr("r", "10")
  .attr("cx", function(d,i){
       var nextX = truePoints[i];
       return nextX[0];
  })
  .attr("cy", function(d,i){
       var nextY = truePoints[i];
       return nextY[1] + side_length;
  })
  .attr("display", function(d, i) {
       if(isWaterTile(i)) {
            return 'none';
       }
       else {
            return "inline";
       }
  })

 .attr("stroke", "green")
 .attr("stroke-width", "2px")
 .style("fill", "transparent");

//Translate to Node5 position
svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
.selectAll(".hexagon")
.data(hexbin(points))
.enter().append("circle")
.attr("class", "hexagon")
.attr("r", "10")
.attr("cx", function(d,i){
   var nextX = truePoints[i];
   return nextX[0] - inCircle_Radius;
})
.attr("cy", function(d,i){
   var nextY = truePoints[i];
   return nextY[1] + side_length/2;
})
.attr("display", function(d, i) {
   if(isWaterTile(i)) {
        return 'none';
   }
   else {
        return "inline";
   }
})

.attr("stroke", "purple")
.attr("stroke-width", "2px")
.style("fill", "transparent");

//Translate to Node5 position
svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
.selectAll(".hexagon")
.data(hexbin(points))
.enter().append("circle")
.attr("class", "hexagon")
.attr("r", "10")
.attr("cx", function(d,i){
   var nextX = truePoints[i];
   return nextX[0] - inCircle_Radius;
})
.attr("cy", function(d,i){
   var nextY = truePoints[i];
   return nextY[1] - side_length/2;
})
.attr("display", function(d, i) {
   if(isWaterTile(i)) {
        return 'none';
   }
   else {
        return "inline";
   }
})

.attr("stroke", "black")
.attr("stroke-width", "2px")
.style("fill", "transparent");

////////////////////////////////////////////////////
//Images to place into hexagons and number tiles////
////////////////////////////////////////////////////
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




///////////////////////////////////////////////////////////////////////////
///// Function to calculate the line segments between two node numbers ////
///////////////////////////////////////////////////////////////////////////
//Which nodes are neighbours
// var neighbour =
// [
// 	[577,548], [578,579], [578,548], [578,549],[583,584], [583,554], [592,593], [593,563], [540,510], [541,510], [541,511],[542,511], [547,548], [548,517], [553,554], [553,523], [562,532], [563,564], [563,532], [563,533], [511,512], [511,482], [517,518], [517,488], [521,492], [522,523], [522,492], [522,493], [531,532], [532,502], [481,482], [482,451], [487,488], [487,457], [491,492], [491,461], [501,471], [502,503], [502,471], [502,472], [451,452], [452,422], [456,457], [457,427], [460,461], [460,431], [470,471], [470,441], [422,423], [423,392], [427,428], [427,397], [430,431], [430,400], [431,400], [440,441], [440,410], [392,393], [392,363], [394,365], [395,365], [395,366], [396,397], [396,366], [396,367], [398,369], [399,400], [399,369], [399,370], [400,401], [401,371], [409,410], [409,380], [413,384], [414,384], [362,363], [362,332], [363,332], [363,333], [364,365], [364,333], [364,334], [368,369], [368,338], [371,372], [372,341], [379,380], [379,349], [383,384], [383,353], [384,385], [384,354], [331,332], [332,302], [337,338], [338,308], [341,342], [341,312], [348,349], [349,319], [351,322], [352,353], [352,322], [352,323], [353,354], [353,324], [302,303], [302,272], [308,309], [308,278], [311,312], [312,281], [312,282], [313,282], [314,284], [315,284], [318,288], [319,320], [319,288], [319,289], [321,322], [322,291], [323,324], [324,293], [324,294], [325,294], [271,272], [271,242], [277,278], [278,248], [282,283], [283,284], [283,253], [283,254], [284,285], [285,255], [287,288], [287,258], [291,292], [292,262], [294,295], [295,265], [295,266], [296,266], [296,267], [297,267], [298,269], [299,269], [240,210], [241,242], [241,210], [242,211], [248,249], [249,218], [255,256], [256,225], [256,226], [257,258], [257,226], [257,227], [262,263], [262,232], [267,268], [268,269], [268,237], [268,238], [210,211], [211,212], [211,181], [211,182], [217,188], [218,219], [218,188], [218,189], [225,226], [225,196], [231,232], [231,202], [181,182], [182,151], [187,188], [187,157], [195,196], [196,165], [201,202], [202,171], [151,152], [151,122], [152,122], [152,123],[153,123], [155,126], [156,157], [156,126], [156,127], [165,166], [166,136], [166,137], [167,137], [170,141], [171,172], [171,141], [171,142], [121,122], [121,91], [123,124], [124,93], [124,94], [125,126], [125,94], [125,95], [137,138], [138,107], [138,108], [139,108], [139,109], [140,141], [140,109], [140,110], [90,91], [91,61], [91,62], [92,62], [92,63], [93,63], [106,77], [107,108], [107,77], [107,78], [63,64], [64,33], [76,77], [77,46], [33,34], [33,4], [46,47], [46,17], [3,4], [16,17]
// ];
//
// //Initiate some variables
// var Sqr3 = 1/Math.sqrt(3);
// var lineData = [];
// var Node1,
// 	Node2,
// 	Node1_xy,
// 	Node2_xy,
// 	P1,
// 	P2;
//
// //Calculate the x1, y1, x2, y2 of each line segment between neighbours
// for (var i = 0; i < neighbour.length; i++) {
// 	Node1 = neighbour[i][0];
// 	Node2 = neighbour[i][1];
//
// 	//An offset needs to be applied if the node is in an uneven row
//  	if (Math.floor(Math.floor((Node1/MapColumns)%2)) != 0) {
// 		Node1_xy = [(truePoints[Node1][0]+(hexRadius/(Sqr3*2))),truePoints[Node1][1]];
// 	}
// 	else {
// 		Node1_xy = [truePoints[Node1][0],truePoints[Node1][1]];
// 	}
//
// 	//An offset needs to be applied if the node is in an uneven row
// 	if (Math.floor(Math.floor((Node2/MapColumns)%2)) != 0) {
// 		Node2_xy = [(truePoints[Node2][0]+(hexRadius/(Sqr3*2))),truePoints[Node2][1]];
// 	}
// 	else {
// 		Node2_xy = [truePoints[Node2][0],truePoints[Node2][1]];
// 	}//else
//
// 	//P2 is the exact center location between two nodes
// 	P2 = [(Node1_xy[0]+Node2_xy[0])/2,(Node1_xy[1]+Node2_xy[1])/2]; //[x2,y2]
// 	P1 = Node1_xy; //[x1,x2]
//
// 	//A line segment will be drawn between the following two coordinates
// 	lineData.push([(P2[0] + Sqr3*(P1[1] - P2[1])),(P2[1] + Sqr3*(P2[0] - P1[0]))]); //[x3_top, y3_top]
// 	lineData.push([(P2[0] + Sqr3*(P2[1] - P1[1])),(P2[1] + Sqr3*(P1[0] - P2[0]))]); //[x3_bottom, y3_bottom]
// }//for i
//
// ///////////////////////////////////////////////////////////////////////////
// /////////////////// Draw the black line segments //////////////////////////
// ///////////////////////////////////////////////////////////////////////////
//
// var lineFunction = d3.svg.line()
// 		  .x(function(d) {return d[0];})
// 		  .y(function(d) {return d[1];})
// 		  .interpolate("linear");
//
// var Counter = 0;
// //Loop over the linedata and draw each line
// for (var i = 0; i < (lineData.length/2); i++) {
// svg.append("path")
// 	.attr("d", lineFunction([lineData[Counter],lineData[Counter+1]]))
// 	.attr("stroke", "black")
// 	.attr("stroke-width", 3)
// 	.attr("fill", "none");
//
// 	Counter = Counter + 2;
// } //for i
