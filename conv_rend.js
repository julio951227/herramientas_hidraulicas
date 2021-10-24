var i_conv_r = document.getElementById("i_conv_r"); //entrada convertir longitud
var l_conv_r = document.getElementById("l_conv_r"); //salida convertir longitud
var select_r_in = document.getElementById("select_r_in"); //selector unidad de entrada en convertir longitud
var select_r_out = document.getElementById("select_r_out"); //selector unidad de salida en convertir longitud

///Funciones



i_conv_r.addEventListener("keyup", function() {

    let r = i_conv_r.value;
    let UMin = select_r_in.value;
    let UMout = select_r_out.value;
    l_conv_r.innerHTML = conv_r(r, UMin, UMout);
}, false);

select_r_in.addEventListener("click", function() {
    let r = i_conv_r.value;
    let UMin = select_r_in.value;
    let UMout = select_r_out.value;
    l_conv_r.innerHTML = conv_r(r, UMin, UMout);
}, false);

select_r_out.addEventListener("click", function() {
    let r = i_conv_r.value;
    let UMin = select_r_in.value;
    let UMout = select_r_out.value;
    l_conv_r.innerHTML = conv_r(r, UMin, UMout);
}, false);