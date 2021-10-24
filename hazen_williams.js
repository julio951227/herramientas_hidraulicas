var i_hz_q = document.getElementById("i_hz_q"); //entrada de caudal
var select_hz_q = document.getElementById("select_hz_q"); //unidad de caudal
var i_hz_d = document.getElementById("i_hz_d"); //entrada de diametro
var select_hz_d = document.getElementById("select_hz_d"); //unidad de diametro
var i_hz_l = document.getElementById("i_hz_l"); //entrada de longitud
var select_hz_l = document.getElementById("select_hz_l"); //unidad de longitud
var i_hz_c = document.getElementById("i_hz_c"); //entrada de coeficiente c
var select_hz_c = document.getElementById("select_hz_c"); //eleccion de coeficiente c
var l_hz_j = document.getElementById("l_hz_j"); //salida de gradiente de perdida
var l_hz_hf = document.getElementById("l_hz_hf"); //salida de perdida

//para que ponga los valores de C segun se seleccionen
select_hz_c.addEventListener(
  "click",
  function () {
    let cc = select_hz_c.value;
    let c = cc.substring(cc.indexOf("-") + 1, cc.length);
    i_hz_c.value = c;

    calcular();
  },
  false
);
///////////////

//Para que indique que faltan datos por llenar en el gradiente de pérdida

function calcular() {
    let f = "";
    if (i_hz_q.value.length == 0) {
      f = " Caudal";
      l_hz_j.innerHTML = "Define" + f;
    }
    if (i_hz_d.value.length == "") {
      f = f + " Diámetro";
      l_hz_j.innerHTML = "Define" + f;
    }
    if (i_hz_c.value.length == "") {
      f = f + " Coeficiente C";
      l_hz_j.innerHTML = "Define" + f;
    }
    
  if (f.length<1){
  let q=i_hz_q.value;
  let caudal =conv_q(q, select_hz_q.value, "m³/s");
  let diametro=0;
let longitud =0;
  if(select_hz_d.value=="mm") diametro=i_hz_d.value/1000;else diametro=i_hz_d.value;
  if(select_hz_l.value=="km")longitud=i_hz_l.value*1000;else longitud=i_hz_l.value;
  let c=i_hz_c.value;
  let j=gradiente_perdida(caudal,diametro,c)
  l_hz_j.innerHTML=j;
  console.log("caudal "+caudal+" diametro"+diametro+ " c"+c);
   

  
  if (i_hz_l.value.length == 0) {
      l_hz_hf.innerHTML="Define Longitud";
  }
  else{
 
   l_hz_hf.innerHTML=perdidas_hf(j,longitud)
  }
}
  };


  select_hz_q.addEventListener(
    "click",
    function () {
      calcular();
    },
    false
  );



select_hz_d.addEventListener(
  "click",
  function () {
    calcular();
  },
  false
);

select_hz_l.addEventListener(
  "click",
  function () {
    calcular();
  },
  false
);

i_hz_q.addEventListener(
  "keyup",
  function () {
    calcular();
  },
  false
);
i_hz_d.addEventListener(
  "keyup",
  function () {
    calcular();
  },
  false
);
i_hz_l.addEventListener(
  "keyup",
  function () {
    calcular();
  },
  false
);
i_hz_l.addEventListener(
  "keyup",
  function () {
    calcular();
  },
  false
);
i_hz_c.addEventListener(
  "keyup",
  function () {
    calcular();
  },
  false
);