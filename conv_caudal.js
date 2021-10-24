var i_conv_caudal = document.getElementById("i_conv_caudal"); //entrada convertir caudal
var l_conv_caudal = document.getElementById("l_conv_caudal"); //salida convertir caudal
var select_q_in = document.getElementById("select_q_in"); //selector unidad de entrada en convertir caudal
var select_q_out = document.getElementById("select_q_out"); //selector unidad de salida en convertir caudal

///Funciones


//para convertir caudal en convertir caudal
i_conv_caudal.addEventListener("keyup", function() {

    let q = i_conv_caudal.value;
    let UMin = select_q_in.value;
    let UMout = select_q_out.value;
    l_conv_caudal.innerHTML = conv_q(q, UMin, UMout);
}, false);

select_q_in.addEventListener("click", function() {
    let q = i_conv_caudal.value;
    let UMin = select_q_in.value;
    let UMout = select_q_out.value;
    l_conv_caudal.innerHTML = conv_q(q, UMin, UMout);
}, false);

select_q_out.addEventListener("click", function() {
    let q = i_conv_caudal.value;
    let UMin = select_q_in.value;
    let UMout = select_q_out.value;
    l_conv_caudal.innerHTML = conv_q(q, UMin, UMout);
}, false);