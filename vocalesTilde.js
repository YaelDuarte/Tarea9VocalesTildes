function contarVocalesConTilde(txt) {
    const vocalTilde = "ÁÉÍÓÚáéíóú";
    let contadorV = 0;
    
    for (let i = 0; i < txt.length; i++) {
        const caracter = txt.charAt(i);
        if (vocalTilde.includes(caracter)) {
            contadorV++;
        }
    }
    
    return contadorV;
}

const frase = "Él ha estado viajando por muchos países alrededor de la península";
const numVocalTilde = contarVocalesConTilde(frase);
console.log("El número de vocales con tilde es: " + numVocalTilde);