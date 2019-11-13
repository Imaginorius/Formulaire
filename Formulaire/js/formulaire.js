var nbcarac = document.getElementById('carac');
var dispcarac= document.getElementById('dispnbchar');

/* changer de page */
function changepage() {
    
    var count= nbcarac.value.length;
   if(count>=10) {
     document.getElementById('diaporama').style.marginLeft="-100%";

   }
}


/* Afficher le nombre de caractère*/
function countchar() {
    var count= nbcarac.value.length;
            dispcarac.innerHTML=count;

    if(count < 10) {
        dispcarac.innerHTML="Veuillez saisir plus 10 caractères";
    }

    else{
        dispcarac.innerHTML=count;

    }


}

/* passer page*/
function Pchange() {
    document.getElementById('diapo').style.marginLeft="0%";
}