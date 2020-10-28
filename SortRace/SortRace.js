/*
class insertion{
}
class golds{

}
class merge{
}
class quick{
}
*/


function setup() {
	createCanvas(1320, 800);
    //textFont('Helvetica');   <-is giving an error
    //extSize(12);
    textAlign(CENTER, CENTER);
}


var insertion = "Insertion Sort";
var golds = "Gold's Poresort";
var merge = "Mergesort" ;
var quick = "Quicksort";

//draws the grid 
//(column 1= Insertion Sort, 4= Gold's Poresort, 7= Mergesort,10=quicksort)
function draw() {
	background(239, 204, 239);
	for (var x = 0; x < width; x += 800 / 40) {
		for (var y = 0; y < height; y += height /40) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}

fill(216, 201, 216);
rect(15*20, 0, 40, 800);
rect(15*20*2+40, 0, 40, 800);
rect(15*20*3+80, 0, 40, 800);

//labels the grid
var x=10;
var y=10;;

  	for (var i = 0; i < 15; i += 1) {
        fill(0);
		if (i<insertion.length) { text(insertion[i], x+20*i +17*20*0, y)};
        if (i<golds.length){text(golds[i], (x+20*i+17*20*1), y)};
        if (i<merge.length){text(merge[i], (x+20*i+17*20*2), y)};
        if (i<quick.length){text(quick[i], (x+20*i+17*20*3), y)};
      
      
	}

//calls to the various quicksort functions, cycle through and display

}
