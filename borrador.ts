

class ListaDeProductos{
     lista:Tipo [];
    constructor(lista:Tipo[]){
        this.lista = lista;
    }
   
   addProductToList(lista:string,producto:Producto){
        const listaEncontrada = this.lista.find(item=>item.tipo == lista)
        listaEncontrada.productoPush(producto)
        return lista
   } 
   
   getProductosByTipos(tipo:string){
    const listaEncontrada = this.lista.find(item=>item.tipo == tipo)
    return listaEncontrada.getProductosByTipos();
   }
}
class Tipo{
    constructor(nombre:string){
        this.tipo = nombre;
        this.lista = [];
    }
    tipo:string
    lista:object[] 

    getProductosByTipos(){
       return this.tipo
    }
    
    productoPush(item:Producto) {
       return this.lista.push(item)
    }

}

class Producto{
    constructor(nombre:string,marca:string,costo:number){
        this.nombre = nombre;
        this.marca = marca;
        this.costo = costo;
    }
    nombre:string
    marca:string
    costo:number
    getIva(){
        return this.costo * 0.21;
    }
    getPrecioFinal(){
        const conIva = this.costo * 1.21;
        return conIva * 1.50
    }
}

function mainDos(){
const productoUno = new Producto('tornillo 6x2"',"vialro",300.43)
const productoDos = new Producto('clavos 1"','acindar', 423.00)
const productoTres = new Producto('clavos 1"','sipar',395.00)
const productoCuatro = new Producto('clavos 1 1/2"','acindar',410.00)
const productoCinco = new Producto('clavos 1 1/2','sipar',380.00)
const productoSeis = new Producto('clavos 2"','acindar',400.63)
const productoSiete = new Producto('canilla 1/2','latyn',83.00)
const productoOcho = new Producto('canilla 1/2','Duke',184.64)
const productoNueve = new Producto('canilla 3/4','latin',127.75)
const productoDiez = new Producto('canilla 3/4','Duke',211.43)

const tornillos = new Tipo('tornillos')
const clavos = new Tipo ('clavos')
const canillas = new Tipo('canillas')

const ListaFerreteria = new ListaDeProductos([canillas,clavos,tornillos])

ListaFerreteria.addProductToList('tornillos',productoUno);
ListaFerreteria.addProductToList('clavos',productoDos);
ListaFerreteria.addProductToList('clavos',productoTres);
ListaFerreteria.addProductToList('clavos',productoCuatro);
ListaFerreteria.addProductToList('clavos',productoCinco);
ListaFerreteria.addProductToList('clavos',productoSeis);
ListaFerreteria.addProductToList('canillas',productoSiete);
ListaFerreteria.addProductToList('canillas',productoOcho);
ListaFerreteria.addProductToList('canillas',productoNueve);
ListaFerreteria.addProductToList('canillas',productoDiez);
console.log(ListaFerreteria.lista)

}
mainDos();
