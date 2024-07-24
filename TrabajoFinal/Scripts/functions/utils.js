//Resetear la tabla
export function clearTableColors() {
    const table = document.getElementById('generatedTable');
    if (!table) {
        console.error('El elemento de la tabla no se encontró.');
        return;
    }

    for (let row of table.getElementsByTagName('tr')) {
        for (let cell of row.getElementsByTagName('td')) {
            if (cell.style.backgroundColor !== 'green' && cell.style.backgroundColor !== 'red') {
                cell.style.backgroundColor = '';
            }
        }
    }
}

//Funcion para pintar las celdas recorridas de amarillo

export function paintPath(path, startNode, endNode, delay) {//Start node y end node como parametros para evitar que 
    //Tambien se piten de amarillo
    if (!Array.isArray(path)) {
        console.error('El parámetro "path" debe ser un array.');
        return;
    }

    let index = 0;

    function paintNext() {
        if (index < path.length) {
            const node = path[index];
            if (node && node.element) {
                if (node === startNode || node === endNode) {
                    node.element.style.backgroundColor = 'green';
                } else {
                    node.element.style.backgroundColor = 'yellow';
                }
                index++;
                const timeout = delay ? 500 : 0;//Si el checkbox esta marcado habra un delay de 500ms 
                setTimeout(paintNext, timeout);
            } else {
                console.error('Nodo no válido en el camino.');
            }
        } else {
            
        }
    }

    paintNext();
}
