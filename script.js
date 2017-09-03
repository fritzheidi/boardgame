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
var hexWidth = inCircle_Radius * 2;
//Set the new height and width based on the max possible
width = MapColumns*hexRadius*Math.sqrt(3);
height = MapRows*1.5*hexRadius+0.5*hexRadius;

//Set the hexagon radius
var hexbin = d3.hexbin()
    .radius(hexRadius);


//Calculate the center positions of each hexagon
var points = [];
// Example:  cornerPoints = [Node1:[x,y] , Node2:[x,y] , Node3:[x,y] , Node4:[x,y] , Node5:[x,y] , Node6:[x,y]]
for (var row = 0; row < MapRows; row++) {
    if(row == 0 || row == 6){
         for (var col = 0; col < 4; col++) {
             points.push([hexRadius * (col+2) * 1.75, hexRadius * row * 1.5]);
     	}//for col
    }
    else if(row == 1 || row == 5){
         for (var col = 0; col < 5; col++) {
             points.push([hexRadius * (col + 1) * 1.75, hexRadius * row * 1.5]);
     	}//for col
    }
    else if(row == 2 || row == 4){
         for (var col = 0; col < 6; col++) {
             points.push([hexRadius * (col+1) * 1.75, hexRadius * row * 1.5]);
     	}//for col
    }
    else if(row == 3){
         for (var col = 0; col < 7; col++) {
             points.push([hexRadius * col * 1.75, hexRadius * row * 1.5]);
     	}//for col
    }

}//for row

//TODO: loop to add corner points
var truePoints = [];
// Example:  cornerPoints = [Node1:[x,y] , Node2:[x,y] , Node3:[x,y] , Node4:[x,y] , Node5:[x,y] , Node6:[x,y]]
for (var row = 0; row < MapRows; row++) {
    if(row == 0 || row == 6){
         for (var col = 0; col < 4; col++) {
             truePoints.push([(hexRadius * (col+2) * Math.sqrt(3)), (hexRadius * row * 1.5) - side_length]);//push N1 for fisrt last rows
         }//for col
    }
    else if(row == 1 || row == 5){
         for (var col = 0; col < 5; col++) {
             truePoints.push([((hexRadius * (col) * Math.sqrt(3)) +(hexWidth + inCircle_Radius)), (hexRadius * row * 1.5) - side_length]);//push N1 for 2nd and 6th row
             //truePoints.push([(hexRadius * (col) * Math.sqrt(3)) +(hexWidth + inCircle_Radius) , (hexRadius * row * 1.5)]);//push N2
         }//for col
    }
    else if(row == 2 || row == 4){
         for (var col = 0; col < 6; col++) {
             truePoints.push([(hexRadius * (col+1) * Math.sqrt(3)), (hexRadius * row * 1.5) - side_length]);//N1 for row 3 and 5
         }//for col
    }
    else if(row == 3){
         for (var col = 0; col < 7; col++) {
             truePoints.push([(hexRadius * col * Math.sqrt(3) +(inCircle_Radius)), (hexRadius * row * 1.5) - side_length]);//N1 for row 4

         }//for col
    }

}//for row

//TODO: loop to add corner points
var centers = [];
// Example:  cornerPoints = [Node1:[x,y] , Node2:[x,y] , Node3:[x,y] , Node4:[x,y] , Node5:[x,y] , Node6:[x,y]]
for (var row = 0; row < MapRows; row++) {
    if(row == 0 || row == 6){
         for (var col = 0; col < 4; col++) {
             centers.push([(hexRadius * (col+2) * Math.sqrt(3)), (hexRadius * row * 1.5)]);//push N1 for fisrt last rows
         }//for col
    }
    else if(row == 1 || row == 5){
         for (var col = 0; col < 5; col++) {
             centers.push([((hexRadius * (col) * Math.sqrt(3)) +(hexWidth + inCircle_Radius)), (hexRadius * row * 1.5)]);//push N1 for 2nd and 6th row
             //truePoints.push([(hexRadius * (col) * Math.sqrt(3)) +(hexWidth + inCircle_Radius) , (hexRadius * row * 1.5)]);//push N2
         }//for col
    }
    else if(row == 2 || row == 4){
         for (var col = 0; col < 6; col++) {
             centers.push([(hexRadius * (col+1) * Math.sqrt(3)), (hexRadius * row * 1.5)]);//N1 for row 3 and 5
         }//for col
    }
    else if(row == 3){
         for (var col = 0; col < 7; col++) {
             centers.push([(hexRadius * col * Math.sqrt(3) +(inCircle_Radius)), (hexRadius * row * 1.5)]);//N1 for row 4

         }//for col
    }

}//for row

//var dataArr = hexbin.data(truePoints);
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

$('#generateBoard').addClass('disabled');

} // drawBoard()

//TODO: add variables for hexagon properties: width, center-midpoint edge,
//      center-corner, center-points

// Draw hilighted circles to place settlement on button click

function toggler(divId) {
    $("#" + divId).toggle();
}

//Build javascript Object
var cornerObj = {};
var cornerObj2 = {};

//Build array of corner points
var cornerArray = [];
findCorners();
makeCornerObj();
console.log(cornerObj);
console.log(cornerObj2);

// hiliteCorners():  Draw hilite corners
function hiliteCorners(){
d3.select("#mySvg").append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
    .attr("id", "circlz");

    //Draw all the circles!!!
    //TODO: eventually Joe will pass me an array of strings that tell me which tile and node to plot
    for(var index = 0; index<cornerArray.length;index++){
         d3.select("#circlz").append("circle")
         .attr("r", "15")
         .attr("cx", function(d){
              var nextX = cornerArray[index];
              return nextX[0];
         })
         .attr("cy", function(d){
              var nextY = cornerArray[index];
              return nextY[1];
         })
        .attr("stroke", "white")
        .attr("stroke-width", "1px")
        .style("fill-opacity", "0.3")
        .on("mouseover", function(d) {
            d3.select(this).attr("r", 18).style("fill-opacity", "0.6");
        })
        .on("mouseout", function(d) {
            d3.select(this).attr("r", 15).style("fill-opacity", "0.3");
        })
        .on("click", function(e){
            alert('Place Settlement here?');
        })
        //Apply to your element(s)
        .style("filter", "url(#glow)")
        .style("fill", "white");
     }

	$('#hiliteCorners').addClass('disabled');
// Once this is drawn we wait for the player to pick a corner...
// When they click on one, we will hide the nodes
}

//Check if one of the corners clicked. Then replace with house and remove circles
