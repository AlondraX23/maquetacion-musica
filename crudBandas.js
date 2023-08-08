function agregarBandas() {
    document.getElementById("btnAgregarBandas").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            name: document.getElementById("band").ariaValueMax,
            genre_id: document.getElementById("genreB").ariaValueMax,
        }
        fetch('http://127.0.0.1:8000/api/bands/', {
            method: "POST"
            // body: JSON.stringfy(data)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}
function borrarBandas(id) {
    fetch('http://127.0.0.1:8000/api/bands/' + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

fetch('http://127.0.0.1:8000/api/bands')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaB = document.getElementById("tdBandasBanda");
        var contenidoB = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoB +=
                "<tr><td>" + data[i].name + "</td><td>" + data[i].genre_id + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas(" + data[i].id + ")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";

        }
        listaB.innerHTML = contenidoB;
    })