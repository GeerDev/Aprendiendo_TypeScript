// 1. Probando el funcionamiento de TypeScript :)
console.log("Hola TypeScript")

// Comentario

/* Comentario
En
Multilinea */

// 2. Sintaxis, variables y estructuras de control
// Variables
const nombre:string = "Ger"
let apellidos:any = "Fernandez" // Tipo any hace que la variable pueda cambiar de tipo
let error:boolean // Acostumbrarnos en las declaraciones a definir el tipo
error = false

console.log("Mi nombre es " + nombre);
console.log("Mi nombre es ", nombre, "!");
console.log(`Mi nombre es ${nombre}!`);

let a:string,b:boolean,c:number

// Tipos más complejos
let listaTareas:string[] = ['Tarea 1', 'Tarea 2']

let valores:(string | number | boolean)[] = [false, "Hola", 90, true]

// Enumerados
enum Estados {
    "Completa" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

let estadoTarea:Estados = Estados.Completa

// Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    importancia: number
}

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    importancia: 20
}

// Tipos
type Producto = {
    precio: number,
    nombre: string
}

let coche: Producto = {
    nombre: "Audi",
    precio: 4000
}

// Bucles
let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completa,
        importancia: 10
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Completa,
        importancia: 20
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completa,
        importancia: 30
    }
]

listaTareasNuevas.forEach((tarea: Tarea, index:number, array:Tarea[]) => {
    console.log(`${index} - ${tarea.nombre}`);
})

// Cuidado con generar bucles infinitos
while (tarea1.estado !== Estados.Completa) {
    if(tarea1.importancia === 100) {
        tarea1.estado = Estados.Completa
        break;
    } else {
        tarea1.importancia++
    }
}

// 3. Funciones

// 4. Eventos y persistencia de datos en el navegador
// 5. Clases y objetos
// 6. Herencia, poliformismo, decoradores e interfaces
// 7. Patrones de diseño
// 8. Debugging, documentación y mantenimiento