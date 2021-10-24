var i_conv_l = document.getElementById("i_conv_l"); //entrada convertir longitud
var l_conv_l = document.getElementById("l_conv_l"); //salida convertir longitud
var select_l_in = document.getElementById("select_l_in"); //selector unidad de entrada en convertir longitud
var select_l_out = document.getElementById("select_l_out"); //selector unidad de salida en convertir longitud

///Funciones



i_conv_l.addEventListener("keyup", function() {

    let l = i_conv_l.value;
    let UMin = select_l_in.value;
    let UMout = select_l_out.value;
    l_conv_l.innerHTML = conv_l(l, UMin, UMout);
}, false);

select_l_in.addEventListener("click", function() {
    let l = i_conv_l.value;
    let UMin = select_l_in.value;
    let UMout = select_l_out.value;
    l_conv_l.innerHTML = conv_l(l, UMin, UMout);
}, false);

select_l_out.addEventListener("click", function() {
    let l = i_conv_l.value;
    let UMin = select_l_in.value;
    let UMout = select_l_out.value;
    l_conv_l.innerHTML = conv_l(l, UMin, UMout);
}, false);