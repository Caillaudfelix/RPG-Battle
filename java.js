var battaqueK = document.getElementById("battaqueK");
var attaquePerso = 25;

battaqueK.onclick = function(){
	pvM1 = document.getElementById("pvMonstre1").innerHTML;
	pvM1 = (pvM1 - attaquePerso);
	document.getElementById("pvMonstre1").innerHTML = pvM1;
	if (pvM1 <= 0){
		document.getElementById("monstre1").style.visibility = "hidden";
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 = (pvM2 - attaquePerso);
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("monstre2").style.visibility = "hidden";
			pvM3 = document.getElementById("pvMonstre3").innerHTML;
			pvM3 = (pvM3 - attaquePerso);
			document.getElementById("pvMonstre3").innerHTML = pvM3;
			if(pvM3 <=0){
				document.getElementById("monstre3").style.visibility = "hidden";
				document.getElementById("mvictoire").style.visibility = "visible";
			}
		}
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