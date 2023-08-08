function agregarAlbums() {
    document.getElementById("btnAgregarAlbums").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            name: document.getElementById("albumName").ariaValueMax,
            band_id: document.getElementById("bandName").ariaValueMax,
            release_date: document.getElementById("albumPlace").ariaValueMax,
            duration: document.getElementById("albumDuration").ariaValueMax,
            copies_sold: document.getElementById("copiesSold").ariaValueMax,
        }
        fetch('http://127.0.0.1:8000/api/albums/', {
            method: "POST"
            // body: JSON.stringfy(data)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}
function borrarAlbums(id) {
    fetch('http://127.0.0.1:8000/api/albums/' + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
fetch('http://127.0.0.1:8000/api/albums')
        .then(res => res.json())
        .then((data) => {
            // console.log(data)

            let listaA = document.getElementById("tdAlbumsBanda");
            var contenidoA = " ";


            for (let i = 0; i < data.length; i++) {
                contenidoA += "<tr><td>" + data[i].name + "</td><td>" + data[i].band_id + "</td><td>" + data[i].release_date + "</td><td>" + data[i].place + "</td><td>" + data[i].duration + "</td><td>" + data[i].copies_sold + "</td><td><button onclick='editarDatosAlbums' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarAlbums(" + data[i].id + ")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";;

            }
            listaA.innerHTML = contenidoA;
        })