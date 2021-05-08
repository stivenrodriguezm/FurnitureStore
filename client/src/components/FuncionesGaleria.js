
export function galeria(id){
    var galeriaDiv = document.getElementById("galeria")
    var x = id.target.id
    var idNum = Number(x[2])

    return(
        galeriaDiv.classList.remove("noneDisplay"),
        galeriaDiv.classList.add("galeria"),
        galeriaDiv.children[idNum].classList.remove("noneDisplay"),
        galeriaDiv.children[idNum].classList.add("active")    
        )
        
    }
    export function leftBig() {
    var galeriaDiv = document.getElementById("galeria")
    var activo = document.getElementsByClassName("active")
    var id = activo[0].id
    var idNumber = Number(id[1])
    var i

    for(i = 0; i < idNumber; i++){
        if(i>0){
            activo[0].classList.add("noneDisplay")
            activo[0].classList.remove("active")
            galeriaDiv.children[i].classList.remove("noneDisplay")
            galeriaDiv.children[i].classList.add("active")
        }
    }
}

export function rightBig() {
    var galeriaDiv = document.getElementById("galeria")
    var activo = document.getElementsByClassName("active")
    var id = activo[0].id
    var idNumber = Number(id[1])
    var idNumberDos = idNumber++
    var max = galeriaDiv.childElementCount -3
    
    if(idNumberDos<max){
        activo[0].classList.add("noneDisplay")
        activo[0].classList.remove("active")
        galeriaDiv.children[idNumberDos + 1].classList.remove("noneDisplay")
        galeriaDiv.children[idNumberDos + 1].classList.add("active")
    }
}
export function cerrar(){
    var galeriaDiv = document.getElementById("galeria")
    var activo = document.getElementsByClassName("active")

    if(activo){
        activo[0].classList.add("noneDisplay")
        activo[0].classList.remove("active")
    }
    return(
        galeriaDiv.classList.remove("galeria"),
        galeriaDiv.classList.add("noneDisplay")
    )
}