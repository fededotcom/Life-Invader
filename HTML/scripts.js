function saluda(){
    let fecha = new Date();
    fecha = fecha.getHours();
    if(fecha > 6 && fecha < 13){alert("Buenos dias")}
    else if(fecha >= 13 && fecha < 20){alert("Buenas tardes")}
    else{alert("Buenas noches")}
}

function mostrar(){

}