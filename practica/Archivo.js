class Archivo {
    constructor(nombre, duracion, tamaño, ruta, formato) {
        this.formato = formato;
        this.ruta = ruta;
        this.tamaño = tamaño;
        this.duracion = duracion;
        this.nombre = nombre;
    }
    verDetalles() {
        console.log("this.nombre + this.duracion + this.tamaño + this.ruta+ this.formato");

    }


}

//Cancion -----------> Nombre, artista, duracion, formato, genero, calidad, peso mb




//Video -----------> Ancho, alto, ruta pc, duracion , tamaño mb, resolucion, formato ej mp4
class Cancion extends Archivo{
    constructor(nombre,artista,duracion,formato,genero,calidad,peso){
        super(nombre, duracion, tamaño, ruta, formato);
        this.artista= artista;
        this.genero = genero;
        this.calidad = calidad;
        this.peso = peso;
       

    } 

}

class Video extends Archivo {

    constructor(ancho, alto, ruta, duracion, tamaño, resolucion, formato) {
        super(nombre, duracion, tamaño, ruta, formato);
        this.ancho = ancho;
        this.alto = alto;
        this, resolucion = resolucion;

    }

}


//Imagen -----------> Formato, ruta o ubicacion en pc, tamaño mb, ancho, alto, resolucion, nombre, autor
class Imagen extends Archivo {

    constructor(formato, ruta, tamaño, ancho, alto, resolucion, nombre, autor) {
        super(nombre, duracion, tamaño, ruta, formato);
        this.ancho = ancho;
        this.alto = alto;
        this, resolucion = resolucion;
        this, autor = autor;
    }

}