var i_conv_m = document.getElementById("i_conv_m"); //entrada convertir masa
var l_conv_m = document.getElementById("l_conv_m"); //salida convertir masa
var select_m_in = document.getElementById("select_m_in"); //selector unidad de entrada en convertir masa
var select_m_out = document.getElementById("select_m_out"); //selector unidad de salida en convertir masa

///Funciones



i_conv_m.addEventListener("keyup", function() {

    let m = i_conv_m.value;
    let UMin = select_m_in.value;
    let UMout = select_m_out.value;
    l_conv_m.innerHTML = conv_m(m, UMin, UMout);
}, false);

select_m_in.addEventListener("click", function() {
    let m = i_conv_m.value;
    let UMin = select_m_in.value;
    let UMout = select_m_out.value;
    l_conv_m.innerHTML = conv_m(m, UMin, UMout);
}, false);

select_m_out.addEventListener("click", function() {
    let m = i_conv_m.value;
    let UMin = select_m_in.value;
    let UMout = select_m_out.value;
    l_conv_m.innerHTML = conv_m(m, UMin, UMout);
}, false);