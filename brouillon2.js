const args = process.argv.slice(2)




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
resultatsSoustractions(args)
valAbs(resultats)
triTab(valAbsResult)
console.log(valAbsResult[0]);


