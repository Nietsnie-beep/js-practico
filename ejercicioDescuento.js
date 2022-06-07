
const cupones=[{
  name:'Nietsnie',
  discount: 50,
}
]
console.log(cupones[0].name);

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  

   
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const inputCoupon = document.getElementById('InputName');
    const couponValue = inputCoupon.value;
    
    const resultP = document.getElementById("ResultP");


    // if (cupones.includes(couponValue)) {
    //     alert(couponValue)
    // }

    const iscuponvalid = function(cupon){
      return cupon.name === couponValue
    }

    const userCupon = cupones.find(iscuponvalid);

    if (!userCupon) {
      resultP.innerText = "Ese cupon no es valido"
    }

    else{
      const descuento = userCupon.discount
      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    
  }
 

