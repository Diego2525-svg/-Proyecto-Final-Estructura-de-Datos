document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tableForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario de la manera tradicional

        // Obtiene los valores de filas y columnas
        const rows = document.getElementById('rows').value;
        const columns = document.getElementById('columns').value;

        // Redirige a la página de la tabla con los parámetros
        window.location.href = `labyrinth.html?rows=${rows}&columns=${columns}`;
    });
});