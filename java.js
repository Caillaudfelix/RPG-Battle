var battaqueK = document.getElementById("battaqueK");
var attaquePerso = 25;
var cibleJoueur = 0;

bcible1.onclick = function(){
	document.getElementById("stats1").style.visibility = "visible";
	document.getElementById("stats2").style.visibility = "hidden";
	document.getElementById("stats3").style.visibility = "hidden";
	cibleJoueur = 1;
}
bcible2.onclick = function(){
	document.getElementById("stats2").style.visibility = "visible";
	document.getElementById("stats1").style.visibility = "hidden";
	document.getElementById("stats3").style.visibility = "hidden";
	cibleJoueur = 2;
}
bcible3.onclick = function(){
	document.getElementById("stats3").style.visibility = "visible";
	document.getElementById("stats1").style.visibility = "hidden";
	document.getElementById("stats2").style.visibility = "hidden";
	cibleJoueur = 3;
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

battaqueK.onclick = function(){
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 = (pvM1 - attaquePerso);
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 = (pvM2 - attaquePerso);
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 = (pvM3 - attaquePerso);
		document.getElementById("pvMonstre3").innerHTML = pvM3;
		if(pvM3 <=0){
			document.getElementById("boutonCible3").disabled = true;
			document.getElementById("monstre3").style.visibility = "hidden";
			document.getElementById("stats3").style.visibility = "hidden";
		}
	}
	if (pvM1 <= 0 && pvM2 <= 0 && pvM3 <= 0){
		document.getElementById("infobullevictoire").style.visibility = "visible";
	}
}