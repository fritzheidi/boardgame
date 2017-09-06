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

///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////
var svg;
drawBoard();

// If the build settlement button is clicked update this value
var isShowingSettlementPreview = false;

// The user is currently choosing a building location
var isBuildingSettlement = false;

// If the build road button is clicked update this value
var isShowingRoadPreview = false;

// The user is currently choosing a building location
var isBuildingRoad = false;

// Draw hilighted circles to place settlement on button click

//Build javascript Object
var cornerObj = {};

//Build array of corner points
var cornerArray = [];
findCorners();
makeCornerObj();
console.log(Object.keys(cornerObj).length);

//TODO: Available spots array sent from JOE
var availSpots = [
	0, 1, 2, 3, 4, 5, 6,
	7, 8, 9, 10, 11, 12, 13, 14, 15,
	16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
	26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
	38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
	50, 51, 52, 53
];


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

//On hover of button show the hiliteCorners
d3.select("#hiliteCorners")
    .on("mouseover", function(d) {
	    if(!isBuildingSettlement) {
		   hiliteCorners();
		   isShowingSettlementPreview = true;
	    }
    })
    .on("mouseout", function(d){
	    if(!isBuildingSettlement && isShowingSettlementPreview) {
		    document.getElementById("circlz").remove();
	    }

    })
    .on("click",function(d) {

	    // Cancel Building
	    if(isBuildingSettlement) {

		    if(isShowingSettlementPreview) {
		    // Undraw the preview locations
		    document.getElementById("circlz").remove();
		    isShowingSettlementPreview = false;
	    }

		    // Change the name of the button back to 'Build Settlement'
		    document.getElementById("hiliteCorners").innerHTML = "Build Settlement";

		    // The user is no longer trying to build a settlment
	 	    isBuildingSettlement = false;
	    }
	    // Building
	    else {

		    if(!isShowingSettlementPreview) {
			    hiliteCorners();
			    isShowingSettlementPreview = true;
		    }
		    	// Change the name of the button to 'Cancel Build'
		  	document.getElementById("hiliteCorners").innerHTML = "Cancel Build";

			// Flip the boolean
			isBuildingSettlement = true;
	    }
    });


// hiliteCorners():  Draw hilite corners
function hiliteCorners(){
d3.select("#mySvg").append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of circles
    .attr("id", "circlz");

    //Draw all the circles!!!
    //TODO: eventually Joe will pass me an array of strings that tell me which tile and node to plot
    for(var index = 0; index<availSpots.length;index++){
         d3.select("#circlz").append("circle")
         .attr("r", "15")
         .attr("cx", getAvailSpot("x", index))
         .attr("cy", getAvailSpot("y", index))
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
// Once this is drawn we wait for the player to pick a corner...
// When they click on one, we will hide the nodes
}

//Check if one of the corners clicked. Then replace with house and remove circles

//On hover of button show the hiliteEdges
d3.select("#hiliteEdges")
    .on("mouseover", function(d) {
	    if(!isBuildingRoad) {
		   hiliteEdges();
		   isShowingRoadPreview = true;
	    }
    })
    .on("mouseout", function(d){
	    if(!isBuildingRoad && isShowingRoadPreview) {
		    document.getElementById("linz").remove();
	    }

    })
    .on("click",function(d) {

	    // Cancel Building
	    if(isBuildingRoad) {

		    if(isShowingRoadPreview) {
		    // Undraw the preview locations
		    document.getElementById("linz").remove();
		    isShowingRoadPreview = false;
	    }

		    // Change the name of the button back to 'Build Settlement'
		    document.getElementById("hiliteEdges").innerHTML = "Build Road";

		    // The user is no longer trying to build a settlment
	 	    isBuildingRoad = false;
	    }
	    // Building
	    else {

		    if(!isShowingRoadPreview) {
			    hiliteEdges();
			    isShowingRoadPreview = true;
		    }
		    	// Change the name of the button to 'Cancel Build'
		  	document.getElementById("hiliteEdges").innerHTML = "Cancel Build";

			// Flip the boolean
			isBuildingRoad = true;
	    }
    });

// Hilight the edges to show legal placement of a road
function hiliteEdges() {
     d3.select("#mySvg").append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")") //start of placement of edges
         .attr("id", "linz");
     var lineFunction = d3.svg.line()
                 .x(function(d) {return d[0];})
                 .y(function(d) {return d[1];})
                 .interpolate("linear");

     var Counter = 0;
     //Loop over the linedata and draw each line
     for (var i = 0; i < (lineData.length/2); i++) {
     d3.select("#linz").append("path")
          .attr("d", lineFunction([lineData[Counter],lineData[Counter+1]]))
          .attr("stroke", "white")
          .attr("stroke-width", 5)
          .attr("fill", "none")
		.on("mouseover", function(d) {
              d3.select(this).style("filter", "url(#glow)").attr("stroke-width", 8);
          })
          .on("mouseout", function(d) {
              d3.select(this).style("filter", "none").attr("stroke-width", 5);
          })
          .on("click", function(e){
              alert('Place Road here?');
          });

          Counter = Counter + 2;
     } //for i
}//hiliteEdges()

//Create lineData
var lineData = [];

//Add T1N1 and T1N2 as line coordinates
lineData.push(cornerObj[0]);
lineData.push(cornerObj[1]);
console.log(lineData);

//Draw line between two corner points
//hiliteEdges();
