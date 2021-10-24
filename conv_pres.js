var i_conv_pres = document.getElementById("i_conv_pres"); //entrada convertir caudal
var l_conv_pres = document.getElementById("l_conv_pres"); //salida convertir caudal
var select_p_in = document.getElementById("select_p_in"); //selector unidad de entrada en convertir caudal
var select_p_out = document.getElementById("select_p_out"); //selector unidad de salida en convertir caudal

///Funciones



i_conv_pres.addEventListener("keyup", function() {

    let p = i_conv_pres.value;
    let UMin = select_p_in.value;
    let UMout = select_p_out.value;
    l_conv_pres.innerHTML = conv_p(p, UMin, UMout);
}, false);

select_p_in.addEventListener("click", function() {
    let p = i_conv_pres.value;
    let UMin = select_p_in.value;
    let UMout = select_p_out.value;
    l_conv_pres.innerHTML = conv_p(p, UMin, UMout);
}, false);

select_p_out.addEventListener("click", function() {
    let p = i_conv_pres.value;
    let UMin = select_p_in.value;
    let UMout = select_p_out.value;
    l_conv_pres.innerHTML = conv_p(p, UMin, UMout);
}, false);