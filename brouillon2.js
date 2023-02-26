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


tab = []
for(let i=args ; i<args*2 ; i++){
    if(nombrePremier(i)){
        tab.push(i)
    }
}
if((tab[0]) != args[0]){
console.log(tab[0])
}
else console.log(tab[1]);