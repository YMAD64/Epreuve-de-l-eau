// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)

let argsNumber = []

// 2 FONCTIONS

function getNumber(array, newArray){


    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }

}


function my_select_sort(array){

   
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){
        
            if(array[j+1]<array[j]){
                valMin = array[j+1]
                array[j+1] = array[j]
                array[j] = valMin

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
    console.log(my_select_sort(argsNumber).join(' '))
}

////////////////////////////////////////////////
//18/10/23////


// const args = process.argv.slice(2)

// function my_select_sort(array){

//     for(let i=0 ; i<array.length ; i++){
//         let valMin = i
//         for (let j=i+1; j<array.length ; j++){
//             if (parseInt(array[j])<parseInt(array[valMin])){
//                 valMin = j
//         } 
//     } 
//     let temp = array[i]
//     array[i]= array[valMin]
//     array[valMin] = temp
//     } return array
// }
// console.log(my_select_sort(args))