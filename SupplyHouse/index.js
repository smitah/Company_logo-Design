var imagegrid = document.getElementById("imagegrid");

for (var i=0, len=grid.length; i<len; i++) {

   
     
     var para = document.createElement("tr");
     
    for (var j=0, len2=grid[i].length; j<len2; j++) {
   
   if(grid[i][j] == "x")
   {
   	var para_td = document.createElement("td");
   	var oImg = document.createElement("img");
	oImg.setAttribute('src', 'face.png');
	oImg.setAttribute('alt', 'na');
	oImg.style.width = '100%';
	oImg.style.height = '100%';
	oImg.setAttribute('class','animated zoomIn');
	para_td.appendChild(oImg);
	para.appendChild(para_td);
   }
   else
   {
   	var para_td = document.createElement("td");
   	para_td.innerHTML = " ";
   	para.appendChild(para_td);
   }

    }
    imagegrid.appendChild(para);
}