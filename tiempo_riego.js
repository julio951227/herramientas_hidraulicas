var i_tr_n = document.getElementById("i_tr_n"); //entrada de norma
var select_tr_n = document.getElementById("select_tr_n"); //unidad de norma
var i_tr_a = document.getElementById("i_tr_a"); //entrada de área
var select_tr_a = document.getElementById("select_tr_a"); //unidad de área
var i_tr_tu = document.getElementById("i_tr_tu"); //entrada de turnos
var select_tr_tu = document.getElementById("select_tr_tu"); //unidad de turnos
var i_tr_q = document.getElementById("i_tr_q"); //entrada de tiempo de riego
var select_tr_t = document.getElementById("select_tr_t"); //unidad de tiempo de riego
var i_tr_i = document.getElementById("i_tr_i"); //entrada de intervalode riego
var select_tr_i = document.getElementById("select_tr_i"); //unidad de intervalo de riego
var l_tr_t1 = document.getElementById("l_tr_t1"); //salida tiempo formato decimal
var l_tr_t1 = document.getElementById("l_tr_t1"); //salida de tiempo formato horario

function calcular(){

let f = "";
if (i_tr_q.value.length == "") {
    f = " Caudal";
    l_tr_t1.innerHTML = "Define" + f;
    l_tr_t2.innerHTML = "Define" + f;
  }
if (i_tr_n.value.length == 0) {
  f = f + " Norma";
  l_tr_t1.innerHTML = "Define" + f;
  l_tr_t2.innerHTML = "Define" + f;
}
if (i_tr_a.value.length == "") {
  f = f + " Área";
  l_tr_t1.innerHTML = "Define" + f;
  l_tr_t2.innerHTML = "Define" + f;
}

if (i_tr_tu.value.length == "") {
  f = f + " Turnos";
  l_tr_t1.innerHTML = "Define" + f;
  l_tr_t2.innerHTML = "Define" + f;
}
if (i_tr_i.value.length == "") {
    f = f + " Intervalo";
    l_tr_t1.innerHTML = "Define" + f;
    l_tr_t2.innerHTML = "Define" + f;
  }




  

  if (f.length<1){
    let norma=0;    
    if (select_tr_n.value=="m³/ha")norma=i_tr_n.value;else norma=i_tr_n.value/1000;    
    let area=conv_a(i_tr_a.value,select_tr_a.value,"ha");
    let turnos= i_tr_tu.value;
    let intervalo= i_tr_i.value;
    let q=i_tr_q.value;
    let caudal =conv_q(q, select_tr_q.value, "l/s");
    console.log("Caudal-"+caudal+ "norma-"+ norma+" area-"+area+" turnos-"+ turnos+" Intervalo-"+intervalo)
    if (f.length<1){
    let t=tiempo_riego(caudal,norma,intervalo,area)
    l_tr_t1.innerHTML=t;
    l_tr_t2.innerHTML=Math.floor(t)+" Horas y "+Math.floor((t-Math.floor(t))*60)+" Minutos";
  }
 

  }


}




select_tr_n.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_tr_a.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_tr_tu.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_tr_q.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  select_tr_i.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );

  i_tr_n.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );

  i_tr_a.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_tr_tu.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_tr_q.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_tr_i.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );