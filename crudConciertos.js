function agregarConciertos() {
    document.getElementById("btnAgregarConciertos").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            name: document.getElementById("concert").ariaValueMax,
            band_id: document.getElementById("concertBand").ariaValueMax,
            date: document.getElementById("concertDate").ariaValueMax,
            time: document.getElementById("concertDuration").ariaValueMax,
            place: document.getElementById("concertPlace").ariaValueMax,
        }
        fetch('http://127.0.0.1:8000/api/concerts/', {
            method: "POST"
            // body: JSON.stringfy(data)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}
function borrarConciertos(id) {
    fetch('http://127.0.0.1:8000/api/concerts/' + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
fetch('http://127.0.0.1:8000/api/concerts')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaC = document.getElementById("tdConciertosConcierto");
        var contenidoC = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoC += "<tr><td>" + data[i].name + "</td><td>" + data[i].band_id + "</td><td>" + data[i].date + "</td><td>" + data[i].time + "</td><td>" + data[i].place + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas(" + data[i].id + ")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";

        }
        listaC.innerHTML = contenidoC;
    })