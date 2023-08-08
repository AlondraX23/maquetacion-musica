function irAlbums(url) {
    window.location.href = url;
}

function irGeneros(url) {
    window.location.href = url;
}

function irBandas(url) {
    window.location.href = url;
}

function irConciertos(url) {
    window.location.href = url;
}

var btnTablaAlbums = document.getElementById('btnTablaAlbums');

var tablaAlbums = document.getElementById('tablaAlbums');
var formAlbums = document.getElementById('formAlbums');

btnTablaAlbums.addEventListener('click', function () {
    if (formAlbums.style.display === 'none') {
        tablaAlbums.style.display = 'block';
        formAlbums.style.display = 'none';
    } else {
        tablaAlbums.style.display = 'none';
        formAlbums.style.display = 'block';
    }
})

if (tablaAlbums.style.display === 'none') {
    tablaAlbums.style.display = 'block';
    formAlbums.style.display = 'none';
} else {
    tablaAlbums.style.display = 'none';
    formAlbums.style.display = 'block';
}