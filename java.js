var attaquePerso = 25;
var defensePerso = 8;
var specialK = 33;
var coutManaK = 12;
var specialC = 54;
var coutManaC = 16;
var specialM = 67;
var coutManaM = 16;
var specialA = 49;
var coutManaA = 15;
var cibleJoueur = 0;

bcible1.onclick = function(){
	document.getElementById("bspecialK").disabled = false;
	document.getElementById("bspecialC").disabled = false;
	document.getElementById("bspecialM").disabled = false;
	document.getElementById("bspecialA").disabled = false;
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	manaM = document.getElementById("manaM").innerHTML;
	if (manaM < coutManaM){
		document.getElementById("bspecialM").disabled = true;
	}
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
	document.getElementById("stats1").style.visibility = "visible";
	document.getElementById("stats2").style.visibility = "hidden";
	document.getElementById("stats3").style.visibility = "hidden";
	cibleJoueur = 1;
}

bcible2.onclick = function(){
	document.getElementById("bspecialK").disabled = false;
	document.getElementById("bspecialC").disabled = false;
	document.getElementById("bspecialM").disabled = false;
	document.getElementById("bspecialA").disabled = false;
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	manaM = document.getElementById("manaM").innerHTML;
	if (manaM < coutManaM){
		document.getElementById("bspecialM").disabled = true;
	}
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
	document.getElementById("stats2").style.visibility = "visible";
	document.getElementById("stats1").style.visibility = "hidden";
	document.getElementById("stats3").style.visibility = "hidden";
	cibleJoueur = 2;
}

bcible3.onclick = function(){
	document.getElementById("bspecialK").disabled = false;
	document.getElementById("bspecialC").disabled = false;
	document.getElementById("bspecialM").disabled = false;
	document.getElementById("bspecialA").disabled = false;
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	manaM = document.getElementById("manaM").innerHTML;
	if (manaM < coutManaM){
		document.getElementById("bspecialM").disabled = true;
	}
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
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
		pvM1 -= attaquePerso;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= attaquePerso;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= attaquePerso;
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

battaqueC.onclick = function(){
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= attaquePerso;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= attaquePerso;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= attaquePerso;
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

battaqueM.onclick = function(){
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= attaquePerso;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= attaquePerso;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= attaquePerso;
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

battaqueA.onclick = function(){
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= attaquePerso;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= attaquePerso;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= attaquePerso;
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

bdefenseK.onclick = function(){
	defenseK = document.getElementById("defK").innerHTML;
	defenseK = (+defenseK + +defensePerso);
	document.getElementById("defK").innerHTML = defenseK;
	document.getElementById("bdefenseK").disabled = true;
}

bdefenseC.onclick = function(){
	defenseC = document.getElementById("defC").innerHTML;
	defenseC = (+defenseC + +defensePerso);
	document.getElementById("defC").innerHTML = defenseC;
	document.getElementById("bdefenseC").disabled = true;
}

bdefenseM.onclick = function(){
	defenseM = document.getElementById("defM").innerHTML;
	defenseM = (+defenseM + +defensePerso);
	document.getElementById("defM").innerHTML = defenseM;
	document.getElementById("bdefenseM").disabled = true;
}

bdefenseA.onclick = function(){
	defenseA = document.getElementById("defA").innerHTML;
	defenseA = (+defenseA + +defensePerso);
	document.getElementById("defA").innerHTML = defenseA;
	document.getElementById("bdefenseA").disabled = true;
}

bspecialK.onclick = function(){
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= specialK;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		manaK = document.getElementById("manaK").innerHTML;
		manaK -= coutManaK;
		document.getElementById("manaK").innerHTML = manaK;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= specialK;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		manaK = document.getElementById("manaK").innerHTML;
		manaK -= coutManaK;
		document.getElementById("manaK").innerHTML = manaK;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	manaK = document.getElementById("manaK").innerHTML;
	if (manaK < coutManaK){
		document.getElementById("bspecialK").disabled = true;
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= specialK;
		document.getElementById("pvMonstre3").innerHTML = pvM3;
		manaK = document.getElementById("manaK").innerHTML;
		manaK -= coutManaK;
		document.getElementById("manaK").innerHTML = manaK;
		if (pvM3 <=0){
			document.getElementById("boutonCible3").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre3").style.visibility = "hidden";
			document.getElementById("stats3").style.visibility = "hidden";
		}
	}
	if (pvM1 <= 0 && pvM2 <= 0 && pvM3 <= 0){
		document.getElementById("infobullevictoire").style.visibility = "visible";
	}
}

bspecialC.onclick = function(){
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= specialC;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		manaC = document.getElementById("manaC").innerHTML;
		manaC -= coutManaC;
		document.getElementById("manaC").innerHTML = manaC;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= specialC;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		manaC = document.getElementById("manaC").innerHTML;
		manaC -= coutManaC;
		document.getElementById("manaC").innerHTML = manaC;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	manaC = document.getElementById("manaC").innerHTML;
	if (manaC < coutManaC){
		document.getElementById("bspecialC").disabled = true;
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= specialC;
		document.getElementById("pvMonstre3").innerHTML = pvM3;
		manaC = document.getElementById("manaC").innerHTML;
		manaC -= coutManaC;
		document.getElementById("manaC").innerHTML = manaC;
		if (pvM3 <=0){
			document.getElementById("boutonCible3").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre3").style.visibility = "hidden";
			document.getElementById("stats3").style.visibility = "hidden";
		}
	}
	if (pvM1 <= 0 && pvM2 <= 0 && pvM3 <= 0){
		document.getElementById("infobullevictoire").style.visibility = "visible";
	}
}

bspecialM.onclick = function(){
	cibleSoin = document.getElementById("pvC").innerHTML;
	cibleSoin = (+cibleSoin + +specialM);
	document.getElementById("pvC").innerHTML = cibleSoin;
	document.getElementById("bspecialM").disabled = true;
}

bspecialA.onclick = function(){
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
	if (cibleJoueur == 1){
		pvM1 = document.getElementById("pvMonstre1").innerHTML;
		pvM1 -= specialA;
		document.getElementById("pvMonstre1").innerHTML = pvM1;
		manaA = document.getElementById("manaA").innerHTML;
		manaA -= coutManaA;
		document.getElementById("manaA").innerHTML = manaA;
		if (pvM1 <= 0){
			document.getElementById("boutonCible1").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre1").style.visibility = "hidden";
			document.getElementById("stats1").style.visibility = "hidden";
		}
	}	
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
	if (cibleJoueur == 2){
		pvM2 = document.getElementById("pvMonstre2").innerHTML;
		pvM2 -= specialA;
		document.getElementById("pvMonstre2").innerHTML = pvM2;
		manaA = document.getElementById("manaA").innerHTML;
		manaA -= coutManaA;
		document.getElementById("manaA").innerHTML = manaA;
		if (pvM2 <= 0){
			document.getElementById("boutonCible2").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre2").style.visibility = "hidden";
			document.getElementById("stats2").style.visibility = "hidden";
		}
	}
	manaA = document.getElementById("manaA").innerHTML;
	if (manaA < coutManaA){
		document.getElementById("bspecialA").disabled = true;
	}
	if (cibleJoueur == 3){
		pvM3 = document.getElementById("pvMonstre3").innerHTML;
		pvM3 -= specialA;
		document.getElementById("pvMonstre3").innerHTML = pvM3;
		manaA = document.getElementById("manaA").innerHTML;
		manaA -= coutManaA;
		document.getElementById("manaA").innerHTML = manaA;
		if (pvM3 <=0){
			document.getElementById("boutonCible3").disabled = true;
			document.getElementById("bspecialK").disabled = true;
			document.getElementById("bspecialC").disabled = true;
			document.getElementById("bspecialM").disabled = true;
			document.getElementById("bspecialA").disabled = true;
			document.getElementById("monstre3").style.visibility = "hidden";
			document.getElementById("stats3").style.visibility = "hidden";
		}
	}
	if (pvM1 <= 0 && pvM2 <= 0 && pvM3 <= 0){
		document.getElementById("infobullevictoire").style.visibility = "visible";
	}
}