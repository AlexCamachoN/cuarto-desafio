//Archivo encargado de contener las variables generales para el uso de una tienda de articulos de arte

//Precios de aticulos de arte
const canvasPrice = 30;
const brushPrice = 50;
const framePrice = 20;
const easelPrice = 20;
const pallettePrice = 40;

//Stock de articulos de arte
let canvasStock = 20;
let brushStock = 10;
let frameStock = 15;
let easelStock = 20;
let palletteStock = 60;

//Variables Generales
let quantity = 0;
let total = 0;
let resp = 'si';

//Variables de materialesArt de lo variedad que tenemos por ahora
const materialesArt = `Ingresa el numero segun el Producto a escoger:
1.-Lienzo 10 soles c/u
2.-pincel 5 soles c/u
3.-bastidor 15 soles c/u
4.-caballete 200 soles c/u
5.-paleta 20 soles c/u
6.-salir 
`;

const selectedQty = 'Indicanos la cantidad que deseas del producto ingresado';

