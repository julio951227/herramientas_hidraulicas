var i_cr_n = document.getElementById("i_cr_n"); //entrada de norma
var select_cr_n = document.getElementById("select_cr_n"); //unidad de norma
var i_cr_a = document.getElementById("i_cr_a"); //entrada de área
var select_cr_a = document.getElementById("select_cr_a"); //unidad de área
var i_cr_tu = document.getElementById("i_cr_tu"); //entrada de turnos
var select_cr_tu = document.getElementById("select_cr_tu"); //unidad de turnos
var i_cr_t = document.getElementById("i_cr_t"); //entrada de tiempo de riego
var select_cr_t = document.getElementById("select_cr_t"); //unidad de tiempo de riego
var i_cr_i = document.getElementById("i_cr_i"); //entrada de intervalode riego
var select_cr_i = document.getElementById("select_cr_i"); //unidad de intervalo de riego
var l_cr_h = document.getElementById("l_cr_h"); //salida hidromódulo
var l_cr_q = document.getElementById("l_cr_q"); //salida caudal


function calcular(){

let f = "";
if (i_cr_n.value.length == 0) {
  f = " Norma";
  l_cr_h.innerHTML = "Define" + f;
}
if (i_cr_t.value.length == "") {
  f = f + " Tiempo";
  l_cr_h.innerHTML = "Define" + f;
}
if (i_cr_i.value.length == "") {
    f = f + " Intervalo";
    l_cr_h.innerHTML = "Define" + f;
  }
  if (f.length<1){
    let norma=0;
    let tiempo=0;
    if (select_cr_n.value=="m³/ha")norma=i_cr_n.value;else norma=i_cr_n.value/1000;
    if (select_cr_t.value=="horas")tiempo=i_cr_t.value;else tiempo=i_cr_t.value/60;
    let area=conv_a(i_cr_a.value,select_cr_a.value,"ha");
    let turnos= i_cr_tu.value;
    let intervalo= i_cr_i.value;
    console.log("norma-"+ norma+" tiempo-"+tiempo+" Intervalo-"+intervalo)
    let hm= hidromodulo(norma,tiempo,intervalo);
    console.log(hm);
    l_cr_h.innerHTML=hm;

    let ff = "";
    if (i_cr_tu.value.length == "") {
        ff = ff + " Turnos";
        l_cr_q.innerHTML = "Define" + ff;
      }
      if (i_cr_a.value.length == "") {
        ff = ff + " Área";
        l_cr_q.innerHTML = "Define" + ff;
      }
      if (ff.length<1){
          l_cr_q.innerHTML=caudal_riego(area,hm,turnos);
      }

  }


}




select_cr_n.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_cr_a.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_cr_tu.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_cr_t.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_cr_i.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  i_cr_n.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );

  i_cr_a.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_cr_tu.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_cr_t.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_cr_i.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );