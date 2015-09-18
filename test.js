/*var startUp = function(){
  alert("body finished loading");
}

var hideMe = function()
{
  $("p").fadeOut(3000);
}

var showMe = function()
{
  $("p").fadeIn(2000);
}*/
var boxStatus = ["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"];
//var easingFunction = ["swing","easeInBounce", "easeOutBounce"];
var buttonClicked = function(n, easing){
	var pageWidth = $("body").width();
	var boxWidth = 150;
	var a = pageWidth - boxWidth;
	var id = "#button" + n.toString();
	//console.log(id);
	if(boxStatus[n] == "left"){
		$(id).animate({marginLeft : (pageWidth - boxWidth) + 'px'}, 'slow', easing);
		boxStatus[n] = "right";
	}else{
		$(id).animate({marginLeft : '0px'}, 'slow', easing);
		boxStatus[n] = "left";
	}
	
}
