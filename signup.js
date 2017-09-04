//6 colors to choose from
var color = ["#F3DBB4", "#EDA45F", "#44242B", "#7A756B", "#B37E5E", "#85935E", "#7E3D3A"];

function randColor(){
     var x = Math.floor((Math.random() * 6) + 0);
     return color[x];
}

var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 3250);

function change() {
  d3.selectAll("#hexz")
    .transition()
    .duration(1750)
    .style("fill", function(){
         return randColor();
    });

  //counter++;
  //if (counter >= text.length) {
  //  counter = 0;
  //}
}

///////////////////////////////////////////////////////////////////////////
////////////// Initiate SVG and create hexagon centers ////////////////////
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

//svg sizes and margins
var margin = {
    top: 30,
    right: 20,
    bottom: 20,
    left: 50
};

var width = 850;
var height = 850;

//The number of columns and rows of the heatmap
var MapColumns = 25,
	MapRows = 25;

//The maximum radius the hexagons can have to still fit the screen
var hexRadius = 70;

//Set the new height and width of the SVG based on the max possible
width = MapColumns*hexRadius*Math.sqrt(3);
heigth = MapRows*1.5*hexRadius+0.5*hexRadius;

//Set the hexagon radius
var hexbin = d3.hexbin()
    	       .radius(hexRadius);

//Calculate the center positions of each hexagon
var points = [];
for (var i = 0; i < MapRows; i++) {
    for (var j = 0; j < MapColumns; j++) {
        points.push([hexRadius * j - 1 * 1.75, hexRadius * i * 1.5]);
    }//for j
}//for i

//Create SVG element
var svg = d3.select("#hexagons").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////

//Start drawing the hexagons
svg.append("g")
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("path")
    .attr("id", "hexz")
    .attr("class", "hexagon")
    .attr("d", function (d) {
		return "M" + d.x + "," + d.y + hexbin.hexagon();
	})
    .attr("stroke", "white")
    .attr("stroke-width", "8px")
    .style("fill", function(){
         return randColor();
    })
	//.on("mouseover", mover)
	//.on("mouseout", mout)
     //Apply to your element(s)
	.style("filter", "url(#glow)");
	;

     //Container for the gradients
     var defs = svg.append("defs");

     //Filter for the outside glow
     var filter = defs.append("filter")
     	.attr("id","glow");
     filter.append("feGaussianBlur")
     	.attr("stdDeviation","1.7")
     	.attr("result","coloredBlur");
     // var feMerge = filter.append("feMerge");
     // feMerge.append("feMergeNode")
     // 	.attr("in","coloredBlur");
     // feMerge.append("feMergeNode")
     // 	.attr("in","SourceGraphic");
