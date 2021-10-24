var i_pm_q = document.getElementById("i_pm_q"); //entrada de caudal
var select_pm_q = document.getElementById("select_pm_q"); //unidad de carga
var i_pm_c = document.getElementById("i_pm_c"); //entrada de caudal
var select_pm_c = document.getElementById("select_pm_c"); //unidad de carga
var i_pm_em = document.getElementById("i_pm_em"); //entrada de eficiencia motor
var select_pm_em = document.getElementById("select_pm_em"); //unidad de eficiencia motor
var i_pm_eb = document.getElementById("i_pm_eb"); //entrada de eficiencia motor
var select_pm_eb = document.getElementById("select_pm_eb"); //unidad de eficiencia motor
var l_pm_c1 = document.getElementById("l_pm_c1"); //salida tiempo formato decimal
var l_pm_c2 = document.getElementById("l_pm_c2"); //salida de tiempo formato horario

function calcular(){
    let f = "";
    if (i_pm_q.value.length == "") {
        f = " Caudal";
        l_pm_c1.innerHTML = "Define" + f;
        l_pm_c2.innerHTML = "Define" + f;
      }
    if (i_pm_c.value.length == 0) {
      f = f + " Carga";
      l_pm_c1.innerHTML = "Define" + f;
      l_pm_c2.innerHTML = "Define" + f;
    }
    if (i_pm_eb.value.length == "") {
      f = f + " E.Bomba";
      l_pm_c1.innerHTML = "Define" + f;
      l_pm_c2.innerHTML = "Define" + f;
    }
    
    if (i_pm_em.value.length == "") {
      f = f + " E.Motor";
      l_pm_c1.innerHTML = "Define" + f;
      l_pm_c2.innerHTML = "Define" + f;
    }
    
    if (f.length<1){
        let caudal = conv_q(i_pm_q.value,select_pm_q.value,"l/s")
        let carga=conv_p(i_pm_c.value,select_pm_c.value,"m.c.a")
        let eb=i_pm_eb.value;
        let em=i_pm_em.value;
        let pot=potencia_motor(caudal,carga,eb,em);
    l_pm_c1.innerHTML=pot;
    l_pm_c2.innerHTML = pot*1.341;
    }
    
    

}


select_pm_q.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );
  
  select_pm_c.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );
  
  select_pm_eb.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );
  
  select_pm_em.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );
  
  
  i_pm_q.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  
  i_pm_c.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_pm_eb.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );
  i_pm_em.addEventListener(
    "keyup",
    function () {
      calcular();
    },
    false
  );