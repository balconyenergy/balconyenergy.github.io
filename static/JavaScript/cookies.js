function hazUnaVez() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)fdafasafasddfasdf\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
        document.getElementById('modal_cookie_button').click()
        // alert("evento load detectado!");
        document.cookie = "fdafasafasddfasdf=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    }
}


function formularioalasnarices() { document.getElementById('boton_modal_formulario_hogar').click() }

window.onload = hazUnaVez; formularioalasnarices