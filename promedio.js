

function calcularMediaAritmetica(lista){

    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista  = sumaLista + lista1[i]
    // }
    
    const  sumaLista = lista.reduce( 
        (valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}