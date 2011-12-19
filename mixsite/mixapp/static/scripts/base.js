(function (mixapp, undefined) {
	
	function setTableCellSize() {
		// find the biggest possible width/height
		var maxWidth = Math.floor(window.innerWidth * 0.8 * 0.25);
		var maxHeight = Math.floor(window.innerHeight * 0.7 * (1/3));
		var maxSide = maxWidth;
		if(maxHeight < maxWidth) {
			maxSide = maxHeight;
		}
		
		// set the size of the table cells
		var table = document.getElementById("gridTable");
		findCellsAndSetSide(table, maxSide);
		
		// set the size of the page to match the size of the grid
		document.getElementById("page").style.width = maxSide * 4 + "px";
	}
	mixapp.util.registerOnloadFunction(setTableCellSize); // call this function on load
	
	function findCellsAndSetSide(node, side) {
		// check if this node is a cell
		if(node.nodeName == "TD") {
			// set the size
			node.style.width = side + "px";
			node.style.height = side + "px";
			return; // exit here
		}
		
		// as this node is not a cell, look inside it for more nodes and check them
		for(var i = 0; i < node.childNodes.length; i++) {
			var nextNode = node.childNodes[i];
			findCellsAndSetSide(nextNode, side); // check each child node
		}
	}
	
}(window.mixapp = window.mixapp || {}));