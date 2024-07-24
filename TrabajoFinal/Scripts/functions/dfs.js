export function dfs(start, end) {
    // dfs trabaja con pilas
    //Inicio de la pila
    const stack = [start];
    
    //Nodos visitados para evitar volver a visitarlos
    const visited = new Set();
    visited.add(start);

    // Crea un mapa para rastrear el nodo padre de cada nodo visitado
    const parentMap = new Map();
    
    // Crea un arreglo para almacenar el camino recorrido
    const path = [];

    // Mientras haya nodos en la pila
    while (stack.length > 0) {
        // Toma el último nodo de la pila (nodo actual)
        const node = stack.pop();
        
        // Si el nodo actual es el nodo final, construye el camino desde 'end' hasta 'start'
        if (node === end) {
            let currentNode = end;
            while (currentNode) {
                path.unshift(currentNode); // Añade el nodo al principio del arreglo 'path'
                currentNode = parentMap.get(currentNode); // Obtiene el nodo padre
            }
            return path; // Devuelve el camino encontrado
        }

        // Recorre los vecinos del nodo actual
        node.getNeighbors().forEach(neighbor => {
            // Si el vecino no ha sido visitado y es transitable
            if (!visited.has(neighbor) && neighbor.transitable !== false) {//Solo si no visito el nodo y es transitable
                //Añadimso el nodo visitado a la pila, lo definimos como visitado y el nodo anterios lo definimos como padrre
                stack.push(neighbor); 
                visited.add(neighbor); 
                parentMap.set(neighbor, node); 
            }
        });
    }

    // Si no se encuentra un camino desde 'start' hasta 'end', devuelve un arreglo vacío
    return [];
}
