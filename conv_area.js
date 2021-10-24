var i_conv_a = document.getElementById("i_conv_a"); //entrada convertir área
var l_conv_a = document.getElementById("l_conv_a"); //salida convertir área
var select_a_in = document.getElementById("select_a_in"); //selector unidad de entrada en convertir área
var select_a_out = document.getElementById("select_a_out"); //selector unidad de salida en convertir cárea

///Funciones



i_conv_a.addEventListener("keyup", function() {

    let a = i_conv_a.value;
    let UMin = select_a_in.value;
    let UMout = select_a_out.value;
    l_conv_a.innerHTML = conv_a(a, UMin, UMout);
}, false);

select_a_in.addEventListener("click", function() {
    let a = i_conv_a.value;
    let UMin = select_a_in.value;
    let UMout = select_a_out.value;
    l_conv_a.innerHTML = conv_a(a, UMin, UMout);
}, false);

select_a_out.addEventListener("click", function() {
    let a = i_conv_a.value;
    let UMin = select_a_in.value;
    let UMout = select_a_out.value;
    l_conv_a.innerHTML = conv_a(a, UMin, UMout);
}, false);