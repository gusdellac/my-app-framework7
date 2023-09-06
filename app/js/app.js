var app = new Framework7({
    root: "#app",
    name: "My App",
    id:  "com.myapp",
    panel: {
        swipe: "left",
    },
    routes: [
        {
            path: "/home/",
            url: "index.html",
        },
        {
            path: "/usuario/",
            url: "usuarios.html",
        },
        {
            path: "/galeria/",
            url: "galeria.html",
        }
    ],
});

var mainView = app.views.create(".view-main");

//abrir el popup
var abrirPopupInicial = app.popup.open(".popup-inicial");

//cerrar el popup
var cerrarPopup;

function cerrarPopup(){
    cerrarPopup = setTimeout(() => {
        abrirPopupInicial = app.popup.close(".popup-inicial", true);
    }, 3000);
};

cerrarPopup();