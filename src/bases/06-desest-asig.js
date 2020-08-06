
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( persona.edad );
// console.log( persona.clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.1322,
            lng: -12.2322
        }
    }

}

const { nombreClave, años, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, años);
console.log(lat, lng);