/*export function cache(startNode, endNode, rows, columns) {
    // Inicializar distancias y caminos anteriores
    const dist = {};
    const prev = {};
    const queue = [];
    const path = [];

    const start = startNode.value;
    const end = endNode.value;

    // Inicializar distancias a infinito y caminos anteriores a null
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const nodeValue = `${i}-${j}`;
            dist[nodeValue] = Infinity;
            prev[nodeValue] = null;
        }
    }

    // Configurar distancia inicial del nodo de inicio
    dist[start] = 0;
    queue.push(start);

    while (queue.length > 0) {
        const current = queue.shift();
        const [currentRow, currentCol] = current.split('-').map(Number);

        if (current === end) break;

        // Definir vecinos del nodo actual
        const neighbors = [
            `${currentRow - 1}-${currentCol}`, // arriba
            `${currentRow + 1}-${currentCol}`, // abajo
            `${currentRow}-${currentCol - 1}`, // izquierda
            `${currentRow}-${currentCol + 1}`  // derecha
        ];

        // Explorar vecinos
        for (const neighbor of neighbors) {
            const [r, c] = neighbor.split('-').map(Number);
            if (r >= 0 && r < rows && c >= 0 && c < columns) {
                if (dist[neighbor] === undefined || dist[neighbor] === Infinity) {
                    dist[neighbor] = dist[current] + 1;
                    prev[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    // Reconstruir el camino desde el nodo final
    let step = end;
    while (step !== null) {
        path.unshift(step);
        step = prev[step];
    }

    return path.map(coord => coord.split('-').map(Number));
}
    no funciono por ser muy complejo
*/ 
export function cache(start, end) {
    //Cola con el nodo de inicioo
    const queue = [[start]];
    //Nodos visitados
    const visited = new Set();
    visited.add(start);

    // Crea un objeto para almacenar los caminos ya explorados
    const cache = {};

    // Mientras haya caminos en la cola
    while (queue.length > 0) {
        // Toma el primer camino de la cola
        const path = queue.shift();
        // Toma el último nodo del camino
        const node = path[path.length - 1];

        // Si el nodo actual es el nodo final, devuelve el camino
        if (node === end) {
            return path;
        }

        // Recorre los vecinos del nodo actual
        for (const neighbor of node.getNeighbors()) {
            // Si el vecino no ha sido visitado y es transitable
            if (!visited.has(neighbor) && neighbor.transitable !== false) {
                // Marca el vecino como visitado
                visited.add(neighbor);
                // Crea un nuevo camino que incluye el vecino y lo añade a la cola
                const newPath = [...path, neighbor];
                queue.push(newPath);
                
                // Guardar el camino en el caché
                cache[`${neighbor.value}`] = newPath;//Accede al value del neigbhbor 
                //$Plantilla literal
            }
        }
    }

    return [];
}
