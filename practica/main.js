/* Reproductor multimedia sencillo texto y consola
usar objetos, clases, metodos, jerarquias de herencia, usar principios SOLID y UML
reproductor que trabaja con representaciones objetos de imagenes, canciones, sonido y video
controlar los flujos de las acciones
visualizar los estados y caracteristicas de dichos objetos modelo
a traves de mensajes en consola. EJ: cambio, reproduciendo, (objeto), detenido o pausa
Clases: Cancion, imagen, video
Atributos: 
Cancion -----------> Nombre, artista, duracion, formato, genero, calidad, peso mb
Imagen -----------> Formato, ruta o ubicacion en pc, tamaño mb, ancho, alto, resolucion, nombre, autor
Video -----------> Ancho, alto, ruta pc, duracion , tamaño mb, resolucion, formato ej mp4

El reproductor debe estar en una clase independiente y no usar el espacio global
debe permitir: reproducir abrir cada tipo de archivo (video, imagen, cancion)
debe ser lanzado o iniciado esperando poder lanzar diferentes archivos en la misma sesion (sin recargar la pagina)

Tener listas de reproduccion de cada tipo de archivos
Playlist de imagenes
Playlist de videos
Playlist de canciones
deben listar contenido, detalles de cada archivo
deben totalizar el tiempo de la lista, numero de archivos, ejemplo las imagenes duran 5 segundos

Recomendaciones: 
Los servicios no deben consumirse externamente
El espacio global no debe tener variables o funciones en exceso
Encapsular en clases objetos el comportamiento
Los diagramas de flujo de las acciones requeridas para reproducir, pausar, ir al siguiente archivo, regresar de archivo

Diagrama de clases UML

Y usar windows.prompt para la interaccion del usuario
*/


let opcion = window.prompt("¿Que quieres hacer bro? \n 1. Escuchar música  \n 2. Ver vídeos \n 3. Ver Imágenes");
switch (opcion) {
    //El player debe permitir pausar dar play, avanzar y retroceder
    //POR CADA ACCION DESPLEGAR UN PROMPT
    // if key pressed ----------> window prompt (pausado, siguiente elemento, elemtno anterior);
    //mostrar en consola el nombre del elemento en reproduccion
    //recorrer arrays de forma que se pueda acceder a todos los elemntos con su descripcion

    //¿ donde crear los arrays? 

    case "1":
        //Player(Listas arrays de musica);
        break;

    case "2":
       // Player(Acceder a array de videos externo);7

    case "3": 
       // Player(Accder a array de imagenes);


}













