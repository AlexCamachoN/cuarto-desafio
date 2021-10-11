//Archivo encargado de contener las funciones generales para el uso de la Fruteria Online


/*Funcion isStock verifica si se posee el stock suficiente para realizar la venta
RECIBE:
quantity: Cantidad deseada por el cliente
stock: Stock disponible del producto
DEVUELVE
TRUE: Si hay suficiente stock
FALSE: Si no hay suficiente stock
*/ 
const isInStock = (quantity, stock) => {
    if(quantity > stock){
        alert(`No contamos con suficiente stock, solo tenemos: ${stock}und`);
        return false;
    }
    else return true;
}

/*Funcion (addToCart -añadir al carrito-) ejectuta la venta del producto seleccionado
RECIBE
Opt: Opcion seleccionada
Qty: Cantidad deseada por el usuario, declarada en variable gneral
*/ 
const addToCart = (Opt,Qty) =>{
    switch(Opt){
        case 1:
            if(isInStock(Qty,canvasStock)){
                total += (Qty * canvasPrice);
                canvasStock = canvasStock - Qty;
                alert("Lienzo fue agregado al carrito");  
            }
            break

        case 2:
            if(isInStock(Qty,brushStock)){
                total += (Qty * brushPrice);
                brushStock = brushStock - Qty;
                alert("Pincel fue agregado al carrito");  
            }
            break

        case 3:
            if(isInStock(Qty,frameStock)){
                total += (Qty * framePrice);
                frameStock = frameStock - Qty;
                alert("Bastidor fue agregado al carrito");  
            }
            break

        case 4:
            if(isInStock(Qty,easelStock)){
                total += (Qty * easelPrice);
                easelStock = easelStock - Qty;
                alert("Caballete fue agregado al carrito");  
            }
            break

        case 5:
            if(isInStock(Qty,palletteStock)){
                total += (Qty * pallettePrice);
                palletteStock = palletteStock - Qty;
                alert("Paleta fue agregado al carrito");  
            }
            break

        default:
            alert("Opcion invalida");
    }
}