// 1 MES FONCTIONS
function ajoutAuTableau(){
    for(let i=0 ; i<10 ; i++){
    chC = 0 + i
    
        for(let j=0 ; j<10 ; j++){
        chD = 0 + j
        
            for(let k=0 ; k < 10 ; k++){
            chU = 0 + k
            
            if (chC < chD && chD < chU) arr.push(`${chC}${chD}${chU}`);
        }
    }
}
}
function transformerTableauEnChaineEtAfficher(){
    let chaine = arr.join(', ')
    console.log(chaine);
}

// 2 MA GESTION D'ERREUR(S)


// 3 LE PASSING

let arr = []
 

// 4 LA RESOLUTION
ajoutAuTableau()
transformerTableauEnChaineEtAfficher()

// 5 LE RESULTAT
