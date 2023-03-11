// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

let argsNumber = []

// 2 FONCTIONS

function getNumber(array, newArray){


    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }

}


function my_bubble_sort(array){

   
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){
        
            if(array[j]>array[j+1]){
                valMax = array[j]
                array[j] = array[j+1]
                array[j+1] = valMax

            }

        }
        
    } 
    return array
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

else if ((tabVide(args)==false) && argsFalse(args)== false){
    getNumber(args, argsNumber)
    console.log(my_bubble_sort(argsNumber).join(' '))
}
