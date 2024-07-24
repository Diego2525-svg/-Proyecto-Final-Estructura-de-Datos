export function bfs(start, end) {
    // bfs trabaja con colas
    const queue = [start];
    
    // Crea un conjunto para registrar los nodos ya visitados
    const visited = new Set();
    visited.add(start);

    //Mapa para saber los nodos visitados y sus padrres
    const parentMap = new Map();
    const path = [];

    // Mientras haya nodos en la cola
    while (queue.length > 0) {
        // Toma el primer nodo de la cola (nodo actual)
        const node = queue.shift();
        
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
            if (!visited.has(neighbor) && neighbor.transitable !== false) {
                //Solo se ejecuatara si el nodo actual no fue visitado y es transitable
                queue.push(neighbor); 
                visited.add(neighbor); 
                parentMap.set(neighbor, node);
                //Siempre el nodo anterior sera padre del vecicno
            }
        });
    }

    return [];
}
