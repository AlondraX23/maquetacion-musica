//BANDAS
const arrBandas = [];
fetch('http://127.0.0.1:8000/api/bands')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaB = document.getElementById("tdBandasBanda");
        var contenidoB = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoB += 
            "<tr><td>" + data[i].name + "</td><td>" + data[i].genre_id + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas("+data[i].id+")' class='btn btn-outline-danger'>Eliminar</button></td><tr>"; 

            // arrBandas.push(data[i].name);
        }
        listaB.innerHTML = contenidoB;
        console.log(arrBandas)
        
        function borrarBandas(id){
            // if (data[i].id === id) {
                
            // }
            fetch('http://127.0.0.1:8000/api/bands',{
            method: "DELETE"    
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        }
    })
    // const filteredArray = originalArray.filter(item => item.name !== valueToDelete);
    //         const busquedaId = 3;
    //             let resultado = null;
    //             for (let i = 0; i < data.length; i++) {
    //                 if (data[i].id === busquedaId) {
    //                     resultado = data[i].name;
    //                     break;
    //                 }
    //             }
    //             if (resultado) {
    //                 busqueda.innerHTML = resultado
    //                 console.log("Found object with id:", resultado);
    //             } else {
    //                 console.log("Object with the desired id not found");
    //             }

    

//ALBUMS
fetch('http://127.0.0.1:8000/api/albums')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaA = document.getElementById("tdAlbumsBanda");
        var contenidoA = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoA += "<tr><td>" + data[i].name + "</td><td>" + data[i].band_id + "</td><td>" + data[i].release_date + "</td><td>" + data[i].place + "</td><td>" + data[i].duration + "</td><td>" + data[i].copies_sold + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas("+data[i].id+")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";;

        }
        listaA.innerHTML = contenidoA;
    })
    function borrarAlbums(id){
        fetch('http://127.0.0.1:8000/api/albums' + id, {
        method: "DELETE"    
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}
        

//GENEROS
fetch('http://127.0.0.1:8000/api/genres')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaG = document.getElementById("tdGenerosGenero");
        var contenidoG = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoG += "<tr><td>" +  data[i].name + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas("+data[i].id+")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";

        }
        listaG.innerHTML = contenidoG;
    })
    function borrarGeneros(id){
        fetch('http://127.0.0.1:8000/api/genres' + id, {
            method: "DELETE"    
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

//CONCIERTOS
fetch('http://127.0.0.1:8000/api/concerts')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaC = document.getElementById("tdConciertosConcierto");
        var contenidoC = " ";


        for (let i = 0; i < data.length; i++) {
            contenidoC += "<tr><td>" +  data[i].name + "</td><td>" + data[i].band_id + "</td><td>" + data[i].date + "</td><td>" + data[i].time + "</td><td>" + data[i].place+"</td><td><button onclick='editarDatosBandas' class='btn btn-warning rounded-pill me-2'>Editar</button>" + "<button onclick='borrarBandas("+data[i].id+")' class='btn btn-outline-danger'>Eliminar</button></td><tr>";

        }
        listaC.innerHTML = contenidoC;
    })
    function borrarConciertos(id){
        fetch('http://127.0.0.1:8000/api/concerts' + id, {
            method: "DELETE"    
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }