const args = process.argv.slice(2)


function nombrePremier(nombre){

    let nbN = false
        for(let i=2 ; i < nombre ; i++){
            if(nombre%i == 0){   
                nbN = true
            }
            
            } 
        
        if (nbN == true) return false
        else if (nbN == false) return true
}

for(let i=args ; i>=args ; i++){
    if ((nombrePremier(i)) && (i !== args)){
        console.log(i)
        break
    }
}