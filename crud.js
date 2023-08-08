//BANDAS
const arrBandas = [];
fetch('http://127.0.0.1:8000/api/bands')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaB = document.getElementById("tdBandasBanda");
        var contenidoB = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoB += "<tr><td>" + data[i].name + "</td></tr>";

            // arrBandas.push(data[i].name);
        }
        listaB.innerHTML = contenidoB;
        console.log(arrBandas)
    })

//ALBUMS
fetch('http://127.0.0.1:8000/api/albums')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaA = document.getElementById("tdAlbumsBanda");
        var contenidoA = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoA += "<tr><td>" + data[i].name + "</td><td>" + data[i].band_id + "</td><td>" + data[i].release_date + "</td><td>" + data[i].place + "</td><td>" + data[i].duration + "</td><td>" + data[i].copies_sold + "</td></tr>";

        }
        listaA.innerHTML = contenidoA;
    })

//GENEROS
fetch('http://127.0.0.1:8000/api/genres')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaG = document.getElementById("tdGenerosGenero");
        var contenidoG = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoG += "<tr><td>" +  data[i].name + "</td></tr>";

        }
        listaG.innerHTML = contenidoG;
    })

//CONCIERTOS
fetch('http://127.0.0.1:8000/api/concerts')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaC = document.getElementById("tdConciertosConcierto");
        var contenidoC = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoC += "<tr><td>" +  data[i].name + "</td></tr>";

        }
        listaC.innerHTML = contenidoC;
    })