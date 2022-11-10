// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)
reversArgs = []


// 2 FONCTIONS

function inverserTableau(tableau, newTableau){
    for(let i = ((tableau.length)-1) ; i>=0 ; i--){
        newTableau.push(tableau[i])
    }
}
function lectureDuTableau(tableau){
    for(let i=0 ; i<tableau.length ; i++){
        console.log(tableau[i]);
    }
}
// 3 GESTION D'ERREUR

function gestionErreur(tableau){
    if(tableau.length==0){
    console.log("erreur.");
    return false
}
}
// 4 RESOLUTION
gestionErreur(args)
inverserTableau(args, reversArgs)
lectureDuTableau(reversArgs)










