// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)


// 2 FONCTIONS

function resultatsSoustractions(tab){
    resultats = []
    
    for(let i=0 ; i<tab.length ; i++){
        for (let j = 0; j < tab.length; j++) {
            if ((tab[i]-tab[j])!==0){
                resultats.push(args[i]-args[j])
            }
            
        }
    }
}


function valAbs(tab){
    
    valAbsResult = []
    
    for(let j=0 ; j<tab.length ; j++){
        if(tab[j] < 0){
            valAbsResult.push(0-tab[j])
        }
    else if(resultats[j]>0){
        valAbsResult.push(tab[j])
        }
    
    }
}

function triTab(tab){

    for(let k=0 ; k<valAbsResult.length ; k++){
        for(let l=0 ; l<valAbsResult.length ; l++){
        
            if(valAbsResult[l]>valAbsResult[l+1]){
                valMin = valAbsResult[l]
                valAbsResult[l] = valAbsResult[l+1]
                valAbsResult[l+1] = valMin

            }

        } 
    
    
    }
}        


function argsFalse(tab){

    for (let i=0 ; i<tab.length ; i++){
        if(isNaN(tab[i])){
        return true
        }
    }
    return false
}

function tabVide(tab){
    if (tab.length < 2){
        return true
    }
    return false 
}    

// 3 GESTION D'ERREUR

if((tabVide(args)) || (argsFalse(args))){
    console.log("error");
}

// 4 RESOLUTION

else if ((tabVide(args)==false) && argsFalse(args)== false){resultatsSoustractions(args);
valAbs(resultats);
triTab(valAbsResult);

console.log(valAbsResult[0])
}
