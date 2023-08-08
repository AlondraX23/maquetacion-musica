// function irAlbums(url) {
//     window.location.href = url;
// }

// function irGeneros(url) {
//     window.location.href = url;
// }

// function irBandas(url) {
//     window.location.href = url;
// }

// function irConciertos(url) {
//     window.location.href = url;
// }

var menuGeneros = document.getElementById("menuGeneros")
menuGeneros.addEventListener('click', function () {
    document.getElementById("albums").classList.remove("active");
    document.getElementById("generos").classList.add("active");
});

var btnTablaAlbums = document.getElementById("btnTablaAlbums");
var tablaAlbums = document.getElementById("btnTablaAlbums");
var formAlbums = document.getElementById("formAlbums");

btnTablaAlbums.addEventListener('click', function(){
    tablaAlbums.style.display = 'none';
    formAlbums.style.display = 'block';
});