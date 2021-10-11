//----------------------DESAFIO 4--------------------
//------------------USANDO FUNCIONES-------------
//Archivo principal para el desarrollo de UNA TIENDA DE ARTE

//--------------------------------------------Ciclo Principal--------------------------------------------//

alert(`Bienvenido! a tu tienda de arte Camacho`);

do{
    let option = parseInt(prompt(materialesArt));
    if(option === 6) break; //Opcion 6 es Salir
    let qty = parseInt(prompt(selectedQty));

    addToCart(option,qty);

    resp = prompt('¿Desea agregar mas productos? Escribe: \nsi/no');

}while(resp === 'si' || resp === 'SI');

if(total != 0){
    alert(`El total a pagar es ${total} soles`);
};

alert("Gracias, vuelva pronto");

//las funciones y las variables se hicieron en oro documento para una mejor organizacion