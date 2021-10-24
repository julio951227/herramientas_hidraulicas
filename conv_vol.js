var i_conv_vol = document.getElementById("i_conv_vol"); //entrada convertir 
var l_conv_vol = document.getElementById("l_conv_vol"); //salida convertir 
var select_v_in = document.getElementById("select_v_in"); //selector unidad de entrada en convertir 
var select_v_out = document.getElementById("select_v_out"); //selector unidad de salida en convertir 

///Funciones



i_conv_vol.addEventListener("keyup", function() {

    let v = i_conv_vol.value;
    let UMin = select_v_in.value;
    let UMout = select_v_out.value;
    l_conv_vol.innerHTML = conv_V(v, UMin, UMout);
}, false);

select_v_in.addEventListener("click", function() {
    let v = i_conv_vol.value;
    let UMin = select_v_in.value;
    let UMout = select_v_out.value;
    l_conv_vol.innerHTML = conv_V(v, UMin, UMout);
}, false);

select_v_out.addEventListener("click", function() {
    let v = i_conv_vol.value;
    let UMin = select_v_in.value;
    let UMout = select_v_out.value;
    l_conv_vol.innerHTML = conv_V(v, UMin, UMout);
}, false);