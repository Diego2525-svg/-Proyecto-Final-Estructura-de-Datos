export function recursivity(start, end, path = [], visited = new Set()) {
    //Caso base si el nodo de inicio es el mismo que el nodo final, se ha encontrado el destino
    if (start === end) {
        path.push(start); // Añade el nodo final al camino
        return path; // Devuelve el camino encontrado
    }

    // EL nodo actual(nodo inicio) ya esta visitado
    visited.add(start);

    // Obtiene los vecinos del nodo actual
    const neighbors = start.getNeighbors();

    // Recorre todos los vecinos utilizando una iteracion
    for (const neighbor of neighbors) {
        // Si el vecino no ha sido visitado y es transitable
        if (!visited.has(neighbor) && neighbor.transitable !== false) {
            //Usaremos un operador de propragacion
            // Crea un nuevo camino que incluye el nodo de inicio creando una nueva matriz
            const newPath = [...path, start];
            // Llama recursivamente a la función para explorar el vecino
            const result = recursivity(neighbor, end, newPath, visited);
            // Si se encuentra un camino válido, lo devuelve
            if (result) return result;
        }
    }


    return null;
}
