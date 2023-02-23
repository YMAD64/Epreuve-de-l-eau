//MES FONCTIONS
function ajoutAuTableau(){
    for(let i=0 ; i<10 ; i++){
        chM = 0 + i

        for(let j=0 ; j<10 ; j++){
            chC = 0 + j

            for(let k=0 ; k<10 ; k++){
                chD = 0 + k

                for(let l=0 ; l<10 ; l++){
                    chU = 0 + l

                    let nombre1 = `${chM}${chC}`
                    let nombre2 = `${chD}${chU}`
                    if (nombre1 < nombre2){
                        arr.push(`${nombre1} ${nombre2}`)
                    }
                }
            }
        }
    } 
}

let arr = []
ajoutAuTableau()
console.log(arr);

function transformerTableauEnChaineEtAfficher(){
    let chaine = arr.join(', ')
    console.log(chaine);
}

transformerTableauEnChaineEtAfficher()