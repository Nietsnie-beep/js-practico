function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    100,
    200,
    250,
    500,
  ];
  
  const mitadLista1 = parseInt(lista1.length / 2);
  console.log('mitad de lista', mitadLista1);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; //2 - 1 = 1(200)
    console.log('mitad de lista -1',elemento1);
    const elemento2 = lista1[mitadLista1];//2 = 2(250)
    console.log('mitad de lista',elemento2);

  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }