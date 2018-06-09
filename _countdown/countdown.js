

var minutes = 0;								// déclaration et initialisation des minutes et secondes
var secondes = 0;
var isLaunch = 0;								//et deux variable utilisé comme boléen
var isPause = false;


function bip () {
    var sound = document.getElementById("beep");
            sound.play();
}

function affGoku (){

      elmt = document.getElementById("wait");

   if(elmt.style.display == "none")
      elmt.style.display = "";

   else
      elmt.style.display = "none";
}

function pause(){
	
	if(isLaunch == 1){
		isLaunch = 0;
		window.clearInterval(conte);
	}
	else if(isLaunch == 0){
		isLaunch = 1;
		conte = setInterval(deconte,1000);
		deconte();
	}
}

function remiseAZ (){	//Reinitialisation des variables temps
	secondes = 0;
	minutes = 0;
}

function time (){
	if(document.getElementById("secondes").value <= 60 )
		secondes = document.getElementById("secondes").value;
	if (document.getElementById("minutes").value != "")
		minutes = document.getElementById("minutes").value;
	
}

function affiche(){
	if (minutes < 10)	//gestion d'affichage du temps avec la contrainte du 00:00//
	{
		document.getElementById('affichage').innerHTML = '0' + minutes; 
			if (secondes < 10)
				document.getElementById('affichage').innerHTML += ' : 0' +secondes;
			else
				document.getElementById('affichage').innerHTML += ' : ' +secondes;

	}
	else if (minutes >= 10){
		if(secondes < 10)
			document.getElementById('affichage').innerHTML = minutes + ' : 0' +secondes;
		else
			document.getElementById('affichage').innerHTML = minutes + ' : ' +secondes;

	}

}

function deconte (){		//////// FONCTIONNEMENT DECOMPTE //////////////////
	 	
 		if (secondes >= 0 && minutes >= 0)	//condition d'affichage
 			affiche();
 		secondes--;
 		
	 	if((minutes > 0) && (secondes < 0))		//condition de décrémentation de minutes
	 	{
 			minutes--;
 			secondes = 59;
 		}
 		else if (minutes == 0 && secondes < 0){		//condition d'arret
			window.clearInterval(conte);			//effacement de l'interval
			isLaunch = 0;
		} 	
}

function launch() 			//création de la fonction de lancement du script de décompte.
{	
	time();					//appel de la fonction d'affectation des variables temps	
	if (((secondes >= 0) && (minutes >= 0)) && (isLaunch == 0) && (secondes <= 59 ))	//condition de lancement du compte a rebours
	{
		isLaunch = 1;
		conte = setInterval(deconte,1000);												//initialisation de l'interval de décompte
		deconte();																		//lancement du décompte
	}
	
}
