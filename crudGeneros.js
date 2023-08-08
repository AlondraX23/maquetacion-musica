function agregarGeneros() {
    document.getElementById("btnAgregarGeneros").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            name: document.getElementById("genre").ariaValueMax,
        }
        fetch('http://127.0.0.1:8000/api/genres/', {
            method: "POST"
            // body: JSON.stringfy(data)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}
function borrarGeneros(id) {
    fetch('http://127.0.0.1:8000/api/genres/' + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
fetch('http://127.0.0.1:8000/api/genres')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaG = document.getElementById("tdGenerosGenero");
        var contenidoG = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoG += "<tr><td>" + data[i].name + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas(" + data[i].id + ")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";

        }
        listaG.innerHTML = contenidoG;
    })