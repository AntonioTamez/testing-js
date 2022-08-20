function areaTriangulo(base, altura){
  return (base * altura) /2
}

function areaCuadrado(lado1, lado2){
  return lado1*lado2
}

function areaCirculo(radio){
  return 3.1416 * (radio * radio)
}


module.exports = {

  areaTriangulo,
  areaCuadrado,
  areaCirculo

}
