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
    function editarDatosBandas() {
        var tabla = document.getElementById("tdBandasBanda");
        fetch('http://127.0.0.1:8000/api/bands')
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(datos) {
                var contenido="";
                for (let i = 0; i < datos.length; i++) {
                    contenido = contenido + "<tr><td>" + datos[i].name + "</td><td><button onclick='editarDatosBandas' class='btn btn-warning'>Editar</button>" + "<button onclick='borrarBandas("+datos[i].id+")' class='btn btn-danger'>Eliminar</button></td><tr>"; 
                }
                tabla.innerHTML = contenido;
            })
    }
    function borrarBandas(id){
        fetch('http://127.0.0.1:8000/api/bands' + id,{
        method: "DELETE"    
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    

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
    function editarDatosAlbums() {
        var tabla = document.getElementById("tdAlbumsBanda");
        fetch('http://127.0.0.1:8000/api/albums')
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(datos) {
                var contenido="";
                for (let i = 0; i < datos.length; i++) {
                    contenido = contenido + "<tr><td>" + datos[i].name + "</td><td><button onclick='editarDatosAlbums' class='btn btn-warning'>Editar</button>" + "<button onclick='borrarAlbums("+datos[i].id+")' class='btn btn-danger'>Eliminar</button></td><tr>"; 
                }
                tabla.innerHTML = contenido;
            })
    }
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
            contenidoG += "<tr><td>" +  data[i].name + "</td></tr>";

        }
        listaG.innerHTML = contenidoG;
    })
    function editarDatosGeneros() {
        var tabla = document.getElementById("tdGenerosGenero");
        fetch('http://127.0.0.1:8000/api/genres')
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(datos) {
                var contenido="";
                for (let i = 0; i < datos.length; i++) {
                    contenido = contenido + "<tr><td>" + datos[i].name + "</td><td><button onclick='editarDatosGeneros' class='btn btn-warning'>Editar</button>" + "<button onclick='borrarGeneros("+datos[i].id+")' class='btn btn-danger'>Eliminar</button></td><tr>"; 
                }
                tabla.innerHTML = contenido;
            })
    }
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
            contenidoC += "<tr><td>" +  data[i].name + "</td></tr>";

        }
        listaC.innerHTML = contenidoC;
    })
    function editarDatosBandas() {
        var tabla = document.getElementById("tdConciertosConcierto");
        fetch('http://127.0.0.1:8000/api/concerts')
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(datos) {
                var contenido="";
                for (let i = 0; i < datos.length; i++) {
                    contenido = contenido + "<tr><td>" + datos[i].name + "</td><td>" + datos[i].date + "</td><td>" + datos[i].time + "</td><td>" + datos[i].place + "</td><td><button onclick='editarDatosConciertos' class='btn btn-warning'>Editar</button>" + "<button onclick='borrarConciertos("+datos[i].id+")' class='btn btn-danger'>Eliminar</button></td><tr>"; 
                }
                tabla.innerHTML = contenido;
            })
    }
    function borrarConciertos(id){
        fetch('http://127.0.0.1:8000/api/concerts' + id, {
            method: "DELETE"    
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }