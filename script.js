function conv_V(vin, UMin, UMout) {
  //convertir volumen
  if (UMin == UMout) return vin;
  else {
    //valores para convertir entrada a m3
    const int_v = [
      ["m³", 1],
      ["l", 0.001],
      ["gal", 0.003785412],
      ["galᵘᵏ", 0.004546092],
      ["CC", 1e-6],
      ["hm³", 1000000],
    ];

    //valores para convertir salida desde m3
    const out_v = [
      ["m³", 1],
      ["l", 1000],
      ["gal", 264.1721],
      ["galᵘᵏ", 219.9692],
      ["CC", 1000000],
      ["hm³", 1e-6],
    ];
    let f1, f2;
    for (let i = 0; i < int_v.length; i++) {
      if (int_v[i][0] == UMin) {
        f1 = int_v[i][1];
      }
    }
    for (let i = 0; i < out_v.length; i++) {
      if (out_v[i][0] == UMout) {
        f2 = out_v[i][1];
      }
    }
    return vin * f1 * f2;
  }
}

function conv_t(Tin, UMin, UMout) {
  //convertir tiempo
  if (UMin == UMout) return Tin;
  else {
    //valores para convertir entrada a s
    const int_t = [
      ["s", 1],
      ["min", 60],
      ["h", 3600],
      ["d", 86400],
    ];

    //valores para convertir entrada desde s
    const out_t = [
      ["s", 1],
      ["min", 0.0166666666666667],
      ["h", 0.0002777777777777778],
      ["d", 0.00001157407407407407],
    ];
    let f1, f2;
    for (let i = 0; i < int_t.length; i++) {
      if (int_t[i][0] == UMin) {
        f1 = int_t[i][1];
      }
    }
    for (let i = 0; i < out_t.length; i++) {
      if (out_t[i][0] == UMout) {
        f2 = out_t[i][1];
      }
    }
    return Tin * f1 * f2;
  }
}

function conv_q(qin, UMin, UMout) {
  if (UMin == UMout) return qin;
  else {
    ///descomponer unidades de caudal
    const descomposición = [
      ["l/s", "l", "s"],
      ["l/min", "l", "min"],
      ["l/h", "l", "h"],
      ["l/d", "l", "d"],
      ["m³/s", "m³", "s"],
      ["m³/min", "m³", "min"],
      ["m³/h", "m³", "h"],
      ["m³/d", "m³", "d"],
      ["gal/s", "gal", "s"],
      ["gal/min", "gal", "min"],
      ["gal/h", "gal", "h"],
      ["gal/d", "gal", "d"],
      ["galᵘᵏ/s", "galᵘᵏ", "s"],
      ["galᵘᵏ/min", "galᵘᵏ", "min"],
      ["galᵘᵏ/h", "galᵘᵏ", "h"],
      ["galᵘᵏ/d", "galᵘᵏ", "d"],
    ];

    let u1, u2, uf1, uf2;
    for (let i = 0; i < descomposición.length; i++) {
      if (descomposición[i][0] == UMin) {
        u1 = descomposición[i][1];
        u2 = descomposición[i][2];
      }

      if (descomposición[i][0] == UMout) {
        uf1 = descomposición[i][1];
        uf2 = descomposición[i][2];
      }
    }

    return conv_V(qin, u1, uf1) / conv_t(1, u2, uf2);
  }
}

function conv_p(pin, UMin, UMout) {
  if (UMin == UMout) return pin;
  else {
    //valores para convertir entrada a m.c.a
    const int_p = [
      ["m.c.a", 1],
      ["bar", 10.19716],
      ["atm", 10.33227],
      ["Pa", 0.0001019716],
      ["kg/cm²", 10],
      ["PSI", 0.7030696],
    ];

    //valores para convertir entrada desde m.c.a
    const out_p = [
      ["m.c.a", 1],
      ["bar", 0.0980665],
      ["atm", 0.09678411],
      ["Pa", 9806.65],
      ["kg/cm²", 0.1],
      ["PSI", 1.422334],
    ];

    let f1, f2;
    for (let i = 0; i < int_p.length; i++) {
      if (int_p[i][0] == UMin) {
        f1 = int_p[i][1];
      }
    }
    for (let i = 0; i < out_p.length; i++) {
      if (out_p[i][0] == UMout) {
        f2 = out_p[i][1];
      }
    }
    console.log(pin + " " + f1 + " " + f2);
    return pin * f1 * f2;
  }
}
function conv_a(ain, UMin, UMout) {
  if (UMin == UMout) return ain;
  else {
    //valores para convertir entrada a m²
    const int_a = [
      ["ha", 10000],
      ["cab", 134200],
      ["mm²", 1e-6],
      ["cm²", 0.0001],
      ["dm²", 0.01],
      ["m²", 1],
      ["km²", 1000000],
      ["in²", 0.00064516],
      ["cordel²", 414.2],
      ["yarda²", 0.836127],
      ["ft²", 0.092903],
      ["acre", 4046.86],
    ];

    //valores para convertir entrada desde m²
    const out_a = [
      ["ha", 0.0001],
      ["cab", 7.45156482814009e-6],
      ["mm²", 1000000],
      ["cm²", 10000],
      ["dm²", 100],
      ["m²", 1],
      ["km²", 1e-6],
      ["in²", 1550.003],
      ["cordel²", 0.0024142926122646],
      ["yarda²", 1.196],
      ["ft²", 1076.39],
      ["acre", 0.000247105],
    ];

    let f1, f2;
    for (let i = 0; i < int_a.length; i++) {
      if (int_a[i][0] == UMin) {
        f1 = int_a[i][1];
      }
    }
    for (let i = 0; i < out_a.length; i++) {
      if (out_a[i][0] == UMout) {
        f2 = out_a[i][1];
      }
    }
    console.log(ain + " " + f1 + " " + f2);
    return ain * f1 * f2;
  }
}
function conv_m(min, UMin, UMout) {
  if (UMin == UMout) return min;
  else {
    //valores para convertir entrada a kg
    const int_m = [
      ["t", 1000],
      ["l", 0.453592],
      ["kg", 1],
      ["qq", 45.3592],
      ["g", 0.001],
      ["oz", 0.0283495],
      ["@", 11.5023],
    ];
    //valores para convertir entrada desde kg
    const out_m = [
      ["t", 0.001],
      ["l", 2.20462],
      ["kg", 1],
      ["qq", 0.0220462],
      ["g", 1000],
      ["oz", 35.274],
      ["@", 0, 086939133912348],
    ];

    let f1, f2;
    for (let i = 0; i < int_m.length; i++) {
      if (int_m[i][0] == UMin) {
        f1 = int_m[i][1];
      }
    }
    for (let i = 0; i < out_m.length; i++) {
      if (out_m[i][0] == UMout) {
        f2 = out_m[i][1];
      }
    }
    console.log(min + " " + f1 + " " + f2);
    return min * f1 * f2;
  }
}

function conv_l(lin, UMin, UMout) {
  if (UMin == UMout) return lin;
  else {
    //valores para convertir entrada a m
    const int_l = [
      ["m", 1000],
      ["m", 1],
      ["cm", 0.01],
      ["milla", 1609.34],
      ["cordel", 20.352],
      ["yarda",0.9144],
      ["ft",0.3048],
      ["vara",0.848],
      ["legua",4240]
    ];
    //valores para convertir entrada desde m
    const out_l = [
      ["km", 0.001],
      ["m", 1],
      ["cm", 100],
      ["milla", 0.000621371],
      ["cordel", 0.0491352201257862],
      ["yarda",1.09361],
      ["ft",3.28084],
      ["vara",3.281],
      ["legua",2,.58490566037736e-4]
    ];

    let f1, f2;
    for (let i = 0; i < int_l.length; i++) {
      if (int_l[i][0] == UMin) {
        f1 = int_l[i][1];
      }
    }
    for (let i = 0; i < out_l.length; i++) {
      if (out_l[i][0] == UMout) {
        f2 = out_l[i][1];
      }
    }
    console.log(lin + " " + f1 + " " + f2);
    return lin * f1 * f2;
  }
}

function conv_r(rin, UMin, UMout) {
  if (UMin == UMout) return rin;
  else {
    ///descomponer unidades de caudal
    const descomposición = [
      ["t/ha", "t", "ha"],
      ["t/cab", "t", "cab"],
      ["qq/ha", "qq", "ha"],
      ["qq/cab", "qq", "cab"]      
    ];

    let u1, u2, uf1, uf2;
    for (let i = 0; i < descomposición.length; i++) {
      if (descomposición[i][0] == UMin) {
        u1 = descomposición[i][1];
        u2 = descomposición[i][2];
      }

      if (descomposición[i][0] == UMout) {
        uf1 = descomposición[i][1];
        uf2 = descomposición[i][2];
      }
    }

    return conv_m(rin, u1, uf1) / conv_a(1, u2, uf2);
  }
}

function gradiente_perdida(caudal,diametro,coeficiente_c){
return 10.674*Math.pow(caudal,1.852)*Math.pow(coeficiente_c,-1.852)*Math.pow(diametro,-4.871)
}
function perdidas_hf(gradiente,longitud){
  return gradiente*longitud
  }

function hidromodulo(norma,tiempo,intervalo){
  return norma/(3.6*intervalo*tiempo)
}

function caudal_riego(area,hidromodulo,turnos){
return area*hidromodulo/turnos
}
function tiempo_riego(caudal,norma,intervalo,area){
  return norma*area/(3.6*intervalo*caudal)

}
function potencia_motor(caudal,carga,e_bomba,e_motor){
  return caudal*carga/(102*e_bomba*e_motor)
}






