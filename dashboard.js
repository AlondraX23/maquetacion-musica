// Bandas 
const arrName = [];
const arrId = [];

fetch('http://127.0.0.1:8000/api/bands')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)

        let listaB = document.getElementById("listaB");
        var contenidoB = '';


        for (let i = 0; i < data.length; i++) {
            contenidoB += '<li>' + data[i].id + " - " + data[i].name + '</li>';
            var nombreBandas = data[i].name;
            var idBandas = data[i].id;

            console.log(nombreBandas);

            // console.log(data[i].name);
            // console.log(data[i].id);
            
            arrName.push(nombreBandas);
            arrId.push(idBandas);
        }

        console.log(arrId)
        console.log(typeof arrId)
        console.log(arrName)

//CANTIDAD DE COPIAS VENDIDAS POR ÁLBUM - BAR CHART
fetch('http://127.0.0.1:8000/api/albums')         //Verificar URL
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresAlbumes = data[i].name;
                var idCopies= data[i].copies_sold;     // Omití hacer arreglos con push. Hay que ver cómo funciona el citado de variables en la var trace.
            }
            function graficarCopiasVendidas(copies){ //¿Cuál variable se pondría como parámetro?
                    var trace1 = [
                    {
                    x: [nombresAlbumes],
                    y: [copies_sold],         
                    type: 'bar'
                    } 
                ];
                var layout = {
                    title: 'Copias vendidas por álbum',
                    xaxis: {
                        title: 'Álbum',
                    },
                    yaxis: {
                        title: 'Copias vendidas',
                    }
                };
                Plotly.newPlot('graphic_1', trace1, layout);
            }   
        })

//BANDAS POR GÉNERO - LINE CHART
fetch('http://127.0.0.1:8000/api/bands')
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresBandas = data[i].name;
                var idBandas= data[i].id;     // Omití hacer arreglos con push. Hay que ver cómo funciona el citado de variables en la var trace.
            }
            function graficarBandasXGenero(bandas, géneros){ //¿Cuál variable se pondría como parámetro?
                    var trace1 = [
                    {
                    x: [nombresBandas],
                    y: [idBandas],            //¿Esto sí va a especificar el género de cada banda? Quizás deba ligarse el nombre de los géneros mejor.
                    type: 'scatter'
                    } 
                ];
                var layout = {
                    title: 'Bandas por género',
                    xaxis: {
                        title: 'Bandas',
                    },
                    yaxis: {
                        title: 'Género',
                    }
                };
                Plotly.newPlot('graphic_2', trace1, layout);
            }   
        })

//BANDAS POR PAÍSES - BAR CHART
fetch('http://127.0.0.1:8000/api/bands')
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresBandas = data[i].name;
                var idPlaces= data[i].place;     // Omití hacer arreglos con push. Hay que ver cómo funciona el citado de variables en la var trace.
            }
            function graficarBandasXPais(bandas, paises){ //¿Cuál variable se pondría como parámetro?
                    var trace1 = [
                    {
                    x: [nombresBandas],
                    y: [idPlaces],            //¿Esto sí va a especificar el género de cada banda? Quizás deba ligarse el nombre de los géneros mejor.
                    type: 'barr'
                    } 
                ];
                var layout = {
                    title: 'Bandas por países',
                    xaxis: {
                        title: 'Bandas',
                    },
                    yaxis: {
                        title: 'Países',
                    }
                };
                Plotly.newPlot('graphic_3', trace1, layout);
            }   
        })

//ID (NO CANTIDAD) DE GÉNEROS MUSICALES - LINE CHART
fetch('http://127.0.0.1:8000/api/genres')  //Verificar URL
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresGeneros = data[i].name;
                var idGeneros= data[i].id;   
            }
            function graficarIDGeneros(generos, id){
                    var trace1 = [
                    {
                    x: [nombresGeneros],
                    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],         
                    type: 'scatter',
                    symbol: 'diamond'
                    } 
                ];
                var layout = {
                    title: 'ID por género musical',
                    xaxis: {
                        title: 'Bandas',
                    },
                    yaxis: {
                        title: 'ID',
                    }
                };
                Plotly.newPlot('graphic_4', trace1, layout);
            }   
        })

//CONCIERTOS POR LUGAR DE REALIZACIÓN - DOT PLOT <--------------------------------------------- FALTA POR HACER
fetch('http://127.0.0.1:8000/api/bands')
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresBandas = data[i].name;
                var idPlaces= data[i].place;     // Omití hacer arreglos con push. Hay que ver cómo funciona el citado de variables en la var trace.
            }
            function graficarBandasXGenero(bandas, géneros){ //¿Cuál variable se pondría como parámetro?
                    var trace1 = [
                    {
                    x: [nombresBandas],
                    y: [idPlaces],            //¿Esto sí va a especificar el género de cada banda? Quizás deba ligarse el nombre de los géneros mejor.
                    type: 'scatter'
                    } 
                ];
                var layout = {
                    title: 'Bandas por género',
                    xaxis: {
                        title: 'Bandas',
                    },
                    yaxis: {
                        title: 'Países',
                    }
                };
                Plotly.newPlot('graphic_5', trace1, layout);
            }   
        })

