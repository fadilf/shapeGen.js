function colorGen() {
    var color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
	return color;
}
$(document).ready(function(){
	var no = $("i[shape]").length;
	$("i[shape]").each(function(){
		$(this).css("display","inline-block");
		var shape = $(this).attr("shape");
		var bg = $(this).attr("color");
		var size = $(this).attr("size");
		var cindex = size.indexOf(",");
		if (typeof bg == typeof undefined || bg == false) {
			var bg = "#000";
		} else if (bg == "random") {
			bg = colorGen();
		}
		
		
		// Ellipses and Rectangles
		if(shape == "oval" || shape == "rec") {
			$(this).css("background",bg);
			if(cindex == -1) {
				$(this).css({
					"height": size,
					"width": size
				});
			} else {
				var dArray = size.split(",");
				$(this).css({
					"height": dArray[0],
					"width": dArray[1],
				});
			}
		}
		
		
		// Triangles
		else if(shape == "tri"){
			var dir = $(this).attr("dir");
			var size2 = Math.round(size.slice(0,-2)*113.3/200);
			var unit = size.slice(-2);
			var x = size + " solid " + bg;
			var x2 = size2 + unit + " solid transparent";
			var x3 = size + " solid transparent";
			if (dir == "s") {
				$(this).css({
					"border-top": x,
					"border-left": x2,
					"border-right": x2
				});
			} else if (dir == "e") {
				$(this).css({
					"border-top": x2,
					"border-bottom": x2,
					"border-left": x
				});
			} else if (dir == "w") {
				$(this).css({
					"border-top": x2,
					"border-bottom": x2,
					"border-right": x
				});
			} else if (dir == "ne") {
				$(this).css({
					"border-top": x,
					"border-left": x3
				});
			} else if (dir == "nw") {
				$(this).css({
					"border-top": x,
					"border-right": x3
				});
			} else if (dir == "se") {
				$(this).css({
					"border-bottom": x,
					"border-left": x3
				});
			} else if (dir == "sw") {
				$(this).css({
					"border-bottom": x,
					"border-right": x3
				});
			} else {
				$(this).css({
					"border-bottom": x,
					"border-left": x2,
					"border-right": x2
				});
			}
		}
		
		
		// Trapeziums
		else if (shape == "tra") {
			var dArray = size.split(",");
			var top = eval(dArray[0].slice(0,-2));
			var unit = dArray[0].slice(-2);
			var bottom = eval(dArray[1].slice(0,-2));
			var height = dArray[2];
			if(top<bottom) {
				var brdr = (Math.round(bottom-top)/2)+unit;
				$(this).css({
					"width": top+unit,
					"border-bottom": height+"  solid "+bg,
					"border-left": brdr+" solid transparent",
					"border-right": brdr+" solid transparent"
				});
			} else {
				var brdr = (Math.round(top-bottom)/2)+unit;
				$(this).css({
					"width": bottom+unit,
					"border-top": height+"  solid "+bg,
					"border-left": brdr+" solid transparent",
					"border-right": brdr+" solid transparent"
				});
			}
		}
	});
	$("[br]").css("display","block");
	$("[shape='oval']").css("border-radius","50%");
});