
const persona = {
    nombre: 'Tony',
    apellidos: 'Montana',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55643121,
        lat: 14.3224,
        lng: 34.9322321
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);