//ÁLBUMES POR DÉCADAS - PIE CHART <--------------------------------------------- FALTA POR HACER
fetch('http://127.0.0.1:8000/api/bands')
        .then(res => res.json())
        .then((data) => {
            for (let i=0; i < data.length; i++) {
                var nombresBandas = data[i].name;
                var idPlaces= data[i].place;     // Omití hacer arreglos con push. Hay que ver cómo funciona el citado de variables en la var trace.
            }
            function graficarBandasXGenero(bandas, géneros){ //¿Cuál variable se pondría como parámetro?
                    var trace1 = [
                    {
                    x: [nombresBandas],
                    y: [idPlaces],            //¿Esto sí va a especificar el género de cada banda? Quizás deba ligarse el nombre de los géneros mejor.
                    type: 'scatter'
                    } 
                ];
                var layout = {
                    title: 'Bandas por género',
                    xaxis: {
                        title: 'Bandas',
                    },
                    yaxis: {
                        title: 'Países',
                    }
                };
                Plotly.newPlot('graphic_6', trace1, layout);
            }   
        })

        // const bandasName = Object.values(arrName);
        // console.log(bandasName)

        // const bandasId = Object.values(arrId);
        // console.log(bandasId)
        // console.log(typeof bandasId)

        // let arrayObjects = [{ 0: "Pink Floyd" }, { 1: "Iron Maiden" }, { 2: "AC/DC" }];
        // let valuesArray = arrayObjects.map(obj => Object.entries(obj)[0][1]);
        // console.log(valuesArray);
        // console.log(typeof valuesArray);
        // let arrayObjects = [{ 0: "Pink Floyd" }, { 1: "Iron Maiden" }, { 2: "AC/DC" }];
        // let valuesArray = arrayObjects.map(obj => Object.entries(obj)[0][1]);
        // console.log(valuesArray);
        // console.log(typeof valuesArray);
        // console.log(arrName);
        // console.log(typeof arrName);

        // console.log(arrId);
        
        
        
        // const values = arrId
        //     .map(obj => Object.values(obj)[0])
        //     .filter(value => typeof value === 'number');

        // console.log(values);  

        // var arrIdValue = [];
        // const values = arrId.map((value) => {
        //     console.log(`${value}`);
        //     return value;
        //     // arrIdValue.push(value)
        // });

        // console.log(values);

        // console.log(arrIdValue)
        // console.log(typeof arrIdValue)

        // const values = arrName.map(obj => Object.values(obj)[0]);
        // console.log(values);
        // console.log(typeof values)

        // let numbersArray = arrId.map(obj => Object.values(obj)[0]);

        // console.log(numbersArray);

        listaB.innerHTML = contenidoB;
    })

let newX = [2,4,1,5]
let newY = [4,3,2,6]


TESTER = document.getElementById('tester');

Plotly.newPlot(TESTER, [{

    x: newX,

    y: newY,
}], {

    margin: { t: 0 }
});
// Plotly.update('tester', { x: [arrId] });

// Albums
// fetch('http://127.0.0.1:8000/api/albums')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)

//         let listaA = document.getElementById("listaA");
//         var contenidoA = '';


//         for (let i = 0; i < data.length; i++) {
//             contenidoA += '<li>' + data[i].name + " - " + data[i].copies_sold + '</li>';
//             var nombreAlbum = data[i].name;
//             var ventasAlbum = data[i].copies_sold;

//             console.log(data[i].name);
//             console.log(data[i].copies_sold);
//         }

//         listaA.innerHTML = contenidoA;
//     })

// Generos
// fetch('https://raw.githubusercontent.com/AlondraX23/APIs/main/genres')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)

//         let listaG = document.getElementById("listaG");
//         var contenidoG = '';


//         for (let i = 0; i < data.length; i++) {
//             contenidoG += '<li>' + data[i].id + " - " + data[i].name + '</li>';
//             var nombreGeneros = data[i].name;
//             var idGeneros = data[i].id;

//             console.log(data[i].name);
//             console.log(data[i].id);
//         }

//         listaG.innerHTML = contenidoG;
//     })

// Conciertos
// fetch('https://raw.githubusercontent.com/AlondraX23/APIs/main/concerts')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)

//         let listaC = document.getElementById("listaC");
//         let busqueda = document.getElementById("busqueda")
//         var contenidoC = '';


//         for (let i = 0; i < data.length; i++) {
//             contenidoC += '<li>' + data[i].id + " - " + data[i].name + '</li>';
//             var nombreConciertos = data[i].name;
//             var idConciertos = data[i].id;

//             console.log(data[i].name);
//             console.log(data[i].id);

//             const busquedaId = 3;
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
//         }

//         listaC.innerHTML = contenidoC;
//     })
