battaqueK.onclick = function(){
	attaquePerso = 25;
	pv = document.getElementById("pvMonstre1").innerHTML;
	pv = (pv - attaquePerso);
	document.getElementById("pvMonstre1").innerHTML = pvMonstre1;
	if (pvMonstre1 == 0){
		document.getElementById("monstre1").style.visibility = "hidden";
	}
}

document.getElementById("monstre1").onmouseover = function(){
    document.getElementById("stats1").style.visibility = "visible";
}
document.getElementById("monstre1").onmouseout = function(){
    document.getElementById("stats1").style.visibility = "hidden";
}
  
document.getElementById("monstre2").onmouseover = function(){
    document.getElementById("stats2").style.visibility = "visible";
}
document.getElementById("monstre2").onmouseout = function(){
    document.getElementById("stats2").style.visibility = "hidden";
}

document.getElementById("monstre3").onmouseover = function(){
    document.getElementById("stats3").style.visibility = "visible";
}
document.getElementById("monstre3").onmouseout = function(){
    document.getElementById("stats3").style.visibility = "hidden";
}