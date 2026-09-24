const taux_echange={
	CAD:1.0,
	USD:0.74,
	EUR:0.68
};
convertisseur=document.getElementById("convertisseur_devise");
montant=document.getElementById("montant");
valdevisein=document.getElementById("devise_initiale");
valdevisesou=document.getElementById("devise_souhaitee");
zoneresultat=document.getElementById("resultat");
convertisseur.addEventListener("submit", function(event){
	event.preventDefault();
    montantt=parseFloat(montant.value);
	devisein=valdevisein.value; 
	devisesou=valdevisesou.value;
	if(isNaN(montantt)||montantt<=0){
		zoneresultat.textContent="Veuillez entrer un nombre valide, supérieur à 0";
		zoneresultat.style.color="red";
	return;	
	}
	montantcad=montantt/taux_echange[devisein];
	montantconverti=montantcad*taux_echange[devisesou];
	zoneresultat.style.color="black";
	zoneresultat.textContent=`${montantt} ${devisein} = ${montantconverti.toFixed(2)} ${devisesou}`;
});